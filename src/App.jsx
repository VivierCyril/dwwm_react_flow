import { ReactFlow, Controls, Background, Panel } from '@xyflow/react';
import '@xyflow/react/dist/style.css';

import { initialNodes, initialEdges } from './nodes-edges.js';
import GroupNode from './GroupNode';

const nodeTypes = {
  group: GroupNode,
};

function Flow() {
  return (
    <div style={{ height: '100%' }}>
      <ReactFlow nodes={initialNodes} edges={initialEdges} nodeTypes={nodeTypes} fitView colorMode="system">
        <Background />
        <Controls />
        <Panel position="top-center">
          <h1>Développeur Web & Web Mobile</h1>
        </Panel>
      </ReactFlow>
    </div>
  );
}

export default Flow;
