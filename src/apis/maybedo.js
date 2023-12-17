import axios from './config';

const PREFIX_URL = '/maybedo';

/**
 * 메모를 작성한다.
 */
export function createMemo(params) {
  return axios.post(`${PREFIX_URL}/create`, params);
}

/**
 * 메모를 수정한다.
 */
export function updateMemo({ id, params }) {
  return axios.put(`${PREFIX_URL}/update/${id}`, params);
}

/**
 * 메모를 삭제한다.
 */
export function deleteMemo(id) {
  return axios.delete(`${PREFIX_URL}/delete/${id}`);
}
