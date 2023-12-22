import React, { useCallback } from 'react';
import { Header, Content, HeaderButton } from './style';
import { useNavigate } from 'react-router-dom';
import useRequest from 'hooks/useRequest';
import { logout } from 'apis/member';
import { toast } from 'react-toastify';

function Layout({ children }) {
  const navigate = useNavigate();

  const requestLogout = useRequest(logout);
  const onClickLogoutButton = useCallback(async () => {
    const result = await requestLogout().catch((e) => {
      console.error(e);
    });
    if (result === -1) {
      toast.error('로그아웃에 실패하였습니다.');
      return;
    } else if (result === 1) {
      navigate('/login');
    }
  }, [navigate, requestLogout]);

  return (
    <div>
      <Header>
        <div
          onClick={() => {
            navigate('/');
          }}
        >
          MAYBE :DO
        </div>
        <div>
          <HeaderButton onClick={onClickLogoutButton}>로그아웃</HeaderButton>
        </div>
      </Header>
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
