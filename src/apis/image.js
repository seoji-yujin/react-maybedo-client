import axios from './config';

const PREFIX_URL = '';
/**
 * 이미지를 업로드 한다.
 */
export function imageUpload(formdata) {
  const headers = { 'Content-Type': 'multipart/form-data' };
  return axios.post(`${PREFIX_URL}/upload`, formdata, headers);
}
