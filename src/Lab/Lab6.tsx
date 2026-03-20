import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Card, Form, Input, message } from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import { useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

export default function Lab6() {
  const { id } = useParams();

  const navigate = useNavigate();
  const { data } = useQuery({
    queryFn: async () => {
      const res = await axios.get(` http://localhost:3000/stories/${id}`);
      return res.data;
    },
    queryKey: ['story'],
  });

  const [form] = Form.useForm();
  useEffect(() => {
    if (data) {
      form.setFieldsValue(data);
    }
  }, [data]);

  const onFinish = (values: any) => {
    mutate(values);
  };

  const { mutate, isPending } = useMutation({
    mutationFn: async (values: any) => {
      await axios.patch(`http://localhost:3000/stories/${id}`, {
        title: values.title,
      });
    },
    onSuccess: () => {
      message.success('Cập nhật thành công');
      navigate('/lab5');
    },
  });
  return (
    <Card title="Bài 6 : UseQuerry">
      <Form
        layout="vertical"
        form={form}
        onFinish={onFinish}
        disabled={isPending}
      >
        <h1>Bài 1</h1>
        {/* Tên truyện */}
        <Form.Item
          label="Tên truyện"
          name="title"
          rules={[{ required: true, message: 'Title bắt buộc nhập' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Author"
          name="author"
          rules={[{ required: true, message: 'Author bắt buộc nhập' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item label="Created At" name="createdAt">
          <Input></Input>
        </Form.Item>

        <Form.Item label="Image" name="image" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Button htmlType="submit" loading={isPending}>
          Submit
        </Button>
      </Form>
    </Card>
  );
}
