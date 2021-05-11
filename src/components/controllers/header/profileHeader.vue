<template>
    <div class="myProfHeader">
        <div class="myProfHeader__wrapper">
            <div class="myProfHeader__nav">
                <a href="" class="myProfHeader__link ">{{headerFirstText}}</a>
                <!-- <img src="../../../../public/img/Active_line.svg" class="myHeader__link-active1" alt="active line"> -->
                <span class="arrow_right"> > </span>
                <a href="/profile1" class="myProfHeader__link ">{{headerSecondText}}</a>
                <span class="arrow_right" v-if="headerThirdText"> > </span>
                <a href="#" class="myProfHeader__link ">{{headerThirdText}}</a>
            </div>
            <div class="myProfHeader__dropdown">
                <select name="delete acc" id="choice-header" class="myProfHeader__dropdown-select" v-on:change="getDisplayName" onChange="javascript:handleSelect(this)">
                    <option value="account" selected>{{myuser.fname}} {{myuser.lname}}</option>
                    <option value="signIn1"> Delete acc. </option>
                </select>
                <!-- <mySelect2
                        class="myProfHeader__dropdown-select"
                        style="background-color: #fff; min-width: 10em; margin: 0 auto;"
                        :options="role"
                        @select="selectRole"
                        :selectedName="myuser.fname + ' ' + myuser.lname" 
                        v-if="(mySelectRole == 'Artem Chornyi')"
                ></mySelect2>
                <mySelect2
                        class="myProfHeader__dropdown-select"
                        style="background-color: #fff; min-width: 10em; margin: 0 auto;"
                        :options="role"
                        @select="selectRole"
                        :selectedName="mySelectRole" 
                        v-on:change="getDisplayName"
                        v-else
                ></mySelect2> -->
            </div>
        </div>
    </div>
</template>

<script>
import apiService from '../../../helpers/api';

// import mySelect2 from '../../controllers/select2';



export default {
    name: "signTopText",
    components: {
        // mySelect2,
    },
    props: {
        headerFirstText: String,
        headerSecondText: String,
        headerThirdText: String,
    },
    data(){
        return {
            myuser: {
                fname: '',
                lname: '',
            },
            userId: '',
            role: [
                {name: "Profile", value: 1},
                {name: "admin", value: 2},
                {name: "Delete acc", value: 3},
            ],
            mySelectRole: 'Artem Chornyi',

        }
    },
    methods: {
        handleSelect(elm){
           window.location = elm.value+".vue";
        },
        selectRole(option) {
            this.mySelectRole = option.name;
        },
        getDisplayName(){
            // this.$router.push({path:'/admin' })
            // console.log(e.target.value);
            
            apiService.delete(`users/delete/${this.userId}`)
                            .then(() => {
                              console.log('Deleted: ok')
                              this.$router.push('signUp1')
                            })
                            .catch((err) => {
                              console.log(err);
                            })

            
        },
        // deleteAccount() {
        //     apiService.delete(`/users/delete/${this.userId}`)
        //         .then(() => {
        //           console.log('Deleted: ok')
        //           this.$router.push('signIn1')
        //         })
        //         .catch((err) => {
        //           console.log(err);
        //         })
        // }
    },
    computed: {
        
    },
    beforeCreate() {
        apiService.get("users/profile")
            .then((res) => {
              console.log(res.data.user)
              this.userId = res.data.user.id
              this.myuser.fname = res.data.user.fname
              this.myuser.lname = res.data.user.lname
            })
            .catch((err) => {
              console.log(err);
            })
    },
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

body{
    font-size: 16px;
}

.myProfHeader{
    background-color: #fff;
    width: 100%;
    height: 3.8125em;
    display: flex;
    justify-content: space-between;
    &__wrapper{
        width: 80%;
        display: flex;
        flex-wrap: wrap;
        align-items: center;
        justify-content: space-between;
        margin-left: 10%;
    }
    &__dropdown-select{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.9em;
        letter-spacing: 0.28px;
        color: #252F48;
    }
    &__link{
        font-family: 'Roboto';
        font-weight: 400;
        font-size: 0.85em;
        letter-spacing: 0.28px;
        text-decoration: none;
        color: #252F48;
        border: none;
        border-radius: 0px;
        border-color: #fff;
       
    }
    // &__link-active1{
    //     position: absolute;
    //     top: 11.9em;
    //     left: 10.3em;
    //     z-index: 2;
    // }
}

.arrow_right{
    color: #0AD69C;
    width: 0.375em;
    height: 0.53125em;
    margin: 0 5px;
    font-family: 'Roboto';
    font-weight: 500;

}

#choice-header{
    width: 8.8em;
    height: 1.25em;
    border: none;
    background-color: #fff;
}

@media (max-width:450px){
    // .logo{
    //     display: none;
    // }
    // .myHeader{
    //     display: flex;
    //     justify-content: center;
    // }
    // .myHeader__text{
    //     text-align: center;
    //     margin-top: 1.2em;
    // }
}
</style>
