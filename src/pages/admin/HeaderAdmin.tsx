import React from 'react'
import styled from 'styled-components'
import { Input } from 'antd';
import { MailOutlined, AppstoreOutlined, SearchOutlined } from '@ant-design/icons';
import logo from '../../assets/images/anhhtus-logo 2.png'
import { Col, Row } from 'antd'
import { UserOutlined } from '@ant-design/icons';
// import MenuHeader from './MenuHeader';
const HeaderAdmin = () => {
  return (
    <div>
          <HeaderCo style={{padding:"10px 0"}} >
            <Menu>
                <div style={{display:"flex"}}>
                    <Logo src={logo} alt="" />
                    <p style={{float:"right",margin:"auto", color:"white"}}>Dashboard</p>
                </div>

                <div style={{ margin: "auto 0" }}>
                    <div>
                        <Input size="large" placeholder=" Search here..." style={{ borderRadius: "10px" }} prefix={<SearchOutlined/>} />
                        {/* <Search placeholder="input search text" /> */}
                    </div>
                </div>
                <div style={{margin:"auto 0"}}>
                    <p style={{float:"right", color:"white"}}> Xin chao long</p>
                </div>
               {/* <MenuHeader/> */}

            </Menu>
        </HeaderCo>
    </div>
  )
}
const Logo = styled.img`
    widtd: 65px;
    height:57px;
    max-width:100%

`

const HeaderCo = styled.div`
    margin: auto;
    
    background-color: #00B0D7;
    padding: 5px 10px
`
const Menu = styled.div`
    width:90%;
    display:grid ;
    grid-template-columns: 2fr 4fr 5fr;
    margin:auto;
    gap:30px;
`
export default HeaderAdmin