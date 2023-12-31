import React, { useCallback, useState } from 'react';
import { Header, Content, UserInfo, UserInfoBox } from './style';
import { useNavigate } from 'react-router-dom';
import useRequest from 'hooks/useRequest';
import { logout } from 'apis/member';
import { toast } from 'react-toastify';
import ProfileImage from 'components/ProfileImage';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import { API_URL } from 'utils/constant';

function Layout({ children }) {
  const navigate = useNavigate();
  const [showUserInfoBox, setShowUserInfoBox] = useState(false);

  const { data: loginUser, mutate: mutateLoginUser } = useSWR(
    '/member/inform',
    fetcher
  );

  const requestLogout = useRequest(logout);
  const onClickLogoutButton = useCallback(async () => {
    const result = await requestLogout().catch((e) => {
      console.error(e);
    });
    if (result === -1) {
      toast.error('로그아웃에 실패하였습니다.');
      return;
    } else if (result === 1) {
      mutateLoginUser();
      navigate('/login');
    }
  }, [mutateLoginUser, navigate, requestLogout]);

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
        {loginUser && (
          <UserInfo
            onClick={(e) => {
              setShowUserInfoBox(true);
              e.stopPropagation();
            }}
          >
            {loginUser.name}
            <ProfileImage
              width="2"
              height="2"
              src={`${loginUser.image ? `${API_URL}/${loginUser.image}` : ''}`}
            />
          </UserInfo>
        )}
      </Header>
      {showUserInfoBox && (
        <UserInfoBox
          onClick={() => {
            setShowUserInfoBox(false);
          }}
        >
          <div>
            <div
              onClick={() => {
                navigate('/profile');
              }}
            >
              마이페이지
            </div>
            <div onClick={onClickLogoutButton}>로그아웃</div>
          </div>
        </UserInfoBox>
      )}
      <Content>{children}</Content>
    </div>
  );
}

export default Layout;
