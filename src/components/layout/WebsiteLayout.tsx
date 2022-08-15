import React from 'react'
import { Outlet } from 'react-router-dom'
import Footer from '../Footer'
import Header from '../Header'

const WebsiteLayout = () => {
    
    return (
        <div style={{position:"relative"}}>
            <Header />
            <Outlet/>
                <Footer/>
        </div>
    )
}

export default WebsiteLayout