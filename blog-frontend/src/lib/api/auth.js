import client from './client';

//로그인
export const login = ({ username, password}) =>{
    client.post('/api/quth/login', {usernmae, password});
}

//회원가입
export const register = ({ username, password}) =>{
    client.post('/api/quth/login', {usernmae, password});
}

//로그인 상태 확인
export const check = () => client.get('/api/auth/check');
