import axios from 'axios';

//const EMPLOYEE_API_BASE_URL="http://localhost:8083/api/v1/employees";
// Add a request interceptor
axios.interceptors.request.use( config => {
  const user = JSON.parse(localStorage.getItem('user'));

  if(user && user.accessToken){
    const token = 'Bearer ' + user.accessToken;
    config.headers.Authorization =  token;
  }

  return config;
});

class BackendService {
  async getUserBoard() {
    return await axios.get("http://localhost:8082/api/test/user");
  }

  async getPmBoard() {
    return await axios.get("http://localhost:8082/api/test/pm");
  }

  async getAdminBoard() {
    return await axios.get("http://localhost:8082/api/test/admin");
  }
}

export default new BackendService();