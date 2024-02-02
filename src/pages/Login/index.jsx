import React, { useCallback, useState } from 'react';
import {
  Container,
  LogoDiv,
  Form,
  LoginButton,
  ButtonWrapper,
  JoinButton,
  // HrSection,
  // SnsButtonWrapper,
  // KakaoButton,
  ErrorMsg,
} from './style';
import FormItem from 'components/FormItem';
import useInput from 'hooks/useInput';
// import { RiKakaoTalkFill } from 'react-icons/ri';
import { useNavigate } from 'react-router-dom';
import useRequest from 'hooks/useRequest';
import { login } from 'apis/member';
import useSWR from 'swr';
import fetcher from 'utils/fetcher';

function Login() {
  const navigate = useNavigate();
  const { mutate: mutateLoginUser } = useSWR('/member/inform', fetcher);
  const [id, onChangeId] = useInput('');
  const [password, onChangePassword] = useInput('');
  const [errorMsg, setErrorMsg] = useState(null);

  const requestLogin = useRequest(login);

  const onClickLoginButton = useCallback(async () => {
    if (!id.trim()) {
      setErrorMsg('아이디를 입력해주세요.');
      return;
    }
    if (!password.trim()) {
      setErrorMsg('비밀번호를 입력해주세요.');
      return;
    }
    setErrorMsg(null);
    const user = {
      username: id,
      password: password,
    };
    try {
      const result = await requestLogin(user);
      if (result === -1) {
        setErrorMsg('존재하지 않는 아이디입니다.');
        return;
      } else if (result === -2) {
        setErrorMsg('비밀번호가 일치하지 않습니다.');
        return;
      } else if (result >= 1) {
        mutateLoginUser();
        navigate('/');
        setErrorMsg(null);
      }
    } catch {
      setErrorMsg('로그인에 실패하였습니다.');
    }
  }, [id, mutateLoginUser, navigate, password, requestLogin]);

  return (
    <Container>
      <div>
        <LogoDiv>MAYBE :DO</LogoDiv>
        <Form>
          <FormItem>
            <input
              placeholder="아이디"
              value={id}
              onChange={onChangeId}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onClickLoginButton();
                }
              }}
            />
          </FormItem>
          <FormItem>
            <input
              placeholder="비밀번호"
              type="password"
              value={password}
              onChange={onChangePassword}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onClickLoginButton();
                }
              }}
            />
          </FormItem>
          {errorMsg && <ErrorMsg>{errorMsg}</ErrorMsg>}
        </Form>
        <ButtonWrapper>
          <LoginButton onClick={onClickLoginButton}>로그인</LoginButton>
          <JoinButton>
            <div>아직 회원이 아니신가요?</div>{' '}
            <span
              onClick={() => {
                navigate('/join');
              }}
            >
              회원가입
            </span>
          </JoinButton>
        </ButtonWrapper>
        {/* <HrSection>또는</HrSection>
        <SnsButtonWrapper>
          <div>SNS계정으로 간편하게 시작하기</div>
          <KakaoButton>
            <RiKakaoTalkFill size="21" />
            카카오로 시작하기
          </KakaoButton>
        </SnsButtonWrapper> */}
      </div>
    </Container>
  );
}

export default Login;
