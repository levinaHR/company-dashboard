import axios from 'axios';

const APIConfig = axios.create({
  baseURL: 'https://mitramas-test.herokuapp.com',
});

export default APIConfig;
