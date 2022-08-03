import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table, Space, Modal } from 'antd';

import { SearchOutlined, PlusOutlined,EyeOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { listProduct, remove } from '../../../api/products';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ProductType } from '../../../type/Products';
import { Link, useNavigate } from 'react-router-dom';
import { CateType } from '../../../type/Category';
import { listCate } from '../../../api/categoriApi';
// import { useQuery } from 'react-query'
const { Paragraph } = Typography


interface DataType {
    id:number;
    name: string;
    price: number;
    description: string;
    img: string;
    quantity:number;
    cateID:number;
    created_at:string;
    updated_at:string

}

const ListProduct = () => {
    const [dataTable,setDataTable] = useState<ProductType[]>([])
    const [cate, setCate] = useState<CateType[]>([])

    useEffect(()=>{
      const getCate = async () => {
        const {data} = await listCate()
        console.log(data);
        
        setCate(data)
      }
      getCate()
    },[])
    const columns: ColumnsType<DataType> = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: number => <div>{number}</div>,
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: text => <a>{text} vnd</a>,
        },
        {
            title: 'Description',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',    
        },
        {
            title: 'Image',
            dataIndex: 'img',     
            key: 'img',
            render: text => <img src={text} alt="" width={150} />,
            
        },
        {
            title: 'Category',
            dataIndex: 'category',
            key: 'category',
            filters: cate.map((item: any) => { return { text: item.name, value: item.name } }),
            onFilter: (value, record: any) => {
                console.log(record.categories);
                console.log(value);
                return record.category == value
            }
    
        },
        {
            title: 'Created at',
            dataIndex: 'created_at',
            key: 'created_at',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Updated at',
            dataIndex: 'updated_at',
            key: 'updated_at',
            render: text => <a>{text}</a>,
        },
        {
            key: "5",
            title: "Actions",
            render: (record) => {
                
              return (
                <>
                  <EditOutlined
                    onClick={() => {
                      onEditStudent(record)
                    }}
                  />
                  <DeleteOutlined
                    onClick={() => {
                      onDeleteStudent(record.id);
                    }}
                    style={{ color: "red", marginLeft: 12 }}
                  />

                <EyeOutlined 
                  onClick={()=>{
                    onHidden(record.id);
                  }}
                  style={{ marginLeft: 12 }}
                />
                </>
              );
            },
          },
    ];

    const onDeleteStudent = (id) => {
        Modal.confirm({
          title: "Are you sure, you want to delete this student record?",
          okText: "Yes",
          okType: "danger",
          onOk:async () => {
            await  remove(id);
            setDataTable(dataTable.filter(data =>  data.id !== id ))
            window.location.reload();
        }
        });
    
      };
const onHidden = (id) =>{

}
    const navigate = useNavigate()
      const onEditStudent = (record) => { 
        navigate(`/admin/product/${record.id}/edit`)
      };
     

    const queryClient = new QueryClient();

    const {isLoading, data, error} = useQuery<any>(['Product'], listProduct)
    console.log(data);
    
    return (
        <>
        
            <Breadcrumb>
                <Typography.Title level={2} style={{ margin: 0 }}>
                    Điện thoại
                </Typography.Title>
                <div>
                  <button><Link to={'/admin/product/category/3'}>demo</Link></button>
                </div>
                <Link to="/admin/product/add">
                    <Button type="dashed" shape="circle" icon={<PlusOutlined />} />
                </Link>
            </Breadcrumb>
            <Table loading={isLoading} columns={columns} dataSource={data?.data} />
           
        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export default ListProduct