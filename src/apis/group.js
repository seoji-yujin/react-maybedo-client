import axios from './config';

const PREFIX_URL = '/group';

/**
 * 그룹을 생성한다.
 */
export function createGroup(params) {
  return axios.post(`${PREFIX_URL}/create`, params);
}

/**
 * 그룹에 가입한다.
 */
export function joinGroup(gropuId) {
  return axios.post(`${PREFIX_URL}/join/${gropuId}`);
}

/**
 * 그룹을 탈퇴한다.
 */
export function deleteGroup(gropuId) {
  return axios.delete(`${PREFIX_URL}/${gropuId}`);
}
