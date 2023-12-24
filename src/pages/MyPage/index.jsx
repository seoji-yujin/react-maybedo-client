import ProfileImage from 'components/ProfileImage';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import {
  Container,
  TitleDiv,
  ContentDiv,
  UserProfileInfo,
  UserDetailInfo,
  FormItem,
  RowWrapper,
  HeaderButton,
} from './style';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { CiCamera } from 'react-icons/ci';
import useInput from 'hooks/useInput';
import { toast } from 'react-toastify';
import { ProfileInputButton, ProfileInputWrapper } from 'pages/Join/style';
import useRequest from 'hooks/useRequest';
import { updateUserInfo } from 'apis/member';

function MyPage() {
  const { data: loginUser, mutate: mutateLoginUser } = useSWR(
    '/member/inform',
    fetcher
  );
  const { data: userInfo, mutate: mutateUserInfo } = useSWR(
    loginUser ? `/member?username=${loginUser.id}` : null,
    fetcher
  );
  const [editMode, setEditMode] = useState(false);
  const [email, onChangeEmail, setEmail] = useInput('');
  const [nickname, onChangeNickname, setNickname] = useInput('');

  const [profileImage, setProfileImage] = useState(null);
  const encodeFileToBase64 = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    setProfileImage(fileBlob);

    return new Promise((resolve) => {
      reader.onload = () => {
        if (typeof reader.result === 'string') {
          setProfileImage(reader.result);
        }
        resolve();
      };
    });
  };

  // 파일 업로드 버튼 클릭 핸들러
  const fileInput = useRef(null);
  const clickUploadButton = useCallback(() => {
    fileInput.current?.click();
  }, []);

  useEffect(() => {
    if (!userInfo) return;
    setEmail(userInfo.email || '');
    setNickname(userInfo.name || '');
    setProfileImage(userInfo.image);
  }, [setEmail, setNickname, userInfo]);

  const requestUpdate = useRequest(updateUserInfo);
  const updateUserInfoProc = useCallback(() => {
    const newUserInfo = {
      email: userInfo?.email,
      name: userInfo?.name,
    };
    const regexEmail =
      /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (email && email.trim()) {
      if (!regexEmail.test(email.trim())) {
        toast.error('유효하지 않은 이메일 형식 입니다.');
        return;
      }
      newUserInfo.email = email;
    }
    if (nickname && nickname.trim()) {
      newUserInfo.name = nickname;
    }
    requestUpdate(newUserInfo)
      .then(() => {
        mutateUserInfo();
        mutateLoginUser();
        setEditMode((prev) => !prev);
      })
      .catch(() => {
        toast.error('사용자 정보를 수정하지 못하였습니다.');
      });
  }, [
    email,
    mutateLoginUser,
    mutateUserInfo,
    nickname,
    requestUpdate,
    userInfo?.email,
    userInfo?.name,
  ]);

  return (
    <Container>
      <TitleDiv>
        내 정보
        {editMode ? (
          <RowWrapper>
            <HeaderButton
              onClick={() => {
                setEditMode((prev) => !prev);
              }}
            >
              취소
            </HeaderButton>
            <HeaderButton
              onClick={() => {
                updateUserInfoProc();
              }}
            >
              완료
              <MdOutlineModeEditOutline />
            </HeaderButton>
          </RowWrapper>
        ) : (
          <HeaderButton
            onClick={() => {
              setEditMode((prev) => !prev);
            }}
          >
            수정
            <MdOutlineModeEditOutline />
          </HeaderButton>
        )}
      </TitleDiv>
      <ContentDiv>
        <UserProfileInfo>
          <ProfileInputWrapper>
            <ProfileImage
              width="4"
              height="4"
              src={`${profileImage ? profileImage : ''}`}
              onClick={() => {
                if (editMode) clickUploadButton();
              }}
              cursor={editMode ? 'pointer' : 'default'}
            />
            {editMode && (
              <>
                <ProfileInputButton onClick={clickUploadButton}>
                  <CiCamera />
                </ProfileInputButton>
                <input
                  type="file"
                  id="image"
                  accept="image/*"
                  ref={fileInput}
                  onChange={(e) => {
                    const selectedFile = e.target.files && e.target.files[0];
                    if (
                      selectedFile?.type === 'image/png' ||
                      selectedFile?.type === 'image/jpeg' ||
                      selectedFile?.type === 'image/jpg'
                    ) {
                      encodeFileToBase64(selectedFile);
                    } else {
                      toast.error(
                        'png, jpg, jpeg 파일만 업로드할 수 있습니다.'
                      );
                    }
                  }}
                />
              </>
            )}
          </ProfileInputWrapper>
          {userInfo && userInfo.username}
        </UserProfileInfo>
        <UserDetailInfo>
          {editMode ? (
            <>
              <FormItem>
                <label>닉네임</label>
                <input
                  placeholder="닉네임"
                  value={nickname}
                  onChange={onChangeNickname}
                />
              </FormItem>
              <FormItem>
                <label>이메일</label>
                <input
                  placeholder="이메일을 입력해주세요"
                  value={email}
                  onChange={onChangeEmail}
                />
              </FormItem>
            </>
          ) : (
            <>
              <div>
                닉네임 <span>{userInfo && userInfo.name}</span>
              </div>
              <div>
                이메일 <span>{userInfo && userInfo.email}</span>
              </div>
            </>
          )}
        </UserDetailInfo>
      </ContentDiv>
    </Container>
  );
}

export default MyPage;
