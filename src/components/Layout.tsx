import React from 'react';
import { Link } from 'react-router-dom';

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div className='w-full h-full '>
      <nav className=' text-[25px]'>
        <Link className='mr-3' to='/'>
          로그인
        </Link>
        <Link to='/todo'>Todo리스트</Link>
      </nav>
      {children}
    </div>
  );
};
export default Layout;
