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



function App() {
  const [count, setCount] = useState(0)

  const newLocal = "auto"
  return (
    <div >
      <Routes>
        <Route path='/' element={<WebsiteLayout />}></Route>

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
            {/* <Route path='add' element={<AddProduct />} />
            <Route path=':id/edit' element={<UpdateProduct />} /> */}
          </Route>


        </Route>
      </Routes>
    </div>
  )
}

export default App
