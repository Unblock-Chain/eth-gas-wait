import { fetchGet, fetchPost, fetchDel } from './fetch'; 


const TransactionURL = "/transaction"


// 获取交易列表
export const getTransactions = async () => {
  const response = await fetchGet(TransactionURL); 
  return response.data;
};

// 删除交易
export const deleteTransaction = async (id: number) => {
  const response = await fetchDel(TransactionURL + "/" + id);

  // todo: 
  // if (!response.ok) {
  //     throw new Error("Failed to delete transaction");
  // }
  
  return response.data;
};