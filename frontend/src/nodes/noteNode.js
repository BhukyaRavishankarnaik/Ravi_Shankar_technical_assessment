import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const NoteNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);

  return (
    <BaseNode title="Note" style={{ background: '#fffde7', border: '1px solid #fbc02d' }}>
      <textarea
        className="nodrag"
        placeholder="Add documentation..."
        rows={3}
        value={data?.note || ''}
        onChange={(e) => updateNodeField(id, 'note', e.target.value)}
        style={{
          width: '100%',
          padding: '6px',
          border: '1px solid #e0e0e0',
          borderRadius: '4px',
          resize: 'vertical',
          boxSizing: 'border-box',
          fontSize: '12px',
          fontFamily: 'inherit',
          background: '#ffffff'
        }}
      />
    </BaseNode>
  );
};