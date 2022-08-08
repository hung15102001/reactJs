import React, { useState } from 'react'
import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Checkbox, Form, Input } from 'antd';
import logo from '../../assets/images/logo.png'
import styled from 'styled-components';
import { useForm,SubmitHandler } from 'react-hook-form';
import { UserType } from '../../type/User';
import { Link, useNavigate } from 'react-router-dom';
import { signin, signup } from '../../api/user';
import { ToastContainer, toast } from 'react-toast'
import { authen } from '../../untils/localstore';
type Props = {}
type FormL = {
  name:string 
  email: string
  password: string 
}
const Signup = (props: Props) => {
  const onFinish = (values: any) => {
    console.log('Received values of form: ', values);
  };
  const {register, handleSubmit, formState: {errors}} = useForm<FormL>();
  const navigate = useNavigate()

  const onLogin: SubmitHandler<FormL> = async dataForm => {
      try {
        const {data:user} = await signin(dataForm);
        localStorage.setItem('authen', JSON.stringify(dataForm));
        toast('Success')
       authen(user, ()=> navigate('/'))
      } catch (error) {
        toast('error')
      }
  }
  return (<>
    <ToastContainer />
    <Container>
      {/* <div style={{ background: "#FFFFFF", width:"100%"}}> */}
      <FormC onSubmit={handleSubmit(onLogin)}>

          <label htmlFor="">Email</label>
          <div>
          <InputC type="email" placeholder='Email@gmail.com' {...register('email', {required: true})}/>
         </div>
        
          <label htmlFor="">Password</label>
          <div>
          <InputC type="password"  placeholder='...............' {...register('password', {required: true})}/>
         </div>

        <div>
          <ButtonC type="submit">Đăng Nhập</ButtonC>
          
        </div>
        <div>
          <Link to={"/signup"}>Đăng ký ngay</Link>
        </div>
      </FormC>

    {/* </div> */}
    <FormRight>
    <Logo src={logo} alt="" />
    </FormRight>
  </Container>
  </>
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
const FormC = styled.form `
   width: 100%;
    height: 400px;
    margin: auto ;
    /* background-color: #fff; */
    /* border: 1px solid #D9D9D9; */
    border:none;
    border-radius: 10px;
    gap: 30px;
    margin-left:80px;
`
const InputC = styled.input `
  width:300px;
  height:40px;
  border-radius:8px;
  padding-left:8px;
  margin-top:20px;
  margin-bottom:20px;
`

const ButtonC = styled.button `
  width: 300px;
height: 40px;
background: #FF424E;
border-radius: 8px;
font-weight:bold;
color:white;
border:none;
margin-bottom:20px;
`
export default Signup