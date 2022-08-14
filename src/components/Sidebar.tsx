import React, { useEffect, useState } from 'react'
import { AppstoreOutlined, MailOutlined, SettingOutlined,LaptopOutlined ,PhoneOutlined,HomeOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import { CateType } from '../type/Category';
import { listProduct } from '../api/products';
import { ProductType } from '../type/Products';
import { listCate } from '../api/categoriApi';

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
  const Sidebar = () => {
    const [cate, setCate] = useState<CateType[]>([])
    useEffect(()=>{
        const getCate = async () => {
        const {data} = await listCate();
        console.log(data);
        
            setCate(data)
        }
        getCate()
    }, [])
    const items: MenuProps['items'] = cate?.map((item:any, index:any )=>
     
        
    getItem(item.name, item.name  , <AppstoreOutlined />, 
       
       
    )
  

);
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