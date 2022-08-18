import { useState } from 'react'
import logo from './logo.svg'
import './App.css'

import WebsiteLayout from './components/layout/WebsiteLayout'
import AdminLayout from './components/layout/AdminLayout'
import { Navigate, Route, Routes } from 'react-router-dom'
import ListProduct from './pages/admin/products/list'
import AddProduct from './pages/admin/products/add'
import EditProduct from './pages/admin/products/edit'
import HomePage from './pages/Home'
import DetailProduct from './pages/DetailProduct'

import { CartProvider } from 'react-use-cart'
import ListLinhKien from './pages/admin/linhKien/linhKien'
import PrivateRoute from './midlerware/PrivateRoute'

import Signin from './pages/auth/Signin'
import Signup from './pages/auth/Signup'
import AddCate from './pages/admin/category/addCate'
import ListCate from './pages/admin/category/listCate'
import CartPro from './pages/Cart'
import UserAdmin from './pages/admin/user/User'



function App() {
  // const [count, setCount] = useState(0)


  const newLocal = "auto"
  return (
    <div >
      <Routes>

        <Route path='/' element={<CartProvider><WebsiteLayout /></CartProvider>}>
          <Route index element={<HomePage />} />
          <Route path='detail/:id' element={<DetailProduct />} />
          <Route path='/cart' element={<CartPro />} />


        </Route>

        <Route path='/signin' element={<Signin />} />

        <Route path='/signup' element={<Signup />} />

        <Route path='/admin' element={<PrivateRoute><AdminLayout /></PrivateRoute>}>
          <Route index element={<Navigate to={"product"} />} />
          <Route path='product'>
            <Route index element={<ListProduct />} />

            <Route path='add' element={<AddProduct />} />
            <Route path='edit/:id' element={<EditProduct />} />
          </Route>

          <Route path='user'>
            <Route index element={<UserAdmin />} />

            <Route path='add' element={<AddProduct />} />
            <Route path='edit/:id' element={<EditProduct />} />
          </Route>

          <Route path='categories'>
            <Route index element={<Navigate to={"phone"} />} />
            <Route path='add' element={<AddCate />} />
            <Route path='phone'>
              <Route index element={<ListCate />} />
              
            </Route>
            <Route path='linhKien'>
              <Route index element={<ListLinhKien />} />
            </Route>

          </Route>
          


        </Route>
      </Routes>
    </div>
  )
}

export default App
