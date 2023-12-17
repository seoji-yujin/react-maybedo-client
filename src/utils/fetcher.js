import axios from 'apis/config';

const fetcher = (url) => axios.get(url).then((response) => response.data.data);

export default fetcher;
