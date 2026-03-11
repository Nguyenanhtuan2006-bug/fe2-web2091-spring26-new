import { Layout, Menu, Form, Input, Button, Table, Modal } from 'antd';
import { Footer } from 'antd/es/layout/layout';
import { useState } from 'react';

const { Header, Sider, Content } = Layout;

export default function Lab1() {
  const [open, setOpen] = useState(false);

  // Dữ liệu mẫu
  const users = [
    { key: 1, name: 'Nguyễn Anh Tuấn', email: 'tuan@gmail.com', role: 'Admin' },
    { key: 2, name: 'Trần Văn Nam', email: 'nam@gmail.com', role: 'User' },
    { key: 3, name: 'Lê Minh Anh', email: 'anh@gmail.com', role: 'User' },
    { key: 4, name: 'Phạm Quang Huy', email: 'huy@gmail.com', role: 'Editor' },
  ];

  // Cột bảng
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'Role',
      dataIndex: 'role',
    },
  ];

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* Sidebar */}
      <Sider>
        <div style={{ color: 'white', padding: 20, fontSize: 18 }}>
          Admin Panel
        </div>

        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          items={[
            { key: '1', label: 'Dashboard' },
            { key: '2', label: 'Users' },
            { key: '3', label: 'Settings' },
          ]}
        />
      </Sider>

      <Layout>
        {/* Header */}
        <Header style={{ color: 'white', fontSize: 18 }}>Dashboard</Header>

        {/* Content */}
        <Content style={{ padding: 24 }}>
          <h2>Form đăng ký</h2>

          {/* Form UI */}
          <Form layout="vertical" style={{ maxWidth: 400 }}>
            <Form.Item label="Name">
              <Input placeholder="Nhập tên" />
            </Form.Item>

            <Form.Item label="Email">
              <Input placeholder="Nhập email" />
            </Form.Item>

            <Form.Item label="Password">
              <Input.Password placeholder="Nhập password" />
            </Form.Item>

            <Button type="primary">Submit</Button>
          </Form>

          <br />

          {/* Button mở modal */}
          <Button type="primary" onClick={() => setOpen(true)}>
            Thêm User
          </Button>

          <br />
          <br />

          {/* Bảng danh sách user */}
          <Table
            columns={columns}
            dataSource={users}
            bordered
            pagination={{ pageSize: 5 }}
          />

          {/* Modal */}
          <Modal
            title="Thêm User"
            open={open}
            footer={null}
            onCancel={() => setOpen(false)}
          >
            <Form layout="vertical">
              <Form.Item label="Name">
                <Input />
              </Form.Item>

              <Form.Item label="Email">
                <Input />
              </Form.Item>

              <Form.Item label="Password">
                <Input.Password />
              </Form.Item>

              <Button type="primary">Thêm User</Button>
            </Form>
          </Modal>
        </Content>
        <Footer>2026 FPT POLYTECHNIC</Footer>
      </Layout>
    </Layout>
  );
}
