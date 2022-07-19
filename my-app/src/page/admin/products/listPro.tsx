import React, { useEffect, useState } from 'react'
import { ProductType } from '../../../type/Products'
import axios from "axios";
import { list, remove } from '../../../api/products';
type Props = {}

const ListPro = (props: Props) => {
    const [pro, setPro] = useState<ProductType[]>([])

    useEffect(()=>{
        const getListPro = async () => {
            const {data} = await list();
            console.log(data);
            
            setPro(data)
        }
        getListPro();
    },[])

    const onRemove = (id:any) =>{
        const confirm = window.confirm();
        if(confirm){
            const data =  remove(id);
            setPro(pro.filter(data =>  data.id !== id ))
        }
    }

  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>#</th>
                    <th>id</th>
                    <th>Name</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Description</th>
                    <th>Fuction</th>
                </tr>
            </thead>

            <tbody>
                {pro?.map((item, index)=>{
                    return (
                        <tr key={item.id}>
                        <td>{index+1}</td>
                        <td >{item.id}</td>
                        <td>{item.name}</td>
                        <td>{item.price}</td>
                        <td>{item.quantity}</td>
                        <td>{item.description}</td>
                        <td>
                            <button onClick={(()=> onRemove(item.id))}>Delete</button>
                            <button>Update</button>
                        </td>
                    </tr>

                    )
                })}
        
            </tbody>
        </table>
    </div>
  )
}

export default ListPro