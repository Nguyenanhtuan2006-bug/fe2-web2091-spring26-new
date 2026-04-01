import { Link, Route, Routes } from 'react-router-dom';
import { Button } from 'antd';

import Lab1 from './Lab/Lab1';
import Lab2 from './Lab/Lab2';
import Lab3 from './Lab/Lab3';
import Lab4 from './Lab/Lab4';
import Lab5 from './Lab/Lab5';
import Lab6 from './Lab/Lab6';
import { AppHeader } from './components/Header';
import { ThemeProvider } from './context/ThemeContext';
import { UserProvider } from './context/UserContext';
import Login from './pages/Login';
import Register from './pages/Register';

function App() {
  // Bỏ useState lab và hàm renderLab vì đã dùng Routes ở dưới

  return (
    <ThemeProvider>
      <UserProvider>
        <AppHeader>
          <nav className="bg-blue-600 text-white shadow">
            <div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
              <Link to="/" className="text-xl font-semibold">
                <strong>WEB2091 App</strong>
              </Link>
            </div>
          </nav>

          <div className="max-w-6xl mx-auto mt-10 px-4 text-center">
            <h1 className="text-4xl font-bold mb-6">WEB2091</h1>

            <div className="space-x-4 mb-10">
              <Link to="/lab1">
                <Button>Lab 1</Button>
              </Link>
              <Link to="/lab2">
                <Button>Lab 2</Button>
              </Link>
              <Link to="/lab3">
                <Button>Lab 3</Button>
              </Link>
              <Link to="/lab4">
                <Button>Lab 4</Button>
              </Link>
              <Link to="/lab5">
                <Button>Lab 5</Button>
              </Link>
              <Link to="/lab6">
                <Button>Lab 6</Button>
              </Link>

              {/* Đăng kí đăng nhập */}
              <Link to="/login">
                <Button>Login</Button>
              </Link>

              <Link to="/register">
                <Button>Register</Button>
              </Link>
            </div>
            

            <div className="bg-white p-6 rounded shadow text-left">
              <Routes>
                <Route path="/" element={<h2>Chọn bài Lab để xem</h2>} />
                <Route path="/lab1" element={<Lab1 />} />
                <Route path="/lab2" element={<Lab2 />} />
                <Route path="/lab3" element={<Lab3 />} />
                <Route path="/lab4" element={<Lab4 />} />
                <Route path="/lab5" element={<Lab5 />} />
                <Route path="/lab6" element={<Lab6 />} />
                {/* Trang sửa */}
                <Route path="/edit/:id" element={<Lab6 />} />

                {/* Đăng kí đăng nhập */}
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
              </Routes>
            </div>
          </div>
        </AppHeader>
      </UserProvider>
    </ThemeProvider>
  );
}

export default App;
