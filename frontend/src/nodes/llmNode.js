import { BaseNode } from "../components/BaseNode";

export const LLMNode = ({ id }) => {
  return (
    <BaseNode
      title="LLM"
      inputs={[
        { id: `${id}-system` },
        { id: `${id}-prompt` }
      ]}
      outputs={[
        { id: `${id}-response` }
      ]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '8px', fontSize: 12 }}>
        <div style={{ color: '#6b7280' }}>System Prompt</div>
        <div style={{ color: '#6b7280' }}>User Prompt</div>
      </div>
    </BaseNode>
  );
};