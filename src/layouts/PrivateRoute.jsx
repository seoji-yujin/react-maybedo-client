import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import Layout from './Layout';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

export default function PrivateRoute({ userAuthentication }) {
  const { data: loginUser } = useSWR('/member/inform', fetcher);

  if (loginUser === undefined) {
    return null;
  }

  if (userAuthentication) {
    // 인증을 안했을 경우 로그인 페이지로, 했을 경우 해당 페이지로
    return loginUser === null ? (
      <Navigate to="/login" />
    ) : (
      <Layout>
        <Outlet />
      </Layout>
    );
  } else {
    // 인증이 반드시 필요 없는 페이지
    // 인증을 안했을 경우 해당 페이지로, 인증을 한 상태일 경우 main페이지로
    return loginUser === null ? <Outlet /> : <Navigate to="/" />;
  }
}
