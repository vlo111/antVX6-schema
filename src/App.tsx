import React from 'react';
import GraphComponent from './graph/index1';
import { Menu, Toolbar } from '@antv/x6-react-components';
import '@antv/x6-react-components/es/menu/style/index.css';
import '@antv/x6-react-components/es/toolbar/style/index.css';
import {
  ZoomInOutlined, ZoomOutOutlined,
  UndoOutlined, RedoOutlined,
  DeleteOutlined
} from '@ant-design/icons';
import { message } from 'antd';

const Item = Toolbar.Item;
const Group = Toolbar.Group;

const App: React.FC = () => {
  const onClick: any = async (name: string) => {
    await message.success(`${name} clicked`, 10);
  };

  const renderZoomDropdown: () => JSX.Element = () => {
    const MenuItem = Menu.Item;
    const Divider = Menu.Divider;

    return (
      <Menu>
        <MenuItem name="resetView" hotkey="Cmd+H">
          Reset View
        </MenuItem>
        <MenuItem name="fitWindow" hotkey="Cmd+Shift+H">
          Fit Window
        </MenuItem>
        <Divider />
        <MenuItem name="25">25%</MenuItem>
        <MenuItem name="50">50%</MenuItem>
        <MenuItem name="75">75%</MenuItem>
        <MenuItem name="100">100%</MenuItem>
        <MenuItem name="125">125%</MenuItem>
        <MenuItem name="150">150%</MenuItem>
        <MenuItem name="200">200%</MenuItem>
        <MenuItem name="300">300%</MenuItem>
        <MenuItem name="400">400%</MenuItem>
      </Menu>
    );
  };

  return <>
    <Toolbar
      hoverEffect={true}
      align="right"
      size="big"
      onClick={onClick}
      extra={<span>Araks Menu</span>}
    >
      <Group>
        <Item
          name="zoom"
          tooltipAsTitle={true}
          tooltip="Zoom (Alt+Mousewheel)"
          dropdown={renderZoomDropdown()}
        >
          <span
            style={{
              display: 'inline-block',
              width: 40,
              textAlign: 'right'
            }}
          >
            100%
          </span>
        </Item>
      </Group>
      <Group>
        <Item
          name="zoomIn"
          tooltip="Zoom In (Cmd +)"
          icon={<ZoomInOutlined />}
        />
        <Item
          name="zoomOut"
          tooltip="Zoom Out (Cmd -)"
          icon={<ZoomOutOutlined />}
        />
      </Group>
      <Group>
        <Item
          name="undo"
          tooltip="Undo (Cmd + Z)"
          icon={<UndoOutlined />}
        />
        <Item
          name="redo"
          tooltip="Redo (Cmd + Shift + Z)"
          icon={<RedoOutlined />}
        />
      </Group>
      <Group>
        <Item
          name="delete"
          icon={<DeleteOutlined />}
          disabled={true}
          tooltip="Delete (Delete)"
        />
      </Group>
    </Toolbar>
    <GraphComponent />
    </>;
};

export default App;
