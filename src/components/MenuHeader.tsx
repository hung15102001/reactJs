import React from 'react'
import { Col, Row } from 'antd'
import { HomeOutlined, CarOutlined, ShoppingCartOutlined,PieChartOutlined } from '@ant-design/icons';
import { Link, useNavigate } from 'react-router-dom';
import { isAuthenticate } from '../untils/localstore';
const MenuHeader = () => {
    const a = isAuthenticate();
    const navigate = useNavigate()
    const logout = () => {
      localStorage.removeItem("user");
    }
    return (
        <div style={{ color: "white", margin:"auto 0" }}>
            <Row >

                <Col span={6}>
                    <Row style={{ lineHeight: "1.5" }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><HomeOutlined /></Col>
                        <Col span={14}><Link to={"/"}>Cửa hàng <br /> gần bạn</Link></Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row style={{ lineHeight: "1.5", }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><ShoppingCartOutlined /> </Col>
                        <Col span={14}><Link to={"/cart"}>Giỏ  <br /> hàng</Link></Col>
                    </Row>
                </Col>

                {a.user && (
                    <>
                      <Col span={6}>
                    <Row style={{ lineHeight: "1.5"}}>
                    <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><PieChartOutlined /> </Col>
                    <Col span={14}><Link to={"/admin"}>Xin chào {a.user.user.name} </Link></Col>
                    </Row>
                </Col>
                      <Col span={6}>
                    <Row style={{ lineHeight: "1.5"}}>
                      <Col span={14}><Link to={"/"} onClick={()=> logout()}>Đăng xuất </Link></Col>
                
                    </Row>
                </Col>
                    </>
                )}

                {!a && (
                    <>
                     <Col span={6}>
                    <Row style={{ lineHeight: "1.5"}}>
                      <Col span={14}><Link to={"/signin"}>Đăng nhập </Link></Col>
                    <Col span={10}><Link to={"/signup"}>Đăng ký</Link></Col>
                    </Row>
                </Col>
                    </>
                )}
               
            </Row>
        </div>
    )
}

export default MenuHeader