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
    getItem('Máy tính', 'sub1', <LaptopOutlined />, [
      getItem('Macbook', 'g1', null, [getItem('Macbook m1', '1'), getItem('Macbook m2', '2')], 'group'),
      getItem('Gamming', 'g2', null, [getItem('MSI', '3'), getItem('Aser', '4')], 'group'),
    ]),
  
    getItem('Điện thoại', 'sub2', <PhoneOutlined />, [
      getItem('Oppo', '5'),
      getItem('Iphone', '6'),
      getItem('Xiaomi', 'sub3', null, [getItem('Option 7', '7'), getItem('Xiaomi node', '8')]),
    ]),
  
    getItem('Nhà thông minh', 'sub4', <HomeOutlined />, [
      getItem('Lọc không khí', '9'),
      getItem('Nóc thông minh', '10'),
    
    ]),
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