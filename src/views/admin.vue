<template>
    <div>
        <myNav></myNav>
        <myAdmHeader headerFirstText="Home" headerSecondText="Admin"></myAdmHeader>
        <background class="background1Adm"></background>
        <div class="profileWrapper">
            <manage></manage>
        </div> 
    </div>   
</template>

<script>

import myAdmHeader from '../components/controllers/header/profileHeader.vue'
import background from '../components/controllers/backgrounds/background_profile.vue'
import myNav from '../components/controllers/leftNav.vue'
import manage from '../components/component/admManage.vue'


export default {
    name: 'signIn1',
    components: {
        background,
        myAdmHeader,
        myNav,
        manage,
    }
}
</script>

<style lang="scss" >
@import "../public/scss/reset.scss";
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

body{
    font-size: 16px;
    background-color: #f9fafc;
}
.background1Adm{
    // margin: 0 20px;
    position: absolute;
    width: 100%;
    height: 100%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    // margin: auto;
    z-index: -1; 
}

.profileWrapper{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    max-width: 72.5em;
    max-height: 36.5em;
    margin: 0 auto;

}


@media (min-width: 1200px) {
    .profileWrapper{
        width: 100%;
        height: 100%;
        &__column{
            width: 100%;
        }
    }
    .rofileWrapper__column{
        width: 100%;
    }
    .input-w, .myButton1{
        width: 100%;
    }
  
    
}
@media (max-width: 1200px){
    .profileWrapper{
        width: 70%;
        height: 70%;
        &__content{
            width: 80%;
        }
        &__column{
            width: 100%;
        }
    }
    
    .input-w, .myButton1{
        width: 100%;
    }
   
    .background1Adm{
        width: 90%;
        height: 70%;
    }
}
@media (max-width: 3350px){
    .contentWrapper2{
        left: 65%;
        height: 100%;
        width: 80%;
    }  
}

@media (max-width: 1350px){
    .profileWrapper{
        // margin-left: 2em;
        width: 75%;
        height: 70%;
        &__content{
            width: 80%;
        }
        &__column{
            height: 80%;
        }
    }
    .contentWrapper2{
        left: 70%;
        height: 100%;
        width: 70%;
    }  
}
@media (max-width: 1240px){
    .contentWrapper2{
        left: 73%;
        height: 100%;
        width: 70%;
    } 
}
@media (max-width: 1000px){
    .contentWrapper2{
        left: 80%;
        height: 100%;
        width: 70%;
    } 
}
@media (max-width: 950px){
    .contentWrapper2{
        left: 79%;
        height: 100%;
        width: 70%;
    } 
}
@media (max-width: 500px){
    .profileWrapper{
        width: 90%;
        height: 80%;
        &__content{
            width: 100%;
        }
    }
    .input-w{
        width: 80%;
    }
    .myButton1{
        width: 88%;
        text-align: center;
    }
    .max-w{
        width: 87.5%
    }
}

@media (max-height: 850px){
    .background1Adm{
        max-height: 69vh;
        height: 100%;
    }
    
}
@media (max-height: 750px){
    .background1Adm{
        max-height: 85vh;
        height: 100%;
    }
    
}


</style>