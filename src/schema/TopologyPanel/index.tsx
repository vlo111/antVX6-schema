import React from 'react';
import styled from 'styled-components';

const TopologyPanelStyle = styled.div`
  position: fixed;
  left: 0;
  top: 126px;
  width: 250px;
  background: #F2F2F2;
  height: 100%;
  z-index: 2;
`;

const TopologyPanel: React.FC = () => {
  return <TopologyPanelStyle>Side</TopologyPanelStyle>;
};

export default TopologyPanel;
