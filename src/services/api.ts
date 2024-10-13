import axios from 'axios';

const ApiInstance = axios.create({
  baseURL: 'https://your-api-base-url.com', // 替换为你的 API 基础 URL
  headers: {
    'Content-Type': 'application/json',
  },
});

export default ApiInstance;
