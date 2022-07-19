import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { listCate } from '../../../api/categoriApi';
import { CateType } from '../../../type/Category';

type Props = {}
type FormV = {
    name: string,
    price:number,
    quantity:number,
    image:string,
    description:string,
    category:number
}
const AddPro = (props: Props) => {
    const [file, setFile] = useState<String>();
    const [cate, setCate] = useState<CateType[]>([])
    const handleFile = (e:any) => {
        console.log(e.target.file);
        
        setFile(URL.createObjectURL(e.target.file[0]))
    }

    const {register, handleSubmit, formState:{errors}} = useForm<FormV>()

    useEffect(()=>{
        const getCate = async () =>{
            const {data} = await listCate();
            setCate(data)
        }
        getCate()
    },[])
  return (
    <div>

    </div>
  )
}

export default AddPro