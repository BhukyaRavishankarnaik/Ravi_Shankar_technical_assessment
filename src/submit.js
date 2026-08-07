import { useStore } from "./store";

export const SubmitButton = () => {
  const nodes = useStore((state) => state.nodes);
  const edges = useStore((state) => state.edges);

  const handleSubmit = async () => {
    try {
      const response = await fetch("http://127.0.0.1:8000/pipelines/parse", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ nodes, edges }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      
      const data = await response.json();
      alert(
        `Pipeline Submission Results:\n\n` +
          `• Number of Nodes: ${data.num_nodes}\n` +
          `• Number of Edges: ${data.num_edges}\n` +
          `• Is DAG: ${data.is_dag ? "Yes (Acyclic)" : "No (Contains Cycles)"}`
      );
    } catch (error) {
      console.error("Error parsing pipeline:", error);
      alert("Failed to submit pipeline. Ensure FastAPI backend is running on http://127.0.0.1:8000.");
    }
  };

  return (
    <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "16px" }}>
      <button
        type="button"
        onClick={handleSubmit}
        style={{
          padding: "10px 24px",
          fontSize: "14px",
          fontWeight: "600",
          cursor: "pointer",
          borderRadius: "6px",
          border: "none",
          backgroundColor: "#2563eb",
          color: "#ffffff",
        }}
      >
        Submit Pipeline
      </button>
    </div>
  );
};