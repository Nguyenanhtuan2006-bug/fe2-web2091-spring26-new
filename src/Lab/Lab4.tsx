import { useMutation, useQuery } from '@tanstack/react-query';
import { Button, Card, Checkbox, Form, Input, Select } from 'antd';
import axios from 'axios';
import toast from 'react-hot-toast';

const { TextArea } = Input;
// Bài 2
interface ICategory {
  id?: number;
  title: string;
  description?: string;
  active?: boolean;
  categoryId?: number;
}

export default function Lab4() {
  const { data: categories } = useQuery({
    queryKey: ['categories'],
    queryFn: async () => {
      const res = await axios.get(`http://localhost:3000/categories`);
      return res.data;
    },
  });
  const { mutate, isSuccess, isPending } = useMutation({
    mutationFn: async (values: ICategory) => {
      await axios.post(`http://localhost:3000/categories`, values);
    },
    onError: () => {
      toast.error('Mất kết nối');
    },
    onSuccess: () => {
      toast.success('thanh cong roi ae oi!');
    },
  });

  const onFinish = async (values: ICategory) => {
    console.log('Success:', values);
    mutate(values);
  };
  return (
    <Card
      title="Bài 4 - React Query - useMutation"
      style={{ marginBottom: 20 }}
    >
      {/* Bài 1 */}
      <Form
        layout="vertical"
        onFinish={onFinish}
        initialValues={{ active: false }}
      >
        {/* Tiêu đề */}
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Title bắt buộc nhập' }]}
        >
          <Input />
        </Form.Item>

        {/* Mô tả */}
        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>

        {/* CheckBox */}
        <Form.Item label="Active" name="active" valuePropName="checked">
          <Checkbox>Active</Checkbox>
        </Form.Item>

        {/* Nút */}
        {/* Bài 3  */}
        <Button htmlType="submit" loading={isPending} type="primary">
          Submit
        </Button>
        {isSuccess && <p>Story submitted successfully!</p>}

        {/* Bài 4 */}
        <Form.Item label="category" name="categoryId">
          <Select
            options={categories?.map((category) => ({
              label: category.title,
              value: category.id,
            }))}
          ></Select>
        </Form.Item>
      </Form>
    </Card>
  );
}
