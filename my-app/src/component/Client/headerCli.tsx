import React from 'react'
import { MailOutlined, AppstoreOutlined, SettingOutlined } from '@ant-design/icons';
import logo from '../../asset/image/logo.png';
import styled from "styled-components";
type Props = {}

const HeaderCli = (props: Props) => {
  return (
    <Menu>
      <Logo src={logo} />
      <Price>
        <div>Xem giá tại </div>
          <div>Miền Nam</div>
      </Price>
    </Menu>
  )
}
const Logo = styled.img`
  width: 65px;
  height:57px;
  padding:5px;
`
const Menu = styled.div`
  background:red;
  height:64px;
  display:flex;
`
const Price  = styled.div`
  height:45px;
  width:120px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
 color: white;
 text-align:center;
 padding: 3px 0px 3px 0px;
`
export default HeaderCli
