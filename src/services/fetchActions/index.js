import axios from 'axios';

const BASE_URL= 'http://localhost:3001';

export const newCadastro = (user) => {
  axios.post(`${BASE_URL}/user`, user)
  .then((res) => {
    console.log(res.data);
  })
  .catch(console.log);
};

const APIPOST = axios.create({
  baseURL: BASE_URL,
  headers: {
    'Content-type': 'application/json',
  },
});

export const authenticate = (token) => APIPOST.post('/authorization', token);

export const login = (user) => APIPOST.post('/login', user);

export const dashboard = () => APIPOST.get('/dashboard');