<template>
    <div>
        <myHeader headerFirstText="Already have an account?" headerSecondText="Log in"></myHeader>
        <background class="background1"></background>
        <div class="background1__wrapper">
            <mysignTopText class="mysignTopText" signTopText="Sign up"></mysignTopText>
            <div class="input1Wrapper">
                <myInput1 input1_type="text" class="input1 input1Wrapper__small" input1_placeholder="Name" v-model="veefname" v-on:change-my-input="getFname"/>
                <myInput2 input1_type="text" class="input1 " input1_placeholder="Last name" v-model="veelname" v-on:change-my-input="getLname"/>   
            </div>
            <span v-if="v$.veefname.$error" style="color:red; font-size:12px; width:55%"> <br> {{v$.veefname.$errors[0].$message}}</span>
            <span v-if="v$.veelname.$error" style="color:red; font-size:12px; width:45%"> <br> {{v$.veelname.$errors[0].$message}}</span>
            <myInput1 input1_type="text" class="input1" input1_placeholder="Username" v-model="veeusername" v-on:change-my-input="getUsername"/>
            <span v-if="v$.veeusername.$error" style="color:red; font-size:12px; width:100%">{{v$.veeusername.$errors[0].$message}}</span>
            <myInput2 input1_type="text" class="input1 mb-21px" input1_placeholder="E-mail" v-model="veeemail" v-on:change-my-input="getEmail"/>
            <span v-if="v$.veeemail.$error" style="color:red; font-size:12px; width:100%; margin-top: -3em" >{{v$.veeemail.$errors[0].$message}}</span>
            <myButton1 class="myButton1" button1_text="Get started" @click="getStarted"/>
        </div>
    </div>
</template>

<script>
// import apiService from '../helpers/api'
import myData from '../helpers/signUpData'
import useValidate from '@vuelidate/core'
import { required, email, minLength } from '@vuelidate/validators'

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
            veefname: '',
            veelname: '',
            veeusername: '',
            veeemail: '',
            // getStartedData: {
            //     fname: '',
            //     lname: '',
            //     username: '',
            //     email: '',
            //     mypassword: 'lalala'
            // }
        }
    },
    validations() {
        return {
            veefname: { required },
            veelname: { required },
            veeusername: { required, minLength: minLength(5) },
            veeemail: { required, email },
        }
    },
    methods: {
        async getStarted() {
            this.v$.$validate()
            console.log(this.getStartedData)
            this.$router.push('signUp2')
            // if(!this.v$.$error){
            // await apiService.post('users/sign-up', this.getStartedData)
            //     .then(res => {
            //         this.$router.push('signUp2')
            //         console.log('ok');
            //         console.log(res.data);
            //     })
            //     .catch(err => {
            //         console.log('Created acc was failed ', err.response.data)
            //     });
            // } else {
            //     console.log('Errrrrooooooor') 
            // }
        },
        getFname(data) {
            // this.getStartedData.fname = data
            myData.data.fname = data
        },
        getLname(data) {
            // this.getStartedData.lname = data
            myData.data.lname = data
        },
        getUsername(data) {
            // this.getStartedData.username = data
            myData.data.username = data
        },
        getEmail(data) {
            // this.getStartedData.email = data
            myData.data.email = data
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

.input1Wrapper{
    display:flex;
    justify-content: space-between;
    // width: 50%;
    &__small{
        margin-right: 2em;
    }
}

.mysignTopText{
    width: 100%;
}

.mb-13px{
    margin-bottom: 0.78125em;
}

.mb-21px{
    margin-bottom: 2.6em;
}

</style>