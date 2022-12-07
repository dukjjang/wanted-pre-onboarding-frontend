import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const useRedirect = () => {
  const navigate = useNavigate();
  const isToken = localStorage.getItem('token');
  useEffect(() => {
    if (isToken) navigate('/todo');
    else navigate('/');
  }, []);
};
