<template>
<div>
    <button class="myButton1">
        {{button1_text}}
        <!-- <router-link v-if="button1_text=='Sign in'" to="/signIn3" style="text-decoration:none; color:white">{{ button1_text }}</router-link>
        <router-link v-if="button1_text=='Send'" to="/signIn3" style="text-decoration:none; color:white">{{ button1_text }}</router-link>
        <router-link v-if="button1_text=='Reset'" to="/signIn3" style="text-decoration:none; color:white">{{ button1_text }}</router-link>
        <router-link v-if="button1_text=='Get started'" to="/signIn3" style="text-decoration:none; color:white">{{ button1_text }}</router-link>
        <router-link v-if="button1_text=='Done!'" to="/signIn3" style="text-decoration:none; color:white">{{ button1_text }}</router-link>
        <router-link v-if="button1_text=='SEARCH'" to="/#" style="text-decoration:none; color:white; text-align:center">{{ button1_text }}</router-link> -->
    </button>
</div>   
</template>

<script>
export default {
    name:"myButton1",
    props: {
        button1_text: String
    }
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

.myButton1{
    width: 11.75em;
    height: 2.6875em;
    color: #FFFFFF;
    background-color: #0AD69C;
    font-family: 'Exo 2';
    font-style: normal;
    font-size: 16px;
    font-weight: 600;
    line-height: 19px;
    letter-spacing: 0.4px;
    border: none;
    border-radius: 2px;
    text-align: center;
    cursor: pointer;
    &::after{
        border: none;
    }
}
</style>