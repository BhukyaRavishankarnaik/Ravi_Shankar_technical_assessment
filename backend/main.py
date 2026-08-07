from fastapi import FastAPI
from pydantic import BaseModel
from typing import List, Dict, Any
from collections import deque, defaultdict
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

class Pipeline(BaseModel):
    nodes: List[Dict[str, Any]]
    edges: List[Dict[str, Any]]

def check_is_dag(nodes: List[Dict[str, Any]], edges: List[Dict[str, Any]]) -> bool:
    if not nodes:
        return True
    node_ids = {node["id"] for node in nodes}
    in_degree = {node_id: 0 for node_id in node_ids}
    adj_list = defaultdict(list)
    for edge in edges:
        source = edge.get("source")
        target = edge.get("target")
        if source in in_degree and target in in_degree:
            adj_list[source].append(target)
            in_degree[target] += 1
    queue = deque([node_id for node_id, degree in in_degree.items() if degree == 0])
    visited_count = 0
    while queue:
        current = queue.popleft()
        visited_count += 1
        for neighbor in adj_list[current]:
            in_degree[neighbor] -= 1
            if in_degree[neighbor] == 0:
                queue.append(neighbor)
    return visited_count == len(node_ids)

@app.post("/pipelines/parse")
def parse_pipeline(pipeline: Pipeline):
    return {
        "num_nodes": len(pipeline.nodes),
        "num_edges": len(pipeline.edges),
        "is_dag": check_is_dag(pipeline.nodes, pipeline.edges),
    }