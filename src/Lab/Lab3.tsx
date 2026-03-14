import { Card, Form, Input, Button, Select, InputNumber } from 'antd';
import { useState } from 'react';

const { Option } = Select;
const { TextArea } = Input;

export default function Lab3() {
  const [postData, setPostData] = useState(null);

  // Bài 3
  const handleProduct = (values) => {
    console.log('Product Data:', values);
  };

  // Bài 4
  const handlePost = (values) => {
    setPostData(values);
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Bài 1 */}
      <Card title="Bài 1 - Login Form" style={{ marginBottom: 20 }}>
        <Form layout="vertical">
          <Form.Item
            label="Email"
            name="email"
            rules={[{ required: true, message: 'Email không được bỏ trống!' }]}
          >
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[
              { required: true, message: 'Password không được bỏ trống!' },
            ]}
          >
            <Input.Password placeholder="Nhập password" />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Login
          </Button>
        </Form>
      </Card>

      {/* Bài 2 */}
      <Card title="Bài 2 - Register Form" style={{ marginBottom: 20 }}>
        <Form layout="vertical">
          <Form.Item label="Name" name="name">
            <Input />
          </Form.Item>

          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: 'email', message: 'Email không đúng định dạng!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item label="Phone" name="phone">
            <Input />
          </Form.Item>

          <Form.Item
            label="Password"
            name="password"
            rules={[{ min: 6, message: 'Password tối thiểu 6 ký tự!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            name="confirm"
            dependencies={['password']}
            rules={[
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject('Password không khớp!');
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Button type="primary">Register</Button>
        </Form>
      </Card>

      {/* Bài 3 */}
      <Card title="Bài 3 - Product Form" style={{ marginBottom: 20 }}>
        <Form layout="vertical" onFinish={handleProduct}>
          <Form.Item label="Tên sản phẩm" name="name">
            <Input />
          </Form.Item>

          <Form.Item label="Giá" name="price">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Số lượng" name="quantity">
            <InputNumber style={{ width: '100%' }} />
          </Form.Item>

          <Form.Item label="Mô tả" name="description">
            <TextArea rows={4} />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>
      </Card>

      {/* Bài 4 */}
      <Card title="Bài 4 - Post Form (Nâng cao)">
        <Form layout="vertical" onFinish={handlePost}>
          <Form.Item label="Title" name="title">
            <Input />
          </Form.Item>

          <Form.Item label="Slug" name="slug">
            <Input />
          </Form.Item>

          <Form.Item label="Category" name="category">
            <Select placeholder="Chọn danh mục">
              <Option value="tech">Tech</Option>
              <Option value="design">Design</Option>
              <Option value="news">News</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Content" name="content">
            <TextArea rows={4} />
          </Form.Item>

          <Form.Item label="Image URL" name="image">
            <Input />
          </Form.Item>

          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form>

        {/* Hiển thị dữ liệu */}
        {postData && (
          <Card title="Dữ liệu đã submit" style={{ marginTop: 20 }}>
            <p>
              <b>Title:</b> {postData.title}
            </p>
            <p>
              <b>Slug:</b> {postData.slug}
            </p>
            <p>
              <b>Category:</b> {postData.category}
            </p>
            <p>
              <b>Content:</b> {postData.content}
            </p>
            <p>
              <b>Image:</b> {postData.image}
            </p>
          </Card>
        )}
      </Card>
    </div>
  );
}
