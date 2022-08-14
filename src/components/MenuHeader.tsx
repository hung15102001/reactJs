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
      navigate('/')
    }
    return (
        <div style={{ color: "white", margin:"auto 0" }}>
            <Row >

                <Col span={6}>
                    <Row style={{ lineHeight: "1.5",color:"white" }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><HomeOutlined /></Col>
                        <Col  span={14}><Link style={{color:"white", fontWeight:'bold' }} to={"/"}>Cửa hàng <br /> gần bạn</Link></Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row style={{ lineHeight: "1.5", }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><ShoppingCartOutlined /> </Col>
                        <Col span={14}><Link style={{color:"white", fontWeight:'bold' }} to={"/cart"}>Giỏ  <br /> hàng</Link></Col>
                    </Row>
                </Col>

                {a.user && (
                    <>
                    {a.user.user.role == 1 && (
                        <Col span={6}>
                        <Row style={{ lineHeight: "1.5"}}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><PieChartOutlined /> </Col>
                        <Col span={14}><Link style={{color:"white", fontWeight:'bold' }} to={"/admin"}>Xin chào {a.user.user.name} </Link></Col>
                         </Row>
                        </Col>
                    )}
                      <Col span={6}>
                    <Row style={{ lineHeight: "1.5"}}>
                      <Col span={14}><Link style={{color:"white", fontWeight:'bold' }} to={"/"} onClick={()=> logout()}>Đăng xuất </Link></Col>
                
                    </Row>
                </Col>
                    </>
                )}

                {!a && (
                    <>
                     <Col span={6}>
                    <Row style={{ lineHeight: "1.5"}}>
                      <Col span={14}><Link style={{color:"white", fontWeight:'bold' }} to={"/signin"}>Đăng nhập </Link></Col>
                    <Col span={10}><Link style={{color:"white", fontWeight:'bold' }} to={"/signup"}>Đăng ký</Link></Col>
                    </Row>
                </Col>
                    </>
                )}
               
            </Row>
        </div>
    )
}

export default MenuHeader