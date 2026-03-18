import { useMutation, useQuery, useQueryClient } from '@tanstack/react-query';
import {
  Button,
  Card,
  Checkbox,
  Image,
  Input,
  Space,
  Table,
  Form,
  DatePicker,
} from 'antd';
import TextArea from 'antd/es/input/TextArea';
import axios from 'axios';
import toast from 'react-hot-toast';
import { useState } from 'react';

export default function Lab5() {
  const queryClient = useQueryClient();

  const [keyword, setKeyword] = useState('');

  const {
    data = [],
    isError,
    isLoading,
  } = useQuery({
    queryKey: ['stories'],
    queryFn: async () => {
      const res = await axios.get('http://localhost:3000/stories');
      return res.data;
    },
  });

  // ✅ Thêm truyện
  const { mutate, isPending } = useMutation({
    mutationFn: async (newStory) => {
      return await axios.post('http://localhost:3000/stories', newStory);
    },
    onSuccess: () => {
      toast.success('Thêm thành công');

      // 🔥 reload danh sách
      queryClient.invalidateQueries(['stories']);
    },
  });

  // ✅ onFinish
  const onFinish = (values) => {
    mutate(values);
  };

  // Xóa (giữ nguyên cũng được)
  const onDelete = async (id) => {
    const confirm = window.confirm('Bạn muốn xóa không');
    if (!confirm) return;
    await axios.delete(`http://localhost:3000/stories/${id}`);
    toast.success('Xóa thành công');

    queryClient.invalidateQueries(['stories']);
  };

  //
  const filteredData = data.filter((item) =>
    item.title?.toLowerCase().includes(keyword.toLowerCase()),
  );
  // Dữ liệu truyện
  const columns = [
    { title: 'Tên truyện', dataIndex: 'title' },
    { title: 'Tác giả', dataIndex: 'author' },
    { title: 'Mô tả', dataIndex: 'description' },
    {
      title: 'Created at',
      dataIndex: 'createdAt',
      render: (date) => new Date(date).toLocaleDateString('vi-VN'),
    },
    {
      title: 'Hình ảnh',
      dataIndex: 'image',
      render: (src) => <Image src={src} height={100} />,
    },
    {
      title: 'Action',
      render: (record) => (
        <Space>
          <Button type="primary">Edit</Button>
          <Button danger onClick={() => onDelete(record.id)}>
            Delete
          </Button>
        </Space>
      ),
    },
  ];

  if (isError) return <div>Có lỗi xảy ra</div>;

  return (
    <Card title="Bài 5 - useQuery + Table AntD">
      <Input
        placeholder="Tìm kiếm truyện"
        onChange={(e) => setKeyword(e.target.value)}
      />

      <Table
        columns={columns}
        dataSource={filteredData}
        loading={isLoading}
        rowKey="id"
        pagination={{ pageSize: 5 }}
      />

      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="Title"
          name="title"
          rules={[{ required: true, message: 'Title bắt buộc nhập' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item label="Author" name="author" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Description" name="description">
          <TextArea rows={4} />
        </Form.Item>

        <Form.Item
          label="Created At"
          name="createdAt"
          rules={[{ required: true, message: 'Vui lòng chọn ngày' }]}
        >
          <DatePicker style={{ width: '100%' }} />
        </Form.Item>

        <Form.Item label="Image" name="image" rules={[{ required: true }]}>
          <Input />
        </Form.Item>

        <Form.Item label="Active" name="active" valuePropName="checked">
          <Checkbox>Active</Checkbox>
        </Form.Item>

        <Button htmlType="submit" loading={isPending} type="primary">
          Submit
        </Button>
      </Form>
    </Card>
  );
}
