<template>
    <div>
        <myHeader headerFirstText="Don't have an account?" headerSecondText="Sign up"></myHeader>
        <background class="background1"></background>
        <div class="background1__wrapper">
            <mysignTopText class="mysignTopText" signTopText="Sign in"></mysignTopText>
            <myInput1 input1_type="text" class="input1" input1_placeholder="@email" v-on:change-my-input="getEmail" v-model="veeemail" />
            <span v-if="v$.veeemail.$error" style="color:red; font-size:12px; width:100%; margin-top: -3em" >{{v$.veeemail.$errors[0].$message}}</span>
            <myInput2 input1_type="password" class="input1 mb-13px" input1_placeholder="Password" v-on:change-my-input="getPassword" v-model="veepassword"/>
            <span v-if="v$.veepassword.$error" style="color:red; font-size:12px; width:100%; margin-top: -3em" >{{v$.veepassword.$errors[0].$message}}</span>
            <div class="background1__forgotPass mb-13px"><a href="#" class="background1__forgotPass-text">Forgot password?</a></div>
            <myButton1 class="myButton1" button1_text="Sign in" @click="btnSignIn"/>
        </div>
    </div>
</template>

<script>
// import axios from 'axios'
import apiService from '../helpers/api'
import mySignData from '../helpers/signInData'
import useValidate from '@vuelidate/core'
import { required, email } from '@vuelidate/validators'

import background from '../components/controllers/backgrounds/background1.vue'
import myButton1 from '../components/controllers/button1.vue'
import myInput1 from '../components/controllers/input1.vue'
import myInput2 from '../components/controllers/input1.vue'
import mysignTopText from '../components/controllers/signTopText.vue'
import myHeader from '../components/controllers/header/signHeader.vue'

export default {
    name: 'signIn1',
    components: {
        myButton1,
        myInput1,
        myInput2,
        background,
        mysignTopText,
        myHeader,
    },
    data() {
        return {
            v$: useValidate(),
            veeemail: '',
            veepassword: '',
            signInData: {
                email: '',
                mypassword: ''
            }
        }
    },
    validations() {
        return {
            veeemail: { required, email },
            veepassword: { required }
        }
    },
    methods: {
        async btnSignIn() {
            this.v$.$validate()
            if(!this.v$.$error){
            await apiService.post("users/sign-in", {...mySignData.data})
                .then(res => {
                    this.$router.push('profile1')
                    console.log('ok');
                    console.log(res.data);
                    mySignData.getToken.accessToken = res.data.tokens.accessToken;
                    // let cookie = `mytoken = ${JSON.stringify(mySignData.checkJWT())}`
                    // document.cookie = cookie;
                    localStorage.setItem('mytoken', mySignData.checkJWT());
                    localStorage.setItem('myemail', mySignData.checkEmail());
                })
                .catch(err => {
                    console.log('Created acc was failed ', err.response.data)
                });
            } else {
                console.log('Errrrrooooooor') 
            }
        },
        getEmail(data) {
            // this.signInData.email = data
            mySignData.data.email = data;
            mySignData.getEmail.email = data;
        },
        getPassword(data) {
            // this.signInData.mypassword = data
            mySignData.data.mypassword = data;
        }
    }
}
</script>

<style lang="scss">
@import "../public/scss/reset.scss";
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

body{
    font-size: 16px;
    background-color: #f9fafc;
}
.background1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    z-index: -1;
    &__wrapper{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        max-width: 25em;
        display: flex;
        flex-wrap: wrap;
        justify-content: flex-end;
        
    }
    
    &__forgotPass{
        width: 100%;
        text-align: right;
        &-text{
            text-decoration: none;
            color: black;
            font-family: 'Roboto';
            font-style: normal;
            font-size: 0.75em;
            line-height: 19px;
        }
    }
}
.mysignTopText{
    width: 100%;
}

.mb-13px{
    margin-bottom: 0.78125em;
}


</style>