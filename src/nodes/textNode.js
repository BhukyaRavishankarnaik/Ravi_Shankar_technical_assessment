import { useState, useMemo } from 'react';
import { BaseNode } from '../components/BaseNode';
import { useStore } from '../store';

export const TextNode = ({ id, data }) => {
  const updateNodeField = useStore((state) => state.updateNodeField);
  const [currText, setCurrText] = useState(data?.text || '{{input}}');

  // Extract unique JS variable names enclosed in {{ variable }}
  const variables = useMemo(() => {
    const regex = /\{\{\s*([a-zA-Z_$][a-zA-Z0-9_$]*)\s*\}\}/g;
    const matches = new Set();
    let match;
    while ((match = regex.exec(currText)) !== null) {
      matches.add(match[1]);
    }
    return Array.from(matches);
  }, [currText]);

  // Create input handles for each parsed variable
  const dynamicInputs = variables.map((variable) => ({
    id: `${id}-${variable}`,
  }));

  const handleTextChange = (e) => {
    const value = e.target.value;
    setCurrText(value);
    updateNodeField(id, 'text', value);
  };

  return (
    <BaseNode
      title="Text"
      inputs={dynamicInputs}
      outputs={[{ id: `${id}-output` }]}
    >
      <div style={{ display: 'flex', flexDirection: 'column', gap: '4px' }}>
        <label style={{ fontSize: '12px', color: '#4b5563' }}>Text:</label>
        <textarea
          className="nodrag"
          value={currText}
          onChange={handleTextChange}
          rows={1}
          style={{
            width: `${Math.max(160, currText.length * 8)}px`,
            height: `${Math.max(40, currText.split('\n').length * 20)}px`,
            resize: 'none',
            boxSizing: 'border-box',
            padding: '6px',
            borderRadius: '4px',
            border: '1px solid #ccc',
          }}
        />
      </div>
    </BaseNode>
  );
};