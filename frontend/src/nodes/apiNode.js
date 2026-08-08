import { BaseNode } from '../components/BaseNode';

export const APINode = ({ id }) => (
  <BaseNode title="API Request" inputs={[{ id: `${id}-payload` }]} outputs={[{ id: `${id}-res` }]}>
    <input type="text" className="nodrag" placeholder="https://api.example.com" style={{ padding: '4px' }} />
  </BaseNode>
);