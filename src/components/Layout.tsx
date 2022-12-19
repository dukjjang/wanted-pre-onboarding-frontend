import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/');
  };

  const isLogin = localStorage.getItem('token');
  return (
    <div className='w-full h-full '>
      <nav className=' text-[25px]'>
        {isLogin ? (
          <button onClick={handleLogout}>로그아웃</button>
        ) : (
          <Link className='mr-3' to='/'>
            로그인
          </Link>
        )}
      </nav>
      {children}
    </div>
  );
};
export default Layout;
