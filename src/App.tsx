import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from 'antd';

import Lab1 from './Lab/Lab1';
import Lab2 from './Lab/Lab2';

function App() {
  const [lab, setLab] = useState('');

  const renderLab = () => {
    if (lab === 'lab1') return <Lab1 />;
    if (lab === 'lab2') return <Lab2 />;
    return <h2>Chọn bài Lab để xem</h2>;
  };

  return (
    <>
      <nav className="bg-blue-600 text-white shadow">
        <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
          <Link to="#" className="text-xl font-semibold">
            <strong>WEB2091 App</strong>
          </Link>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
        <h1 className="text-4xl font-bold mb-6">Chào mừng đến với WEB2091</h1>

        {/* NÚT CHỌN LAB */}
        <div className="space-x-4 mb-10">
          <Button type="primary" onClick={() => setLab('lab1')}>
            Lab 1
          </Button>

          <Button type="default" onClick={() => setLab('lab2')}>
            Lab 2
          </Button>
        </div>

        {/* KHUNG HIỂN THỊ LAB */}
        <div className="bg-white p-6 rounded shadow">{renderLab()}</div>
      </div>
    </>
  );
}

export default App;
