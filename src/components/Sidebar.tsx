import React, { useEffect, useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined,LaptopOutlined ,PhoneOutlined,HomeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { CateType } from '../type/Category';
import { listProduct } from '../api/products';

type MenuItem = Required<MenuProps>['items'][number];

type MenuItemType = {
  title? :string,
  icon: React.ReactNode,
  label?: string
}
  
  const items: MenuItemType[] = [
    {
      title: "Menu 1",
      icon: <AppstoreOutlined/>
    },
    {
      title: "Menu 2",
      label: "Menu 2",
      icon: <AppstoreOutlined/>
    }
  ];
  
  const Sidebar = () => {
    const [cate, setCate] = useState<CateType[]>([])
    useEffect(()=>{
        const getCate = async () => {
        const {data} = await listProduct();
        console.log(data);
        
            setCate(data)
        }
        getCate()
    }, [])
    const onClick: MenuProps['onClick'] = e => {
      console.log('click ', e);
    };
  
    return (
      <>
      <Menu
        onClick={onClick}
        style={{ width: 256 }}
        defaultSelectedKeys={['1']}
        defaultOpenKeys={['sub1']}
        mode="inline"
        items={items}
      />
      </>
    );
  };

  
export default Sidebar