<template>
    <div>
        <myHeader headerFirstText="Already have an account?" headerSecondText="Log in"></myHeader>
        <div class="content-center">
            <img src="../../public/img/recoveryMail.svg" alt="img">
            <mysignTopText class="signTopText" signTopText="You are almost ready to go"></mysignTopText>
            <p class="additional_text">Please check your email to reset your password</p>
        </div>
        <img src="../../public/img/ellipse/Ellipse.svg" alt="ellipse" class="ellipse">
        <img src="../../public/img/ellipse/Ellipse-1.svg" alt="ellipse1" class="ellipse">
        <img src="../../public/img/ellipse/Ellipse-2.svg" alt="ellipse2" class="ellipse">
        <img src="../../public/img/ellipse/Ellipse-3.svg" alt="ellipse3" class="ellipse">
    </div>
        
</template>

<script>

import myHeader from '../components/controllers/header/signHeader.vue'
import mysignTopText from '../components/controllers/signTopText.vue'

export default {
    name: 'signIn1',
    components: {
        myHeader,
        mysignTopText,
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
.signTopText{
    font-size: 3.125em;
}
.additional_text{
    font-family: "Exo 2";
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 0.24px;
}
.content-center{
    max-width: 40em;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin-left: auto;
    margin-right: auto;
    margin-top: 12%;
}
.ellipse{
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    margin-left: auto;
    margin-right: auto;
    z-index: -1;
}
@media (max-width:850px){
    .signTopText{
         font-size: 2.525em;
    }
    .ellipse{
        vertical-align: middle;
    }
    .content-center{
        margin-top: 20%;
    }
  
}
@media (max-width:450px){
    .signTopText{
         font-size: 1.825em;
    }
    .content-center{
        margin-top: 8em;
    }
}

</style>