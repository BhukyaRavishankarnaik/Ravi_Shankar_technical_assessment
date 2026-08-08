import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const FilterNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode 
      title="Filter" 
      inputs={[{ id: `${id}-in` }]} 
      outputs={[{ id: `${id}-match` }, { id: `${id}-fallback` }]}
    >
      <label style={{ fontSize: 12, display: 'flex', flexDirection: 'column', gap: 4 }}>
        Condition:
        <input 
          type="text" 
          className="nodrag" 
          placeholder="e.g. value > 10" 
          value={data?.condition || ''}
          onChange={(e) => updateNodeField(id, 'condition', e.target.value)}
          style={{ padding: '4px', borderRadius: '4px', border: '1px solid #ccc' }} 
        />
      </label>
    </BaseNode>
  );
};