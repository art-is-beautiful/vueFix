<template>
    <div>
        <myHeader headerFirstText="Don't have an account?" headerSecondText="Sign up"></myHeader>
        <background class="background1"></background>
        <div class="background1__wrapper4">
            <mysignTopText class="mysignTopText" signTopText="Reset your password"></mysignTopText>
            <myInput1 input1_type="password" class="input1" input1_placeholder="New password" v-model="veepass1"  v-on:change-my-input="getResetPass"/>
            <span v-if="v$.veepass1.$error" style="color:red; font-size:12px; width:55%"> <br> Error {{v$.veepass1.$errors[0].$message}}</span>
            <myInput2 input1_type="password" class="input1 mb-13px mb-21px" input1_placeholder="Confirm password" v-model="veepass2" v-on:change-my-input="getResetPass2" />
            <span v-if="v$.veepass1.$error" style="color:red; font-size:12px; width:55%"> <br> Error {{v$.veefname.$errors[0].$message}}</span>
            <myButton1 class="myButton1" button1_text="Reset" @click="resetPass"/>
        </div>
    </div>
</template>

<script>
import apiService from '../helpers/api';
import useValidate from '@vuelidate/core'
import { required, minLength, sameAs } from '@vuelidate/validators'

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
            myuser: {
                id: '',
                mypassword: ''
            },
            veepass1: '',
            veepass2: ''
        }
    },
    validations() {
        return {
            veepass1: { required, minLength: minLength(5) },
            veepass2: { required, minLength: minLength(5), sameAs: sameAs(this.veepass1) },
            
        }
    },
    beforeCreate() {
        apiService.get("users/profile")
            .then((res) => {
              this.myuser.id = res.data.user.id;
              
            })
            .catch((err) => {
              console.log(err);
            })
    },
    methods: {
        async resetPass() {
            // console.log({...this.myuser})
            await this.v$.$validate()
           
            if(!this.v$.$error){
                await apiService.put("users/update-password", {...this.myuser})
                .then((res) => {
                  console.log(res)
                  this.$router.push('signIn1')
                })
                .catch((err) => {
                  console.log(err);
                })  
            } else {
                console.log('Errrrrooooooor') 
            }
            
        },
        getResetPass(data) {
            this.myuser.mypassword = data;
            this.veepass1 = data;
        },
        getResetPass2(data) {
            this.veepass2 = data;
        }
    },
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
    &__wrapper4{
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        z-index: -1;
        max-width: 25em;
        // width: 25em;
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

.mb-21px{
    margin-bottom: 2.6em;
}

@media (max-width:450px){
    // .background1__wrapper4{
    //     margin-left: 7.25em;
    //     margin-right: 14.5em;
    // }
}

</style>