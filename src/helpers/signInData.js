class SignData {
    data(email, mypassword) {
        this.email = email || '',
        this.mypassword = mypassword || '' 
    }
    getToken(accessToken) {
        this.accessToken = accessToken;
    }
    checkJWT() {
        // console.log('signDatatoken:' + this.getToken)
        return `${this.getToken.accessToken}`;
    }
    getEmail(email) {
        this.email = email
    }
    checkEmail() {
        return `${this.getEmail.email}`
    }
}

export default new SignData();