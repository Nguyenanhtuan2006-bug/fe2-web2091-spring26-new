import { Layout, Button, Avatar, Space, Switch } from 'antd';
import { ThemeContext } from '../context/ThemeContext';
import { useContext } from 'react';
import { useAuthStore } from '../stores/authStores';
import { useNavigate } from 'react-router-dom';

export function AppHeader({ children }: { children?: React.ReactNode }) {
  const { user, logout } = useAuthStore();
  const { isDarkMode, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <>
      <Layout.Header
        style={{
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          background: isDarkMode ? '#141414' : '#fff',
          padding: '0 20px',
          borderBottom: '1px solid #f0f0f0',
        }}
      >
        <h2 style={{ margin: 0, color: isDarkMode ? '#fff' : '#000' }}>Logo</h2>

        <Space size="large">
          <Switch
            checked={isDarkMode}
            onChange={toggleTheme}
            checkedChildren="Tối"
            unCheckedChildren="Sáng"
          />

          {user ? (
            <Space>
              <Avatar src={user.avatar} />

            
              <span style={{ color: isDarkMode ? '#fff' : '#000' }}>
                HI {user.email}
              </span>

           
              <span style={{ color: 'green' }}>Đã đăng nhập</span>

              <Button danger onClick={handleLogout}>
                Logout
              </Button>
            </Space>
          ) : (
            <Space>
              <span style={{ color: 'red' }}>Chưa đăng nhập</span>
              <Button type="primary" onClick={() => navigate('/login')}>
                Login
              </Button>
            </Space>
          )}
        </Space>
      </Layout.Header>

      <main>{children}</main>
    </>
  );
}
