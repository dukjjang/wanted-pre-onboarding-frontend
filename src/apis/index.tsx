import axios from 'axios';
import { UserValues } from '../types/index';
export const baseURL = process.env.REACT_APP_BASE_URL;

export const postSignUp = async (endpoint: string, userValues: UserValues) => {
  const { email, password } = userValues;
  const res = await axios.post(`${baseURL}/auth/${endpoint}`, {
    email,
    password,
  });
  return res.data;
};
