import axios from 'axios';

const PREFIX_URL = '/member';
/**
 * 로그인을 한다.
 */
export function login(params) {
  return axios.post(`${PREFIX_URL}/login`, params);
}
