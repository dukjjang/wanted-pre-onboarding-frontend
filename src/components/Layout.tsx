import React from "react";
import { Link } from "react-router-dom";

interface Props {
  children: React.ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <div>
      <nav>
        <Link to="/">로그인</Link>
        <Link to="/todo">Todo리스트</Link>
      </nav>
      {children}
    </div>
  );
};
export default Layout;
