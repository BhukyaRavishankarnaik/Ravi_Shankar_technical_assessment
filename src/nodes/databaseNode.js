import { BaseNode } from '../components/BaseNode';

export const DatabaseNode = ({ id }) => (
  <BaseNode title="Database Query" inputs={[{ id: `${id}-query` }]} outputs={[{ id: `${id}-rows` }]}>
    <textarea className="nodrag" placeholder="SELECT * FROM users;" rows={2} style={{ padding: '4px' }} />
  </BaseNode>
);