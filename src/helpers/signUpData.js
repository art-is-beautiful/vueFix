class RegData {
    // constructor() {
    //   this.http = axios;
    //   this.http.defaults.baseURL = 'http://localhost:3002';
    // }
  
    // get(url) {
    //   return this.http.get(url);
    // }
  
    // post(url, body) {
    //   return this.http.post(url, body);
    // }
    data(fname, lname, username, email, mypassword) {
            this.fname = fname || '',
            this.lname = lname || '',
            this.username = username || '',
            this.email = email || '',
            this.mypassword = mypassword || '' 
    }
  }

  
  export default new RegData();