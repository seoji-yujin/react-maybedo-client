import axios from './config';

const PREFIX_URL = '/todo';

/**
 * 투두 리스트를 작성한다.
 */
export function createTodo(params) {
  return axios.post(`${PREFIX_URL}/create`, params);
}

/**
 * 투두 리스트를 완료한다.
 */
export function toggleTodo(id) {
  return axios.put(`${PREFIX_URL}/done/${id}`);
}

/**
 * 투드를 삭제한다.
 */
export function deleteTodo(id) {
  return axios.delete(`${PREFIX_URL}/delete/${id}`);
}
