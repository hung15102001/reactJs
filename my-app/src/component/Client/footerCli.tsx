import { Col, Row } from 'antd'
import React from 'react'
import styled from 'styled-components'

type Props = {}

const FooterCli = (props: Props) => {
  return (
    <Footer className='footer'>
     <Row gutter={[16, 16]}>
  <Col span={8} >Điện thoại Iphone 13</Col>
  <Col span={8} >Điện thoại Iphone 13</Col>
  <Col span={8} >Điện thoại Iphone 13</Col>
  <Col span={8} >Điện thoại Iphone 13</Col>
  <Col span={8} >Điện thoại Iphone 13</Col>
  <Col span={8} >Điện thoại Iphone 13</Col>
  <Col span={8} >Điện thoại Iphone 13</Col>
  <Col span={8} >Điện thoại Iphone 13</Col>
  <Col span={8} >Điện thoại Iphone 13</Col>
</Row>

    <Info>Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD: 0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ: 350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh, Việt Nam. Điện thoại: 028.7108.9666.</Info>

    </Footer>
  )
}


const Footer = styled.div`
  height: 168px;
  background: #F8F8F8;
  margin:auto;
  text-align:center;
  line-height:auto;
  padding:10px;
  margin-top:32px;
`

const Info = styled.div`
  text-lign:center;
  margin:auto;
  font-size:10px;
  color:rgba(0, 0, 0, 0.5);
  margin-top:15px;
  width:1000px;
`
export default FooterCli