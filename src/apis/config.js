import axios from 'axios';
import humps from 'humps';

const instance = axios.create({
  baseURL: '',
});

// 요청 인터셉터
instance.interceptors.request.use(
  (config) => {
    // 폼데이터의 경우 카멜케이스로 바꾸면 에러가 발생
    if (!(config.data instanceof FormData)) {
      config.data = humps.decamelizeKeys(config.data);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 응답 인터셉터
instance.interceptors.response.use((response) => {
  response.data = humps.camelizeKeys(response.data);
  return response;
});

export default instance;
