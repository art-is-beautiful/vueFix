class updateProf {
    nameUpdate(fname, lname, username, email, mypassword) {
        this.fname = fname || '',
        this.lname = lname || '',
        this.username = username || '',
        this.email = email || '',
        this.mypassword = mypassword || '' 
    }
}

export default new updateProf();