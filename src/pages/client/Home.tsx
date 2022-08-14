import React from 'react'
import Accessory from '../../components/AcceStore'
import Article from '../../components/Article'
import Banner from '../../components/Banner'
import Linkien from '../../components/Linkien'
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
    <section style={{ width: "80%", margin: "30px auto" }}>
        <Linkien />
    </section>
    <section style={{ width: "80%", margin: "30px auto" }}>
        <Article />
    </section>
    </div>
  )
}

export default Home