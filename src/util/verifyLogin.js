import { authenticate } from '../services/fetchActions';

async function auth() {
  let data;
  try {
    const token = localStorage.getItem('token');
    if (token) {
      data = await authenticate({ token });
      console.log('data :', data);
      if (data.data.auth) {
        console.log('True: ');
        return true;
      }
    }
  } catch (err) {
    return false;
  }
}

export default auth;