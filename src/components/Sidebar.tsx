import React from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined,LaptopOutlined ,PhoneOutlined,HomeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';

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
  
  const items: MenuProps['items'] = [
        
  ];
  
  const Sidebar = () => {
    const onClick: MenuProps['onClick'] = e => {
      console.log('click ', e);
    };
  
    return (
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
    );
  };

  
export default Sidebar