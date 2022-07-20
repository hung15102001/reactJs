import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table, Space, Modal } from 'antd';

import { SearchOutlined, PlusOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { listProduct, remove } from '../../../api/products';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { ProductType } from '../../../type/Products';
import { Link } from 'react-router-dom';
// import { useQuery } from 'react-query'
const { Paragraph } = Typography


interface DataType {
    id:number;
    name: string;
    price: number;
    description: string;
    image: string;
    quantity:number;
    cateID:number;
    created_at:string;
    updated_at:string

}

const ListProduct = () => {
    const [dataTable,setDataTable] = useState<ProductType[]>([])
    
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
            dataIndex: 'image',     
            key: 'image',
            render: text => <a>{text}</a>,
        },
        {
            title: 'Category',
            dataIndex: 'cateID',
            key: 'cateID',
    
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
        }
        });
    
      };

      const onEditStudent = (record) => { 
       return <Link
                to={`/admin/products/${record.id}/edit`}
      />    
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