import React from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import logo from '../../assets/images/logo.png'
import styled from 'styled-components';
type Props = {}
const Signup = (props: Props) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  return (
    <Container>
      {/* <div style={{ background: "#FFFFFF", width:"100%"}}> */}
    <FormLeft>
    <Form
      name="normal_login"
      className="login-form"
      initialValues={{ remember: true }}
      onFinish={onFinish}
    >
      <Form.Item
        name="username"
        rules={[{ required: true, message: 'Please input your Username!' }]}
      >
        <label htmlFor="">Email</label>
        <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="Username" />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <label htmlFor="">Password</label>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item
        name="password"
        rules={[{ required: true, message: 'Please input your Password!' }]}
      >
        <label htmlFor="">Password confirm</label>
        <Input
          prefix={<LockOutlined className="site-form-item-icon" />}
          type="password"
          placeholder="Password"
        />
      </Form.Item>
      <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>

        <a className="login-form-forgot" href="">
          Forgot password
        </a>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" className="login-form-button" style={{width: "100%", background:"red"}}>
          Log in
        </Button>
       <p><a href="">register now!</a></p>
      </Form.Item>
    </Form>
    </FormLeft>
    {/* </div> */}
    <FormRight>
    <Logo src={logo} alt="" />
    </FormRight>
  </Container>
  )
}

const Container = styled.div `
    width: 800px;
    height: 508px;
    background: #F8F8F8;
    border-radius: 20px;
    margin: auto;
    margin-top: 90px;
    display: flex;
`
const FormLeft = styled.div `
  width: 100%;
    margin-top: 75px;
    margin-left: 90px;
    /* background: #FFFFFF; */
`
const FormRight = styled.div `
width:100%;
text-align:center;
line-height:508px;
border-radius: 0px 20px 20px 0px;
  
`
const Logo = styled.img`
  width: 150px;
height: 150px;
border-radius:10px;
`
export default Signup