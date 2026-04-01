import React from 'react';
import { useAuthStore } from '../stores/authStores';
import { useMutation } from '@tanstack/react-query';
import axios from 'axios';
import { Form, Input, message } from 'antd';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const { setUser } = useAuthStore();

  const navigate = useNavigate();

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      return await axios.post('http://localhost:3000/login', values);
    },
    onSuccess: ({ data }) => {
      setUser({
        user: data.user,
        token: data.accessToken,
      });
      message.success('Đăng nhập thành công');
      navigate('/lab5');
    },
    onError: () => {
      message.error('Đăng nhập thất bại');
    },
  });
  const onFinish = (values: any) => {
    mutate(values);
  };
  return (
    <Form
      onFinish={onFinish}
      layout="vertical"
      style={{ maxWidth: 400, margin: '50px, auto' }}
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
          Đăng nhập
        </button>
      </Form.Item>
    </Form>
  );
};

export default Login;
