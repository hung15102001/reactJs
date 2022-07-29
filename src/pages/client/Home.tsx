import React from 'react'
import Accessory from '../../components/AcceStore'
import Banner from '../../components/Banner'
import ListProduct from '../../components/ListPro'
import Sidebar from '../../components/Sidebar'


type Props = {}

const Home = (props: Props) => {
  return (
    <div>
    <section style={{ width: "80%", margin: "10px auto", display: "flex", }}>
        <Sidebar />
        <Banner />

    </section>

    <section style={{ width: "90%", margin: "30px auto" }}>
        <ListProduct />
    </section>

    <section style={{ width: "80%", margin: "30px auto" }}>
        <Accessory />
    </section>
    {/* <section style={{ width: "80%", margin: "30px auto" }}>
        <ComputerAccessory />
    </section> */}
    </div>
  )
}

export default Home