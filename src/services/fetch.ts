import ApiInstance from './api';

export const fetchGet = async (url: string) => {
  const response = await ApiInstance.get(url); 
  return response.data; 
};

export const fetchPost = async (url: string, postData: any) => {
  const response = await ApiInstance.post(url, postData);
  return response.data; 
};


