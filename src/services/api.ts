import axios from 'axios';

const ApiInstance = axios.create({
  baseURL: 'http://127.0.0.1:8080', // 替换为你的 API 基础 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiInstance;
