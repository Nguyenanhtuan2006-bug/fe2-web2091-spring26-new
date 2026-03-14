import { Card, Form, Input, Button, Select, InputNumber } from 'antd';

const { Option } = Select;
const { TextArea } = Input;

export default function Lab3() {
  const onFinishProduct = (values) => {
    console.log(values);
  };

  const onFinishPost = (values) => {
    console.log(values);
  };

  return (
    <div style={{ padding: 20 }}>
      {/* Bài 1 */}
      <Card title="Bài 1 - Login Form" style={{ marginBottom: 20 }}>
        <Form layout="vertical">
          <Form.Item label="Email">
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item label="Password">
            <Input.Password placeholder="Nhập password" />
          </Form.Item>

          <Button type="primary">Login</Button>
        </Form>
      </Card>

      {/* Bài 2 */}
      <Card title="Bài 2 - Register Form" style={{ marginBottom: 20 }}>
        <Form layout="vertical">
          <Form.Item label="Name">
            <Input placeholder="Nhập tên" />
          </Form.Item>

          <Form.Item label="Email">
            <Input placeholder="Nhập email" />
          </Form.Item>

          <Form.Item label="Phone">
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>

          <Form.Item label="Password">
            <Input.Password placeholder="Nhập password" />
          </Form.Item>

          <Form.Item label="Confirm Password">
            <Input.Password placeholder="Nhập lại password" />
          </Form.Item>

          <Button type="primary">Register</Button>
        </Form>
      </Card>

      {/* Bài 3 */}
      <Card title="Bài 3 - Product Form" style={{ marginBottom: 20 }}>
        <Form layout="vertical" onFinish={onFinishProduct}>
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
        <Form layout="vertical" onFinish={onFinishPost}>
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
      </Card>
    </div>
  );
}
