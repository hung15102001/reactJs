import React, { useEffect, useState } from "react";
import {
  PhoneOutlined,
  LaptopOutlined,
  TabletFilled,
  AudioOutlined,
  PicRightOutlined,
  AndroidOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Breadcrumb, Layout, Menu } from "antd";

import styled from "styled-components";
import LogoImage from "../../assets/images/logo.png";
import { Outlet, Link, useNavigate } from "react-router-dom";
import { QueryClient, useQuery } from "react-query";
import { listCate } from "../../api/categoriApi";
import { CateType } from "../../type/Category";


const { Header, Content, Sider } = Layout;


const item3: MenuProps["items"] = [
  {
    key: "products",
    icon: <AndroidOutlined />,
    label: <Link to="/admin">Products</Link>,
  },
  {
    key: "categories",
    icon: <PicRightOutlined />,
    label: <Link to="/admin/category">Categories</Link>,
  },
 
];


const AdminLayout = () => {
  const navigate = useNavigate()
  const onOut = () =>{
    navigate('/')
  }
  return (
    <div>
      <Layout>
        <HeaderCustom>
          <Logo src={LogoImage} />
          {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
          <div><button onClick={()=>onOut()}>Trang chủ</button></div>
        </HeaderCustom>
        <Layout>
          <Sider
            collapsible={true}
            width={200}
            className="site-layout-background"
          >
            <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
        />
          
          </Sider>
          <Layout style={{ padding: "0 24px 24px" }}>
            <ContentCustom>
              <Outlet />
            </ContentCustom>
          </Layout>
        </Layout>
      </Layout>
    </div>
  );
};

const HeaderCustom = styled(Header)`
  background-color: #00b0d7;
  height: 64px;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 64px;
  height: auto;
`;

const ContentCustom = styled(Content)`
  min-height: 100vh;
`;

export default AdminLayout;
