import React from 'react'
import { Col, Row } from 'antd'
import { HomeOutlined, CarOutlined, ShoppingCartOutlined,PieChartOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
const MenuHeader = () => {
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
                    <Row style={{ lineHeight: "1.5" }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><CarOutlined /> </Col>
                        <Col span={14}><Link to={"/"}>Tra cứu <br /> đơn hàng</Link></Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row style={{ lineHeight: "1.5", }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><ShoppingCartOutlined /> </Col>
                        <Col span={14}><Link to={"/cart"}>Giỏ  <br /> hàng</Link></Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row style={{ lineHeight: "1.5"}}>
                    <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><PieChartOutlined /> </Col>
                    <Col span={14}><Link to={"/admin"}> Quản trị</Link></Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MenuHeader