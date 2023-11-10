import React from 'react';
import { Header, Content } from './style';
import { useNavigate } from 'react-router-dom';

function Layout({ children }) {
  const navigate = useNavigate();
  return (
    <div>
      <Header>
        <div
          onClick={() => {
            navigate('/main');
          }}
        >
          MAYBE :DO
        </div>
      </Header>
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
