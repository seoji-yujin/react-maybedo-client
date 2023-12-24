import axios from './config';

const PREFIX_URL = '/member';
/**
 * 로그인을 한다.
 */
export function login(params) {
  return axios.post(`${PREFIX_URL}/login`, params);
}

/**
 * 로그아웃 한다.
 */
export function logout() {
  return axios.post(`${PREFIX_URL}/logout`);
}

/**
 * 회원가입 한다.
 */
export function join(userInfo) {
  return axios.post(`${PREFIX_URL}/join`, userInfo);
}

/**
 * 회원 정보를 수정한다.
 */
export function updateUserInfo(userInfo) {
  return axios.put(`${PREFIX_URL}/update`, userInfo);
}
