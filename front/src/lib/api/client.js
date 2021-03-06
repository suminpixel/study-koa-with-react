import axios from 'axios';

//axios 공통설정 
//tip : 여러 API 서버로 요청할 수 있기 때문에 인스턴스를 만들어 나누어 사용할 수 있도록함
const client = axios.create();

//client.defaults.baseURL = 'https://external-api-server.com';

//client.defaults.headers.common['Authorization'] = `Bearer tempvalue123`;

client.interceptors.response.use(function (response) {
    console.log(response)
    return response;

  }, function (error) {
    console.log(error)
    return Promise.reject(error);

  });





export default client;