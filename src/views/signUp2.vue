<template>
    <div>
        <myHeader headerFirstText="Already have an account?" headerSecondText="Log in"></myHeader>
        <background class="background1"></background>
        <div class="background1__wrapper">
            <mysignTopText class="mysignTopText" signTopText="Complete your account"></mysignTopText>
            <myInput1 input1_type="password" class="input1" input1_placeholder="Password" v-model="veepass1" v-on:change-my-input="getPassword"/>
            <myInput2 input1_type="password" class="input1 mb-13px" input1_placeholder="Confirm password" v-model="veepass2" />
            <div class="checkboxWrapper">
                <div class="checkboxWrapper__el">
                    <input type="checkbox" name="agree1" class="checkboxWrapper__el-checkbox" >
                    <label for="agree1" class="checkboxWrapper__label">I agree to the myFixer.com <a href="#" class="checkboxWrapper__label-link">Terms of Service </a> </label>
                </div>
                <div class="checkboxWrapper__el mb-13px">
                    <input type="checkbox" name="agree2" class="checkboxWrapper__el-checkbox">
                    <label for="agree2" class="checkboxWrapper__label">I agree to the myFixer.com <a href="#" class="checkboxWrapper__label-link"> Privacy Policy</a></label>
                </div>
                <!-- <form action="index.html" method="POST" id="recaptcha-small">
                    <div class="g-recaptcha" data-sitekey="6Ld4QXEaAAAAAKBADEdYxA8T5EeBB7Ljk-190DjR"></div>
                    <br>
                </form> -->
                <myRecaptcha></myRecaptcha>
            </div>
            <myButton1 class="myButton1" button1_text="Done!" @click="getDone"/>
        </div>
    </div>
</template>

<script>
import apiService from '../helpers/api'
import  myData  from '../helpers/signUpData'
import useValidate from '@vuelidate/core'
import { required, minLength, sameAs } from '@vuelidate/validators'

// import { getStartedData } from './signUp1'

import background from '../components/controllers/backgrounds/background2.vue'
import myButton1 from '../components/controllers/button1.vue'
import myInput1 from '../components/controllers/input1.vue'
import myInput2 from '../components/controllers/input1.vue'
import mysignTopText from '../components/controllers/signTopText.vue'
import myHeader from '../components/controllers/header/signHeader.vue'
import myRecaptcha from '../components/controllers/recaptcha.vue'

export default {
    name: 'signIn1',
    components: {
        myButton1,
        myInput1,
        myInput2,
        background,
        mysignTopText,
        myHeader,
        myRecaptcha,
    },
    mounted() {

    },
    data() {
        return {
            getData: {
              ...myData.data
            },
            v$: useValidate(),
            veepass1: '',
            veepass2: '',
            standartData: {
                mycategory: 'None',
                users_id: '',
                phone_number: '0508233592',
                gender: "None",
                country: "None"
            }
        }
    },
    validations() {
        return {
            veepass1: { required, minLength: minLength(5) },
            veepass2: { required, minLength: minLength(5), sameAs: sameAs(this.veepass2) },
        }
    },
    methods: {
        async getDone(){
            this.v$.$validate()
            // console.log('data...:', {...myData.data})
        await apiService.post('users/sign-up', {...myData.data})
            .then(res => {
                this.$router.push('signUp3')
                console.log('ok');
                console.log(res.data);
                this.standartData.users_id = res.data.id;
                console.log('Id:: ' + res.data.id)
                console.log('my data: ', {...this.standartData})
            })
            .catch(err => {
                console.log('Created acc was failed ', err.response.data)
            });
        await apiService.post(`category/create-category`, {...this.standartData})
            .then((res) => {
                console.log(res.data)
            })
        },
        getPassword(data) {
            myData.data.mypassword = data
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

}

.checkboxWrapper{
    margin-left: 0.1em;
    margin-bottom: 2.75em;
    display: flex;
    flex-wrap: wrap;
    justify-content: left;
    &__el{
        height: 2.53125em;
        display: flex;
        align-items: center;
    }
    &__el-checkbox{
        width: 1.5em;
        height: 1.3em;
        margin-right: 0.3em;
    }
    &__label{
        font-family: "Roboto";
        font-weight: 400;
        font-size: 0.875em;
        letter-spacing: 0.28px;
    }
    &__label-link{
        text-decoration: none;
    }
}
.myButton1{
    max-width: 11.75em;
}

.mysignTopText{
    width: 100%;
}

// .mb-13px{
//     margin-bottom: 2em;
// }
.mb-13px{
    margin-bottom: 1em;
}

.mb-21px{
    margin-bottom: 2.6em;
}

</style>