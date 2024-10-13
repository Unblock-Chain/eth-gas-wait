import { fetchGet, fetchPost } from './fetch'; 


// 获取交易列表
export const getTransactions = async () => {
  const trans= await fetchGet('/transaction'); 
  return JSON.parse(trans);
};

