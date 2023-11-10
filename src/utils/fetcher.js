import axios from 'axios';

const fetcher = (url) => axios.get(url).then((response) => response.data.data);

export default fetcher;
