import React from 'react'
import { Outlet } from 'react-router-dom'
import Banner from '../Banner'
import Footer from '../Footer'
import Header from '../Header'
import Sidebar from '../Sidebar'

const WebsiteLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
            <Footer />
        </div>
    )
}

export default WebsiteLayout