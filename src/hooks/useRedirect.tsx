import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export const useRedirect = () => {
  const navigate = useNavigate();
  const isToken = localStorage.getItem('token') || '';
  useEffect(() => {
    if (isToken.length > 0) navigate('/todo');
    else navigate('/');
  }, []);
};
