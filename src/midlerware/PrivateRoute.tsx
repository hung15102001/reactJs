import React, { Children } from 'react'
import { Navigate } from 'react-router-dom';

type PrivateRouteProps = {
    children: JSX.Element;
}

const PrivateRoute = (props: PrivateRouteProps) => {
    const user = localStorage.getItem('user') ? JSON.parse(String(localStorage.getItem('user'))).user : "";
    if(!user){
        return <Navigate to={"/"} />
    }else if(user.user.role == '2'){
        return <Navigate to={"/"} />
    }
    return props.children
}

export default PrivateRoute