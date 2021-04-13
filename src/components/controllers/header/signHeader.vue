<template>
    <div class="myHeader">
        <div class="myHeader__wrapper">
            <a href="#" class="logo">
                <img src="../../../../public/img/headerSvg/logo1.svg" alt="logo">
                <img src="../../../../public/img/headerSvg/logo2.svg" alt="logo">
            </a>
            <h2 class="myHeader__text">{{headerFirstText}}
                <a class="myHeader__sign" href="#"> 
                <router-link v-if="headerSecondText=='Sign up'" to="/signUp1" style="text-decoration: none">Sign up</router-link> 
                <router-link v-else to="/signin1" style="text-decoration: none">Sign in</router-link> 
                </a>
            </h2>
        </div>
    </div>
</template>

<script>
export default {
    name: "signTopText",
    props: {
        headerFirstText: String,
        headerSecondText: String,
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

.myHeader{
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
    &__text{
    font-family: 'Roboto';
    font-weight: 400;
    font-size: 1em;
    letter-spacing: 0.28px;
    }
    &__sign{
        text-decoration: none;
        font-weight: 700;
        margin-left: 0.2em;
    }
}


@media (max-width:450px){
    .logo{
        display: none;
    }
    .myHeader{
        display: flex;
        justify-content: center;
    }
    .myHeader__text{
        text-align: center;
        margin-top: 1.2em;
    }
}
</style>
