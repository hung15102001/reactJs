import React, { useEffect, useState } from 'react'
import styled from "styled-components";
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
// import UploadImage from "../../../components/Product/UploadImage";
// import { createProduct } from "../../../api/product";

import { add, update, view } from '../../../api/products';
import UploadImage from '../../../components/product/UploadImage';
import { CateType } from '../../../type/Category';
import { useNavigate, useParams } from 'react-router-dom';
import { listCate } from '../../../api/categoriApi';
import { ProductType } from '../../../type/Products';
import { useForm } from 'rc-field-form';
// import UploadTest from "../../../components/Product/UploadTest";

const { TextArea } = Input
const { Option } = Select;

// type FormUp = {
//     name: string
//     price: number
//     quantity: number
//     image: string
//     description: string
//     category: string
//   }
const UpdateProduct = () => {
	const [image, setUploadedImage] = React.useState('')
  const [cate, setCategory] = useState([])
  const [pro, setPro] = useState<ProductType>()
	const navigate = useNavigate()

  const { id } = useParams();
  const [form] = Form.useForm();

	const onHandleAdd = (image: any) => {
		// console.log(image);
		setUploadedImage(image.img)

	}
  
  useEffect((() => {
    // const imgPreview = document.getElementById("imgPreview");
    // const imgPost = document.getElementById("file-upload");

    if (id) {
      const getCate = async (id: any) => {
          const { data } = await view(id);
          console.log(data.image);
		  form.setFieldsValue(data);
        
      }
      getCate(id);
  }
  }),[])
  useEffect(() => {
    const listcategory = async () => {
        const { data } = await listCate();
        console.log(data);

        setCategory(data)
    }
    listcategory();
}, [])
	const onFinish = async (values: any) => {
		console.log('Success:', values);
		console.log(image);

		try {
		
				// message.error("Bạn chưa chọn ảnh")
			
				const data = await update(values)
				// console.log(data);
				message.success("Cập nhật thành công");
       			 navigate("/admin")
			

			// navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};
	// console.log(uploadedImage);

	const onFinishFailed = (errorInfo: any) => {
		console.log('Failed:', errorInfo);
	};
	return (
		<>
			<Breadcrumb>
				<Typography.Title level={2} style={{ margin: 0 }}>
					Thêm mới
				</Typography.Title>
			</Breadcrumb>
			<Row gutter={16}>
				<Col span={10}>
					<UploadImage onAdd={onHandleAdd}/>
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
						form = {form}
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
									<InputNumber style={{ width: '100%' }} size="large"  />
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
							{/* <Col span={12}>
								<Form.Item
									label="Phân loại"
									name="categories"
									rules={[{ required: true }]}
								>
									<Select style={{ width: '100%' }} size="large">
										{cate?.map(item =>{
											return (
												<Option value={item.name}>{item.name}</Option>
											)
										})}
										
									</Select>
								</Form.Item>
							</Col> */}
						</Row>

						<Form.Item
							name="quantity"
                          
							labelCol={{ span: 24 }}
							label="Số lượng hiện có"
							rules={[{ required: true, message: 'Số lượng' }]}
						>
							<TextArea name="quantity"  value={pro?.quantity} />
						</Form.Item>
						<Form.Item
							name="description"
							labelCol={{ span: 24 }}
							label="Mô tả sản phẩm"
							rules={[{ required: true, message: 'Mô tả sản phẩm' }]}
						>
							<TextArea name="description" value={pro?.description}/>
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

export default UpdateProduct