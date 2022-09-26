import api from '@/api';

const authApi = {
  sigIn(user) {
    return api.post('/sign-in', user);
  },
  signUp(user) {
    return api.post('/sign-up', user);
  },
  refreshToken(token) {
    return api.put('/refresh-token', { refreshToken: token });
  },
  deleteToken(token) {
    const data = { refreshToken: token };
    return api.delete('/delete-token', { data });
  },
  googleSignIn() {
    return api.get('/google-auth');
  }
};

export default authApi;
