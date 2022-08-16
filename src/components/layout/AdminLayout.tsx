import React, { useState } from 'react'

import { PhoneOutlined, LaptopOutlined, UnorderedListOutlined,AndroidFilled , ApiFilled,UserOutlined, MailOutlined, HddOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import { Link, Outlet, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import LogoImage from '../../assets/images/logo.png'
const { Header, Content, Sider } = Layout;

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

const items: MenuItem[] = [
  getItem('Sản phẩm', 'sub1', <AndroidFilled />, [
    getItem(<Link to="/admin/product">Danh sách</Link>, '1', <UnorderedListOutlined />),


  ]),
  getItem('Loại hàng', 'sub2',<HddOutlined />, [
    getItem( <Link to="/admin/categories/phone">Điện thoại</Link>, '5', <LaptopOutlined/>),
    getItem(<Link to="/admin/categories/linhKien">Linh kiện</Link>, '3', <ApiFilled />),
  ]),
  getItem('Người Dùng', 'sub3', <UnorderedListOutlined />, [
    getItem(<Link to="/admin/user">Danh sách</Link>, '6', <UserOutlined />),
  ]),
 
];
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];
const AdminLayout = () => {
  const navigate = useNavigate();
  const onOut = () =>{
    navigate('/')
  }
  const [openKeys, setOpenKeys] = useState(['sub1']);

  const onOpenChange: MenuProps['onOpenChange'] = keys => {
    const latestOpenKey = keys.find(key => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
    }
  }
  return (
    <div>
         <Layout>
    <HeaderCustom>
      <Logo src={LogoImage} />
      <div><button onClick={()=>onOut()}>Trang chủ</button></div>
    </HeaderCustom>
    <Layout>
      <Sider
        // collapsible={true}
        width={200}
        className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={items}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet />
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
    </div>
  )
}

const HeaderCustom = styled(Header)`
    background-color: gray;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default AdminLayout