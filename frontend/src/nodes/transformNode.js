import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const TransformNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode 
      title="Transform" 
      inputs={[{ id: `${id}-in` }]} 
      outputs={[{ id: `${id}-out` }]}
    >
      <label style={{ fontSize: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
        Operation:
        <select 
          className="nodrag" 
          value={data?.transformation || 'uppercase'}
          onChange={(e) => updateNodeField(id, 'transformation', e.target.value)}
          style={{ padding: '4px', borderRadius: '4px', border: '1px solid #ccc' }}
        >
          <option value="uppercase">Uppercase</option>
          <option value="trim">Trim</option>
          <option value="json">JSON Parse</option>
        </select>
      </label>
    </BaseNode>
  );
};