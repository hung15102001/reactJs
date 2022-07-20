import React from 'react'
import { Col, Row } from 'antd'
import { HomeOutlined, CarOutlined, ShoppingCartOutlined } from '@ant-design/icons';
const MenuHeader = () => {
    return (
        <div style={{ color: "white", margin:"auto 0" }}>
            <Row >
                <Col span={6}>
                    <Row style={{ lineHeight: "1.5"  , display:"block"}}>
                        <Col >Gọi mua hàng</Col>
                        <Col>18002097</Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row style={{ lineHeight: "1.5" }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><HomeOutlined /></Col>
                        <Col span={14}>Cửa hàng <br /> gần bạn</Col>
                    </Row>
                </Col>

                <Col span={6}>
                    <Row style={{ lineHeight: "1.5" }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><CarOutlined /> </Col>
                        <Col span={14}>Tra cứu <br /> đơn hàng</Col>
                    </Row>
                </Col>
                <Col span={6}>
                    <Row style={{ lineHeight: "1.5", }}>
                        <Col span={8} style={{margin:"auto 0", fontSize:"30px"}}><ShoppingCartOutlined /> </Col>
                        <Col span={14}>Giỏ  <br /> hàng</Col>
                    </Row>
                </Col>
            </Row>
        </div>
    )
}

export default MenuHeader