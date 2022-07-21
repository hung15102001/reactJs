import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
// import UploadImage from "../../../components/Product/UploadImage";
// import { createProduct } from "../../../api/product";

import { add } from '../../../api/products';
import UploadImage from '../../../components/product/UploadImage';
import { CateType } from '../../../type/Category';
import { useNavigate } from 'react-router-dom';
import { listCate } from '../../../api/categoriApi';
// import UploadTest from "../../../components/Product/UploadTest";

const { TextArea } = Input
const { Option } = Select;

const AddProduct = () => {
	const [cate, setCate] = useState<CateType[]>([])
	const [img, setImage] = useState();

	const onhandleImage = (image:any) =>{
		console.log(image.image);
		console.log('312');
		
		setImage(image.image)
	}
//   const navigate = useNavigate()
	const onFinish = async (values: any) => {
		console.log('Success:', values);
		try {
			const data = await add({...values,img})
			message.success("Tạo mới thành công")
			// navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};

	useEffect(()=>{
		const getCate = async () =>{
			const {data} = await listCate();
			console.log(data);
			
			setCate(data);
		}
		getCate()
	},[])

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<Breadcrumb >
				<Typography.Title level={2} style={{ margin: 0 }}>
					Thêm mới
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				<Col span={10}>
					<UploadImage onAdd={onhandleImage}/>
					{/* <UploadTest/> */}
				</Col>
				<Col span={14}>
					<Typography.Title level={5}>Thông tin sản phẩm</Typography.Title>
					<Form
						// name="product"
						initialValues={{}}
						onFinish={onFinish}
						onFinishFailed={onFinishFailed}
						autoComplete="on"
						labelCol={{ span: 24 }}
					>
						<Form.Item
							name="name"
							labelCol={{ span: 24 }}
							label="Tên sản phẩm"
							rules={[{ required: true, message: 'Tên sản phẩm không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>

						<Row gutter={16}>
							<Col span={12}>
								<Form.Item
									name="price"
									label="Giá gốc"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Gía sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col>
							{/* <Col span={12}>
								<Form.Item
									name="saleOffPrice"
									label="Giá giảm"
									labelCol={{ span: 24 }}
									rules={[{ required: true, message: 'Gía sản phẩm' }]}
								>
									<InputNumber style={{ width: '100%' }} size="large" />
								</Form.Item>
							</Col> */}
							<Col span={12}>
								<Form.Item
									label="Phân loại"
									name="categories"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										{cate?.map(item =>{
											return (
												<Option value={item.id}>{item.name}</Option>
											)
										})}
										
									</Select>
								</Form.Item>
							</Col>
						</Row>

						<Form.Item
							name="quantity"
							labelCol={{ span: 24 }}
							label="Số lượng hiện có"
							rules={[{ required: true, message: 'Số lượng' }]}
						>
							<TextArea name="quantity" />
						</Form.Item>
						<Form.Item
							name="description"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
						>
							<TextArea name="description" />
						</Form.Item>

						<Form.Item>
							<Button type="primary" htmlType="submit">
								Tạo mới sản phẩm
							</Button>
						</Form.Item>
					</Form>
				</Col>
			</Row>
		</>
	)
}

const Breadcrumb = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
`

const Label = styled.div`
	font-size: 13px;
`
export default AddProduct