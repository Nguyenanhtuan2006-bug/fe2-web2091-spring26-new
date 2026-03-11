import { Table, Card } from 'antd';

export default function Lab2() {
  // Bài 1
  const studentColumns = [
    { title: 'ID', dataIndex: 'id', key: 'id' },
    { title: 'Name', dataIndex: 'name', key: 'name' },
    { title: 'Age', dataIndex: 'age', key: 'age' },
    { title: 'Major', dataIndex: 'major', key: 'major' },
  ];
  const studentData = [
    {
      key: 1,
      id: 1,
      name: 'Nguyễn Tiến Tú',
      age: 100,
      major: 'Lập trình FrontEnd CRUD Developer',
    },
    {
      key: 2,
      id: 2,
      name: 'Phạm Hoài Thu',
      age: 90,
      major: 'Lập trình AI Tester',
    },
    {
      key: 3,
      id: 3,
      name: 'Củ Su Hào',
      age: 10,
      major: 'Lập trình FrontEnd Developer',
    },
    {
      key: 4,
      id: 4,
      name: 'Nguyễn Anh Tuấn',
      age: 100,
      major: 'Lập trình FrontEnd Senior Developer',
    },
    {
      key: 5,
      id: 5,
      name: 'Nguyễn Anh Tú',
      age: 100,
      major: 'Lập trình FrontEnd Senior Developer',
    },
  ];

  return (
    <div className="container">
      <Card title="Bài 1 - Danh sách sinh viên" className="table-card">
        <Table
          columns={studentColumns}
          dataSource={studentData}
          pagination={false}
        />
      </Card>
    </div>
  );
}
