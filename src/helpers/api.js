import axios from 'axios';

// import mySignData from './signInData'

class ApiService {
  constructor() {
    this.http = axios;
    this.http.defaults.baseURL = 'http://localhost:3002';
  }

  get(url) {
    const config = {
      headers: {
        'Authorization': `JWT ${window.localStorage.getItem('mytoken')}` //${mySignData.checkJWT()
      }
    }
    console.log(config)
    return this.http.get(url, config);
    // return this.http.get(url);
  }

  post(url, body) {
    return this.http.post(url, body);
  }

  put(url, body) {
    return this.http.put(url, body);
  }

  // getJwt(url) {
  //   const config = {
  //     headers: {
  //       'Authorization': `JWT ${signData}`
  //     }
  //   }
  //   console.log(config)
  //   // console.log(signData.getToken.accessToken)
  //   return this.http.get(url, config);
  // }
}

export default new ApiService();