import React from "react";
import logo from "../../asset/image/logo.png";
import styled from "styled-components";
import { Input } from "antd";

type Props = {};
const { Search } = Input;
const onSearch = (value: string) => console.log(value);
const MenuAdmin = (props: Props) => {
  return (
    <Menu>
      <MenuLeft>
        <div >
          <Logo src={logo} />
        </div>
        <div>
          <h1>Dashboard</h1>
        </div>
        <div>
          <Search
            placeholder="input search text"
            onSearch={onSearch}
            style={{ width: 320 }}
          />
        </div>
      </MenuLeft>
      <MenuRight>
        Xin Chào <i>Hùng</i>
      </MenuRight>
    </Menu>
  );
};
const Logo = styled.img`
  width: 65px;
  height: 57px;
  padding: 5px;
`;
const Menu = styled.div`
  width: 100%;
  height: 60px;
  display: inline-flex;
  justify-content: space-between;
`;

const MenuLeft = styled.div`
    width:50%;
    display: flex;
`

const MenuRight = styled.div`
    width:50%;
    
`
// const Search = styled.input`
//     width: 350px;
//     height: 35px;
//     border: 1px solid gray;
//     border-radius: 10px;
// `

export default MenuAdmin;
