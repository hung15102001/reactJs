import React, { useEffect, useRef, useState } from 'react'
import styled from "styled-components";
import { Typography, Button, Table, Space, Popconfirm, Modal, message, Input } from 'antd';
import { EditOutlined, DeleteOutlined } from "@ant-design/icons";
import { Link, useNavigate } from 'react-router-dom'
import { SearchOutlined, PlusOutlined,EyeOutlined } from '@ant-design/icons';
import type { ColumnsType } from 'antd/es/table';

import { listProduct, removeProduct } from '../../../api/products';
import { QueryClient, QueryClientProvider, useQuery } from 'react-query'
import { listCate } from '../../../api/category';
import { useDispatch, useSelector } from 'react-redux';
import { getAllDetailCate } from '../../../features/Slide/categoryPhone/catePhone';
import type { InputRef } from 'antd';
import type { FilterConfirmProps } from 'antd/es/table/interface';
import { getAllProduct } from '../../../features/Slide/product/product';
// import { useQuery } from 'react-query'
const { Paragraph } = Typography


interface DataType {
    name: string;
    saleOffPrice: number;
    feature: string;
    description: string;
}

type ProductManagerProps = {

}


const ListProduct = () => {

    // const [dataTable, setDataTable] = useState([])
    const productData = useSelector((item: any) => item.product.value)
    const category = useSelector((item: any) => item.categoryPhone.value)
    const [confirmLoading, setConfirmLoading] = useState(false);
    // const [isLoading, setIsLoading] = useState(false)
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [searchText, setSearchText] = useState('');
    const [searchedColumn, setSearchedColumn] = useState('');
    const searchInput = useRef<InputRef>(null);

    const handleSearch = (
        selectedKeys: string[],
        confirm: (param?: FilterConfirmProps) => void,
        dataIndex: any,
    ) => {
        confirm();
        setSearchText(selectedKeys[0]);
        setSearchedColumn(dataIndex);
    };

    const handleReset = (clearFilters: () => void) => {
        clearFilters();
        setSearchText('');
    };

    const getColumnSearchProps = (dataIndex: any) => ({

        filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }: any) => (
            <div style={{ padding: 8 }}>

                <Input
                    ref={searchInput}
                    placeholder={`Tìm Kiếm ${dataIndex}`}
                    value={selectedKeys[0]}
                    onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
                    onPressEnter={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                    style={{ marginBottom: 8, display: 'block' }}
                />

                <Space>
                    <Button
                        type="primary"
                        onClick={() => handleSearch(selectedKeys as string[], confirm, dataIndex)}
                        icon={<SearchOutlined />}
                        size="small"
                        style={{ width: 90 }}
                    >
                        Tìm
                    </Button>
                    <Button
                        onClick={() => clearFilters && handleReset(clearFilters)}
                        size="small"

                        style={{ width: 90 }}
                    >
                        Xóa
                    </Button>
                    <Button
                        type="link"
                        size="small"
                        onClick={() => {
                            confirm({ closeDropdown: false });
                            setSearchText((selectedKeys as string[])[0]);
                            setSearchedColumn(dataIndex);
                        }}
                    >
                        Lọc
                    </Button>
                </Space>
            </div>
        ),
        filterIcon: (filtered: boolean) => (
            <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />
        ),
        onFilter: (value: any, record: any) => {
            return record[dataIndex].toString().toLowerCase().includes((value as string).toLowerCase())
        }

    });
    useEffect(() => {
    
        dispatch(getAllDetailCate())
        dispatch(getAllProduct())
    }, [])
    console.log(productData);
    
    const dataTable = productData.map((item: any, index: number) => {
        return {
            key: index + 1,
            id: item.id,
            name:item.name,
            originalPrice: item.originalPrice,
            saleOffPrice: item.saleOffPrice,
            categories: item.categories,
            detailCate: item.detailCate,
            feature: item.feature,
            description: item.description,
            image: item.image,

        }
    })

    const onRemoveProduct = (id: any) => {
        setConfirmLoading(true);
        message.loading({ content: 'Loading...' });

        setTimeout(() => {

            removeProduct(id);
            setConfirmLoading(false);

            message.success({ content: 'Xóa Thành Công!', duration: 2 });

            navigate("/admin")
        }, 1000)
    }

    const handAn = (id: any) => {

    }

    const columns: ColumnsType<DataType> = [
        {
            title: 'STT',
            dataIndex: 'key',
            key: "key",
            sorter: (a: any, b: any) => a.key - b.key,
            // sorter: (record1, record2) => { return record1.key > record2.key },
            sortDirections: ['descend'],
        },
        {
            title: 'Tên sản phẩm',
            dataIndex: 'name',
            key: 'name',
            ...getColumnSearchProps('name'),
            render: text => <a>{text}</a>,
        },
        {
            title: 'Hình ảnh',
            dataIndex: 'image',
            key: 'image',
            render: text => <img src={text} alt="" width={100} />,


        },
        {
            title: 'Đặc điểm',
            dataIndex: 'feature',
            key: 'feature',
            render: text => <p>{text}</p>,


        },
        {
            title: 'Danh mục',
            dataIndex: 'categories',
            key: 'categories',
            filters: category.map((item: any) => { return { text: item.name, value: item.id } }),
            onFilter: (value, record: any) => {
                // console.log(record.detailCate);
                // console.log(value);

                return record.detailCate == value
            }
        },
        {
            title: 'Giá',
            dataIndex: 'saleOffPrice',
            key: 'saleOffPrice',
        },
        {
            title: 'Mô tả',
            dataIndex: 'description',
            key: 'description', 
            render: text => <div><div dangerouslySetInnerHTML={{__html:`${text}`}}></div></div>
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
                        onRemoveProduct(record.id);
                    }}
                    style={{ color: "red", marginLeft: 12 }}
                  />

                <EyeOutlined 
                  onClick={()=>{
                  
                  }}
                  style={{ marginLeft: 12 }}
                />
                </>
              );
            },
          },
    ];

   
    const onEditStudent = (record:any) => { 
      navigate(`/admin/product/edit/${record.id}`)
    };
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
            <Table  columns={columns} dataSource={dataTable} />

        </>
    )
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`
export default ListProduct