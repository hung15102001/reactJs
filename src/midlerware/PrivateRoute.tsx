import React from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const isUser = localStorage.getItem("user") ? JSON.parse(String(localStorage.getItem("user"))).user : ""; 
    console.log(isUser.user);
    if (!isUser) {
        return <Navigate to="/"/>
    } else if (isUser.user.role == "2") {
        return <Navigate to="/"/>
    } 
  return props.children
}

export default PrivateRoute