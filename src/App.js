import React from "react";
import {Form, Row, Col, Input, Button} from "antd"
import './App.css';

function App() {
  const layout = {
    labelCol: { xs: 6, sm: 8, md: 10},
    wrapperCol: { xs: 18, sm: 16, md: 14 },
  };
  let onFinish = (values) => {
    console.log(values)
  }
  return (
    <div className = "App">
      <Row justify="center">
        <Col xs={24} sm={22} md={18} lg={16} xl={22} xxl={14} span={24} >
          <Form onFinish={onFinish} {...layout}>
              <Form.Item 
                label='Name'
                name="name"
                rules={[
                  {required: true, message: "คุณต้องกรอกช่องนี้"},
                  {min: 3, max: 6, message: "คุณต้องกรอกอย่างน้อย 3-6 ตัวอักษร"}
                ]}
              >
                <Input placeholder="name" />
              </Form.Item>
              <Form.Item 
                label='phoneNumber'
                name="phoneNumber"
                rules={[
                  {len: 10, message: "เบอร์โทรศัพท์ของคุณไม่ถูกต้อง"}
                ]}
              >
                <Input placeholder="phoneNumber"/>
              </Form.Item>
              <Form.Item 
                label='Email'
                name="email"
                rules={[
                  {required: true, message: "คุณต้องกรอกช่องนี้"},
                  {type: "email", message: "รูปแบบอีเมล์ของคุณไม่ถูกต้อง"}
                ]}
              >
                <Input placeholder="email"/>
              </Form.Item>
              <Form.Item
                label='Password'
                name="password"
                rules={[
                  {required: true, message: "คุณต้องกรอกช่องนี้"},
                  {min: 12, max: 24, message: "รหัสผ่านของคุณต้องมี 12-24 ตัว"},
                ]}
              >
                <Input.Password placeholder="password"/>
              </Form.Item>
              <Button htmlType="submit">Register</Button>
          </Form>
        </Col>
      </Row>
    </div>
  )
}

export default App;
