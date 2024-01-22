import ProfileImage from 'components/ProfileImage';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';
import {
  Container,
  TitleDiv,
  StreakContentDiv,
  ContentDiv,
  UserProfileInfo,
  UserDetailInfo,
  FormItem,
  RowWrapper,
  HeaderButton,
  StreakTitle,
} from './style';
import { MdOutlineModeEditOutline } from 'react-icons/md';
import { CiCamera } from 'react-icons/ci';
import useInput from 'hooks/useInput';
import { toast } from 'react-toastify';
import { ProfileInputButton, ProfileInputWrapper } from 'pages/Join/style';
import useRequest from 'hooks/useRequest';
import { updateUserInfo } from 'apis/member';
import { API_URL } from 'utils/constant';
import Streak from 'components/Streak';

function MyPage() {
  const { data: loginUser, mutate: mutateLoginUser } = useSWR(
    '/member/inform',
    fetcher
  );
  const { data: userInfo, mutate: mutateUserInfo } = useSWR(
    loginUser ? `/member?username=${loginUser.id}` : null,
    fetcher
  );
  const { data: todoStreak } = useSWR(
    loginUser ? `/streaks/${loginUser.id}` : null,
    fetcher
  );
  const [editMode, setEditMode] = useState(false);
  const [email, onChangeEmail, setEmail] = useInput('');
  const [nickname, onChangeNickname, setNickname] = useInput('');
  const [message, onChangeMessage, setMessage] = useInput('');
  const [imageFile, setImageFile] = useState(null);

  const [profileImage, setProfileImage] = useState(null);
  const imageFileUpload = (fileBlob) => {
    const reader = new FileReader();
    reader.readAsDataURL(fileBlob);
    setImageFile(fileBlob);

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
    setMessage(userInfo.message || '');
    setProfileImage(userInfo.imagePath);
  }, [setEmail, setMessage, setNickname, userInfo]);

  const requestUpdate = useRequest(updateUserInfo);
  const updateUserInfoProc = useCallback(() => {
    const regexEmail =
      /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
    if (email && email.trim()) {
      if (!regexEmail.test(email.trim())) {
        toast.error('유효하지 않은 이메일 형식 입니다.');
        return;
      }
    }
    const formData = new FormData();
    if (!email.trim()) setEmail(userInfo.email);
    if (!nickname.trim()) setNickname(userInfo.name);
    formData.append('name', nickname.trim() || userInfo.name);
    formData.append('email', email || userInfo.email);
    formData.append('message', message.trim());
    if (imageFile) {
      formData.append('image_file', imageFile);
    }
    requestUpdate(formData)
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
    imageFile,
    message,
    mutateLoginUser,
    mutateUserInfo,
    nickname,
    requestUpdate,
    setEmail,
    setNickname,
    userInfo,
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
                setProfileImage(userInfo.imagePath);
                setImageFile(null);
                setEmail(userInfo.email || '');
                setNickname(userInfo.name || '');
                setMessage(userInfo.message || '');
              }}
            >
              취소
            </HeaderButton>
            <HeaderButton
              onClick={() => {
                updateUserInfoProc();
                setImageFile(null);
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
              setImageFile(null);
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
              src={`${
                profileImage
                  ? editMode && imageFile
                    ? `${profileImage}`
                    : `${API_URL}/${profileImage}`
                  : ''
              }`}
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
                      imageFileUpload(selectedFile);
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
              <FormItem>
                <label>한 줄 소개</label>
                <input
                  placeholder="한 줄 소개"
                  value={message}
                  onChange={onChangeMessage}
                />
              </FormItem>
            </>
          ) : (
            <>
              <div>
                <div>닉네임</div> <span>{userInfo && userInfo.name}</span>
              </div>
              <div>
                <div>이메일</div> <span>{userInfo && userInfo.email}</span>
              </div>
              <div>
                <div>한 줄 소개</div>
                <span>{(userInfo && userInfo.message) || '-'}</span>
              </div>
            </>
          )}
        </UserDetailInfo>
      </ContentDiv>
      {todoStreak && (
        <StreakContentDiv>
          <StreakTitle>TODO 스트릭</StreakTitle>
          <Streak
            todoStreak={todoStreak}
            maxStreak={365}
            line={5}
            width={1460}
            height={100}
          />
        </StreakContentDiv>
      )}
    </Container>
  );
}

export default MyPage;
