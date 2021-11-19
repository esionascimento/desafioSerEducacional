import { useDispatch } from 'react-redux';
import { useJwt } from "react-jwt";
import { Login } from '../store/auth/Auth.action';

export function verifyLogin({ email, password }) {
  if (email === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Email ou senha invalido' };
}

export const verifyJWT = () => {
  const dispatch = useDispatch();
  const token = localStorage.getItem('token');
  let isAuthenticated = false;
  
  if (token) {
    const { isExpired } = useJwt(token);
    if (!isExpired) {
      dispatch(Login());
      isAuthenticated = true;
    }
  }
  return isAuthenticated;
}