import axios from 'axios';
export const baseURL = process.env.REACT_APP_BASE_URL;

const postSignUp = async (endpoint: string) => {
  const res = await axios(`${baseURL}/${endpoint}`);
  return await res.data();
};
