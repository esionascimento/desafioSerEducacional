export function verifyLogin({ email, password }) {
  if (email === 'admin' && password === 'admin') {
    return { token: '1234' };
  }
  return { error: 'Email ou senha invalido' };
}
