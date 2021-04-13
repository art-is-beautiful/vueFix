<template>
    <div>
        <myHeader headerFirstText="Don't have an account?" headerSecondText="Sign up"></myHeader>
        <background class="background1"></background>
        <div class="background1__wrapper4">
            <mysignTopText class="mysignTopText" signTopText="Reset your password"></mysignTopText>
            <myInput1 input1_type="password" class="input1" input1_placeholder="New password" />
            <myInput2 input1_type="password" class="input1 mb-13px mb-21px" input1_placeholder="Confirm password" />
            <myButton1 class="myButton1" button1_text="Reset"/>
        </div>
    </div>
</template>

<script>

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