import axios from './config';

const PREFIX_URL = '/group';

/**
 * 그룹을 생성한다.
 */
export function createGroup(params) {
  return axios.post(`${PREFIX_URL}/create`, params);
}
