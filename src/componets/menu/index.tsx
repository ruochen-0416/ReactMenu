import React, { useState } from 'react';
import {
  AppstoreOutlined,
  ContainerOutlined,
  DesktopOutlined,
  MailOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  PieChartOutlined,
} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Button, Menu } from 'antd';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: 'group',
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

const App: React.FC = (props:any) => {
  let {subArray , setSubArray , subKey , setSubKey , inputValue , setInputValue} = props

  const items: MenuItem[] = [
    getItem('菜单一', 'sub1', <MailOutlined />, [
      getItem(subArray[0], subArray[0]),
      getItem(subArray[1], subArray[1]),
    ]),
  
    getItem('菜单二', 'sub2', <AppstoreOutlined />, [
      getItem(subArray[2], subArray[2]),
      getItem(subArray[3], subArray[3]),
    ]),
  ];

  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapsed = () => {
    setCollapsed(!collapsed);
  };

  const onClick: MenuProps['onClick'] = (e) => {
    setSubKey(e.key)
    setInputValue(e.key)
  };

  return (
    <div style={{ width: 256 }}>
      <Button type="primary" onClick={toggleCollapsed} style={{ marginBottom: 16 }}>
        {collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
      </Button>
      <Menu
        onClick={onClick}
        defaultSelectedKeys={['子菜单1-1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        theme="dark"
        selectedKeys={[subKey]}
        inlineCollapsed={collapsed}
        items={items}
      />
    </div>
  );
};

export default App;