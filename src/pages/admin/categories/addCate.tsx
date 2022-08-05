import React, { useEffect, useState } from 'react'
import { CateType } from '../../../type/Category';
import { Typography, Col, Row, Button, Checkbox, Form, Input, InputNumber, Select, message } from 'antd'
import TextArea from 'antd/lib/input/TextArea';
import styled from "styled-components";
import { addCate } from '../../../api/categoriApi';
type Props = {}

const AddCate = (props: Props) => {
  const [cate, setCate] = useState<CateType>()
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
			const data = await addCate({...values})
			message.success("Tạo mới thành công")
			// navigate(-1)
		} catch (err) {
			message.error("Có lỗi xảy ra")
		}
	};

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
			
				<Col span={14}>
					<Typography.Title level={5}>Thông tin danh mục</Typography.Title>
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
							label="Tên danh mục"
							rules={[{ required: true, message: 'Tên danh mục không được trống' }]}
						>
							<Input size="large" />
						</Form.Item>
						<Form.Item>
							<Button type="primary" htmlType="submit">
								Tạo mới danh mục
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

export default AddCate