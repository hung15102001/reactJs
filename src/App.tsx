import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import WebsiteLayout from './components/layout/WebsiteLayout'
import AdminLayout from './components/layout/AdminLayout'
import { Navigate, Route, Routes } from 'react-router-dom'
import ListProduct from './pages/admin/products/list'
import AddProduct from './pages/admin/products/add'
import UpdateProduct from './pages/admin/products/update'
import ListCate from './pages/admin/categories/listCate'
import CateForPro from './pages/admin/products/CateforPro'
import { CartProvider } from 'react-use-cart'
import Home from './pages/client/Home'
import DetailPro from './pages/client/DetailPro'
import CartPro from './pages/client/Cart'
import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import AddCate from './pages/admin/categories/addCate'



function App() {
  const [count, setCount] = useState(0)

  const newLocal = "auto"
  return (
    <div >
      <Routes>
      <Route path='/' element={ <CartProvider><WebsiteLayout /></CartProvider>}>
            <Route index element={<Home />} />
            <Route path='/detail/:id' element={<DetailPro />} />
            <Route path='/cart' element={<CartPro />} />
          </Route>

          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          
        <Route path='/admin' element={<AdminLayout />}>
          <Route index element={<Navigate to={"product"} />} />
          <Route path='product'>
            <Route index element={<ListProduct />} />
            <Route path='add' element={<AddProduct />} />
            <Route path=':id/edit' element={<UpdateProduct />} />
            <Route path="category/:id" element={<CateForPro />} />
          </Route>
          <Route path='category'>
            <Route index element={< ListCate/>} />
            <Route path='add' element={<AddCate />} />
            {/* <Route path='add' element={<AddProduct />} />
            <Route path=':id/edit' element={<UpdateProduct />} /> */}
          </Route>


        </Route>
      </Routes>
    </div>
  )
}

export default App
