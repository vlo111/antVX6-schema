import React from 'react';

import Toolbar from './ToolBar';
import Dashboard from './Dashboard';
import TopologyPanel from './TopologyPanel';

const Schema: React.FC = () => {
  return <>
    <Toolbar />
    <TopologyPanel />
    <Dashboard />
  </>;
};

export default Schema;
