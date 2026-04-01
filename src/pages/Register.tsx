import React from 'react';
import { useAuthStore } from '../stores/authStores';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Register = () => {
  const { setUser } = useAuthStore();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post('http://localhost:3000/register', values);
    },
    onSuccess: ({ data }) => {
      setUser({
        name: data.user.name,
        email: data.user.email,
        token: data.accessToken,
      });
      message.success('Đăng kí thành công');
      navigate('/login');
    },
    onError: () => {
      message.error('Đăng kí thất bại');
    },
  });
  const onFinish = (values: any) => {
    mutate(values);
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 400, margin: '50px auto' }}
    >
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Vui lòng nhập email' }]}
      >
        <Input type="email" placeholder="Nhập email" />
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Vui lòng nhập mật khẩu' }]}
      >
        <Input.Password />
      </Form.Item>
      <Form.Item>
        <button type="submit" disabled={isPending}>
          Đăng ký
        </button>
      </Form.Item>
    </Form>
  );
};

export default Register;
