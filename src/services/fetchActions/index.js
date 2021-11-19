import axios from 'axios';
/* import baseURL from '../../services/services'; */
import { Login } from '../../store/auth/Auth.action';

export const newCadastro = (user) => {
  axios.post('https://desafio-ser-educacional-back.herokuapp.com/user', user)
  .then((res) => {
    console.log('res :', res);
    console.log(res.data);
  })
  .catch(console.log);
};

export const authLogin = (user) => {
  return (dispatch) => {
    axios.post('https://desafio-ser-educacional-back.herokuapp.com/login', user)
      .then((res) => {
        console.log('res :', res);
        localStorage.setItem('token', res.data.token);
        dispatch(Login());

        window.location.pathname = '/dashboard';
      })
      .catch(console.log);
  };
};
