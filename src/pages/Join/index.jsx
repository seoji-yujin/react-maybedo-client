import React, { useCallback, useRef, useState } from 'react';
import {
  Container,
  TitleDiv,
  FormDiv,
  JoinButton,
  FormItemDescDiv,
  ProfileInputWrapper,
  ProfileInputButton,
  ErrorMsg,
} from './style';
import FormItem from 'components/FormItem';
import useInput from 'hooks/useInput';
import ProfileImage from 'components/ProfileImage';
import { toast } from 'react-toastify';
import { CiCamera } from 'react-icons/ci';
import useRequest from 'hooks/useRequest';
import { join } from 'apis/member';
import { useNavigate } from 'react-router-dom';
import { IoChevronBack } from 'react-icons/io5';

function Join() {
  const [id, onChangeId] = useInput('');
  const [email, onChangeEmail] = useInput('');
  const [nickname, onChangeNickname] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [passwordRe, onChangePasswordRe] = useInput('');
  const [profileImage, setProfileImage] = useState(null);
  const [idErrorMsg, setIdErrorMsg] = useState(null);
  const [emailErrorMsg, setEmailErrorMsg] = useState(null);
  const [nicknameErrorMsg, setNicknameErrorMsg] = useState(null);
  const [passwordErrorMsg, setPasswordErrorMsg] = useState(null);
  const [imageFile, setImageFile] = useState(null);

  const navigate = useNavigate();

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

  const validate = useCallback(() => {
    let valid = true;
    if (!id.trim()) {
      valid = false;
      setIdErrorMsg('아이디를 입력해주세요.');
    } else setIdErrorMsg(null);
    if (!email.trim()) {
      valid = false;
      setEmailErrorMsg('이메일을 입력해주세요.');
    } else {
      const regexEmail =
        /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;
      if (!regexEmail.test(email.trim())) {
        valid = false;
        setEmailErrorMsg('유효하지 않은 이메일 형식 입니다.');
      } else {
        setEmailErrorMsg(null);
      }
    }
    if (!nickname.trim()) {
      valid = false;
      setNicknameErrorMsg('닉네임을 입력해주세요.');
    } else setNicknameErrorMsg(null);
    if (!password.trim() || !passwordRe.trim()) {
      valid = false;
      setPasswordErrorMsg('비밀번호를 입력해주세요.');
    } else {
      const regexPw = /^(?=.*[a-zA-Z])(?=.*[0-9]).{8,20}$/;
      if (password.trim() !== passwordRe.trim()) {
        valid = false;
        setPasswordErrorMsg('비밀번호가 다릅니다.');
      } else if (!regexPw.test(password.trim())) {
        valid = false;
        setPasswordErrorMsg(
          '영문, 숫자를 포함한 8~20자의 비밀번호를 입력해주세요.'
        );
      } else {
        setPasswordErrorMsg(null);
      }
    }
    return valid;
  }, [id, email, nickname, password, passwordRe]);

  const requestJoin = useRequest(join);
  const onClickJoinButton = useCallback(async () => {
    if (!validate()) return;
    const formData = new FormData();
    formData.append('username', id);
    formData.append('name', nickname);
    formData.append('email', email);
    formData.append('password', password);
    formData.append('image_file', imageFile);
    try {
      const result = await requestJoin(formData);
      if (result === -1) {
        toast.error('회원 가입에 실패하였습니다.');
        return;
      } else if (result >= 1) {
        toast.success('회원 가입 되었습니다.');
        navigate('/login');
      }
    } catch {
      toast.error('회원 가입에 실패하였습니다.');
    }
  }, [
    validate,
    id,
    nickname,
    email,
    password,
    imageFile,
    requestJoin,
    navigate,
  ]);

  return (
    <Container>
      <TitleDiv
        onClick={() => {
          navigate(-1);
        }}
      >
        <IoChevronBack />
        회원가입
      </TitleDiv>
      <FormDiv>
        <ProfileInputWrapper>
          <ProfileImage
            width="5"
            height="5"
            src={`${profileImage ? `${profileImage}` : ''}`}
            onClick={clickUploadButton}
            cursor="pointer"
          />
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
                toast.error('png, jpg, jpeg 파일만 업로드할 수 있습니다.');
              }
            }}
          />
        </ProfileInputWrapper>
        <FormItem flexDirection="column" error={idErrorMsg !== null}>
          <label>아이디</label>
          <FormItemDescDiv>
            다른 유저와 겹치지 않도록 입력해주세요.
          </FormItemDescDiv>
          <input
            placeholder="아이디를 입력해주세요"
            value={id}
            onChange={onChangeId}
          />
          {idErrorMsg && <ErrorMsg>{idErrorMsg}</ErrorMsg>}
        </FormItem>
        <FormItem flexDirection="column" error={emailErrorMsg !== null}>
          <label>이메일</label>
          <input
            placeholder="이메일을 입력해주세요"
            value={email}
            onChange={onChangeEmail}
          />
          {emailErrorMsg && <ErrorMsg>{emailErrorMsg}</ErrorMsg>}
        </FormItem>
        <FormItem flexDirection="column" error={nicknameErrorMsg !== null}>
          <label>닉네임</label>
          <input
            placeholder="닉네임"
            value={nickname}
            onChange={onChangeNickname}
          />
          {nicknameErrorMsg && <ErrorMsg>{nicknameErrorMsg}</ErrorMsg>}
        </FormItem>
        <FormItem flexDirection="column" error={passwordErrorMsg !== null}>
          <label>비밀번호</label>
          <FormItemDescDiv>
            영문, 숫자를 포함한 8~20자의 비밀번호를 입력해주세요
          </FormItemDescDiv>
          <input
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={onChangePassword}
          />
          <input
            placeholder="비밀번호 재입력"
            type="password"
            value={passwordRe}
            onChange={onChangePasswordRe}
          />
          {passwordErrorMsg && <ErrorMsg>{passwordErrorMsg}</ErrorMsg>}
        </FormItem>
      </FormDiv>
      <JoinButton onClick={onClickJoinButton}>회원가입</JoinButton>
    </Container>
  );
}

export default Join;
