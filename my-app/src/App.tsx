import { useState } from 'react'
import { Route, Routes } from 'react-router-dom';
import './App.css';
import FooterCli from './component/Client/footerCli';
import HeaderCli from './component/Client/headerCli';
import Adminlayout from './page/layout/adminlayout';
function App() {
  return (
    <div className=''>
      <Routes>
      <Route path="admin" element={<Adminlayout />}>
            {/* <Route index element={<Navigate to="news" />} /> */}

            {/* <Route path="news" >
                <Route index element={<NewAdmin />}/>
                 <Route path="add" element={<AddNew/>} />
                 <Route path=":id/edit" element={<UpdateNew />} />
            </Route> */}
        
            {/* <Route path="products">
              <Route index element={<ProductAdmin />} />
              <Route path="add" element={<Add />} />
              <Route path=":id/edit" element={<UpdatePro />} />
            </Route>

            <Route path="users">
                <Route index element={<User />} />
                <Route path="add" element={<AddUser />}/>
                <Route path=":id/edit" element={<EditUser />}/>
            </Route>

            <Route path="category">
                <Route index element={<Category />} />
                <Route path="add" element={<AddCate />}/>
                <Route path=":id/edit" element={<UpdateCate />}/>
         
          </Route> */}
   </Route>
      </Routes>
    </div>
  )
}


export default App
