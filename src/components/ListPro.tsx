import { Card, List } from 'antd';
import React, { useEffect, useState } from 'react'
import styled from 'styled-components';
import { message } from 'antd'
import {StarOutlined, StarTwoTone} from '@ant-design/icons';
import { useQuery } from 'react-query';
import { listProduct } from '../api/products';
import { Link, useNavigate } from 'react-router-dom';
import { currency } from '../helper/helper';
import { useCart } from 'react-use-cart';
import { isAuthenticate } from '../untils/localstore';
type Props = {}

const ListProduct = (props: Props) => {
    const {addItem} = useCart();
    const {isLoading, data, error} = useQuery<any>(['Product'], listProduct)
    const [productId, setProduct] = useState<any>({})
    const loadData = data?.data
    useEffect(() => {
    
      
        const getProductById = async () => {
            const {data} = await listProduct();

            
            setProduct(data)
        }
        getProductById();
    },[])
    const navigate = useNavigate();
    const addToCart = (productId:any) => {
        console.log(productId);
        const check = isAuthenticate();
        console.log(check);

        if(!check){
            navigate('/signin')
            return false;
        }else{
            addItem(
                {
                    id: productId.id,
                    name: productId.name, 
                    price: productId.price,
                    img: productId.img, 
                    description: productId.description,
                    categories: productId.category
                }
                )
               
                message.success("Thêm thành công")
        }

    } 
    return (
        <div >
            <Title>Sản phẩm nổi bật</Title>
            <List
                grid={{
                    gutter: 16,
                    xs: 1,
                    sm: 2,
                    md: 4,
                    lg: 4,
                    xl: 7,
                    xxl: 3,
                }}
                
                dataSource={loadData}
                renderItem={(item:any) => (
                    <List.Item>
                        
                        <div>
                            <div style={{textAlign:"center"}}>
                                <Link to={`/detail/${item.id}`} ><img  src={item.img} alt="" width={120} height={100} /></Link>
                            </div>
                            <Link to={`/detail/${item.id}`} className="name" style={{marginTop:"10px", color:"black"}}>{item.name}</Link>
                            <div style={{display:"flex", justifyContent:"space-between"}}>
                                <p style={{color:"red"}}>{currency(item.price)} ₫</p>
                                <p style={{color:"gray", fontSize:"13px"}}>{currency(item.price)} ₫</p>
                            </div>
                            <Desc >
                                <p>{item.description}</p>
                            </Desc>
                            <div style={{display:"flex", gap:"10px"}}>
                                <div className="star">
                                    <StarTwoTone twoToneColor="yellow" />
                                    <StarTwoTone twoToneColor="yellow" />
                                    <StarTwoTone twoToneColor="yellow" />
                                    <StarOutlined />
                                    <StarOutlined />
                                </div>
                                <div>
                                    <p>100 đánh giá</p>
                                </div>
                            </div>
                            <Btn onClick={() => addToCart(item)}>Add Cart</Btn>
                        </div>
                    </List.Item>
                )}
            />
        </div>
    )
}

const Title = styled.p`
    font-size: 22px;
    font-weight: 600;
    margin-top: 10px;
`
const Desc = styled.div`
    border: 1px solid #F3F4F6;
    border-radius:5px;
     background:#F3F4F6;
     padding:5px ;
`
const Btn = styled.button`
    background-color: red;
    transition:all .2s linear;
    width:100%;
    color: #fff;
    padding: 5px 5px;
    border: 0;
    :hover{
        /* border: 1px solid green; */
        background-color: orange;
        cursor: pointer;
        transition:all .1s linear;
    }
`
export default ListProduct