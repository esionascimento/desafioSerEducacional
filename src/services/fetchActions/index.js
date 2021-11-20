import axios from 'axios';

export const newCadastro = (user) => {
  axios.post('https://desafio-ser-educacional-back.herokuapp.com/user', user)
  .then((res) => {
    console.log(res.data);
  })
  .catch(console.log);
};

const APIPOST = axios.create({
  baseURL: 'https://desafio-ser-educacional-back.herokuapp.com',
  headers: {
    'Content-type': 'application/json',
  },
});

export const authenticate = (token) => APIPOST.post('/authorization', token);

export const login = (user) => APIPOST.post('/login', user);

export const dashboard = () => APIPOST.get('/dashboard');