import React from 'react'
import Banner from '../Banner'
import Header from '../Header'
import Sidebar from '../Sidebar'

const WebsiteLayout = () => {
    return (
        <div>
            <Header />
            <section style={{ width: "1200px", margin: "10px auto", display: "flex", }}>
                <Sidebar />
                <Banner />
            </section>
        </div>
    )
}

export default WebsiteLayout