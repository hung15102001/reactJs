import React from 'react'
import HeaderAdmin from '../../component/Admin/headerAdmin'
import MenuAdmin from '../../component/Admin/menuAdmin'
import HeaderCli from '../../component/Client/headerCli'
import ListPro from '../admin/products/listPro'
type Props = {}

const Adminlayout = (props: Props) => {
  return (
    <div>
    <div>
      <MenuAdmin />
    </div>
    <div>
        <HeaderAdmin />
    </div>
      <div>
        <ListPro />
      </div>
    </div>
  )
}


export default Adminlayout