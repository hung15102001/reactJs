import React from 'react'
import { PhoneOutlined, LaptopOutlined, TabletFilled, AudioOutlined, PicRightOutlined,AndroidOutlined} from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';

import styled from 'styled-components';
import LogoImage from '../../assets/images/logo.png'
import { Outlet, Link } from 'react-router-dom';
const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
  { key: "cellphone", icon: <AndroidOutlined />, label: <Link to="/admin">Điện thoại</Link> },
  {
    key: "categories", icon: <PicRightOutlined />,
    label: <Link to="/admin/categories">Categories</Link>
  },
]

const AdminLayout = () => {
  return (
    <div>
         <Layout>
    <HeaderCustom>
      <Logo src={LogoImage} />
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </HeaderCustom>
    <Layout>
      <Sider
        collapsible={true}
        width={200}
        className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
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
    background-color: #00B0D7;
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