import React from 'react';
import Layout from 'layouts/Layout';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import { MenuDiv, MenuWrapper } from './style';

function Main() {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <Layout>
      <MenuWrapper>
        <MenuDiv
          onClick={() => {
            navigate('/');
          }}
          selected={pathname === '/'}
        >
          TODO
        </MenuDiv>
        <MenuDiv
          onClick={() => {
            navigate('/group');
          }}
          selected={pathname.split('/')[1] === 'group'}
        >
          GROUP
        </MenuDiv>
      </MenuWrapper>
      <Outlet />
    </Layout>
  );
}

export default Main;
