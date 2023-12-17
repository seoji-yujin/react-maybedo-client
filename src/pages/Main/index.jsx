import React from 'react';
import Layout from 'layouts/Layout';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default Main;
