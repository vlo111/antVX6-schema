import React from 'react';
import Schema from './schema';
import { Layout, Tabs } from 'antd';
import type { TabsProps } from 'antd';
import styled from 'styled-components';

const AsnTabs = styled(Tabs)`
  .ant-tabs-nav-wrap {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const AsnLayout = styled(Layout)`
  .ant-layout-header {
    background-color: #F2F2F2;
  }
`;

const items: TabsProps['items'] = [
  {
    key: '1',
    label: 'Overview',
    children: <Schema />
  },
  {
    key: '2',
    label: 'Schema',
    children: <Schema />
  },
  {
    key: '3',
    label: 'Data sheet',
    children: <Schema />
  },
  {
    key: '4',
    label: 'Visualisation',
    children: <Schema />
  }
];

const App: React.FC = () => {
  return (
  <AsnLayout>
    <Layout.Header>
      header
    </Layout.Header>
    <AsnTabs defaultActiveKey="2" items={items} />
  </AsnLayout>)
  ;
};

export default App;
