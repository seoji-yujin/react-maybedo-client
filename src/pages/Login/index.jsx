import React, { useCallback } from 'react';
import { Container, LogoDiv, LoginForm } from './style';
import useInput from 'hooks/useInput';
import useRequest from 'hooks/useRequest';
import { login } from 'apis/member';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

function Login() {
  const navigate = useNavigate();

  const [id, onChangeId] = useInput('');
  const [pw, onChangePw] = useInput('');

  const requestLogin = useRequest(login);
  const onSubmitForm = useCallback(
    async (e) => {
      e.preventDefault();
      if (!id.trim() || !pw.trim()) {
        toast.error('아이디와 비밀번호를 입력해주세요.');
        return;
      }
      const user = {
        username: id,
        password: pw,
      };
      await requestLogin(user).catch((e) => {
        console.error(e);
      });
      navigate('/main');
    },
    [id, navigate, pw, requestLogin]
  );

  return (
    <Container>
      <LogoDiv>MAYBE :DO</LogoDiv>
      <LoginForm onSubmit={onSubmitForm}>
        <input placeholder="ID" value={id} onChange={onChangeId}></input>
        <input
          placeholder="PW"
          value={pw}
          onChange={onChangePw}
          type="password"
        ></input>
        <button>로그인</button>
      </LoginForm>
    </Container>
  );
}

export default Login;
