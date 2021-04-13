<template>
    <div>
        <myNav></myNav>
        <myProfileHeader headerFirstText="Home" headerSecondText="My profile"></myProfileHeader>
        <background class="backgroundProfile"></background>
        <div class="profileWrapper">
            <header class="profileWrapper__header">
                <a href="#" class="profileWrapper__header-text">PERSONAL INFORMATION </a>
                <hr class="active-line1">
                 <!-- <img src="../../public/img/Active_line.svg" class="active-link" alt="active line"> -->
                 <!-- <hr class="active-hr1"> -->
                <a href="#" class="profileWrapper__header-text">ACCOUNT INFORMATION</a>
            </header>
            <div class="profileWrapper__content">
                <div class="profileWrapper__avatar">
                    <img src="../../public/img/avatars/avatar1.svg" alt="avatar">
                    <br>
                    <button class="btn-changePhoto">
                        <img src="../../public/img/Vector_changePhoto.svg">
                        Change photo
                    </button>
                </div>
                <div class="profileWrapper__column">
                    <h3 class="profileWrapper__column-text mg-top-0">First Name </h3>
                    <myInput1 input1_type="text" class="input1 input1Prof" input1_placeholder="Name" value="Artem" />
                    <h3 class="profileWrapper__column-text">Title </h3>
                    <mySelect class="" optionOne="Mr" optionTwo="Ms" optionThree="None" optionFour="anonim"></mySelect>
                    <h3 class="profileWrapper__column-text">Country </h3>
                   <mySelect class="" optionOne="Ukraine" optionTwo="USA" optionThree="UK" optionFour="France"></mySelect>
                </div>
                <div class="">
                    <h3 class="profileWrapper__column-text mg-top-0">Last Name </h3>
                    <myInput1 input1_type="text" class="input1 input1Prof" input1_placeholder="Last name" value="Chornyi" />
                    <h3 class="profileWrapper__column-text">Mobile phone </h3>
                    <myInput1 input1_type="text" class="input1 input1Prof" input1_placeholder="0500500505" />
                    <h3 class="profileWrapper__column-text">Categoty </h3>
                    <myInput1 input1_type="text" class="input1 input1Prof" input1_placeholder="category" />
                </div>
            </div>
        </div> 
    
    </div>   
</template>

<script>

import myProfileHeader from '../components/controllers/header/profileHeader.vue'
import background from '../components/controllers/backgrounds/background_profile.vue'
import myInput1 from '../components/controllers/input1.vue'
import mySelect from '../components/controllers/select1.vue'
import myNav from '../components/controllers/leftNav.vue'

export default {
    name: 'signIn1',
    components: {
        myInput1,
        background,
        myProfileHeader,
        mySelect,
        myNav,
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
.backgroundProfile{
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
    max-height: 32.75em;
    margin: 0 auto;
    &__header{
        width: 86%;
        height: 3em;
        display: flex;
        justify-content: space-around;
        align-items: flex-end;
        border-bottom: 2px solid #E9E9E9;
        padding-bottom: 1.4em;
        margin-bottom: 2em;
    }
    &__header-text{
        font-family: "Roboto";
        font-weight: 700;
        font-size: 1em;
        letter-spacing: 0.24px;
        color: #01134E;
        text-decoration: none;
    }
    &__content{
        // max-height: 10em;
        width: 86%;
        display: flex;
        // flex-wrap: wrap;
        justify-content: space-between;
    }
    &__column-text{
        font-family: "Roboto";
        font-weight: 500;
        font-size: 0.75em;
        letter-spacing: 1px;
        color: #546087;
        text-transform: uppercase;
        margin: 2em 0 0 0;
    }

}
.input1Prof{
    width: 19.5em;
}

.btn-changePhoto{
    border: none;
    background-color: #fff;
    font-family: "Roboto";
    // font-weight: 700;
    font-size: 0.8em;
    letter-spacing: 0.24px;
    padding-left:1.3em;
}

.mg-top-0{
    margin-top: 0;
}

.active-line1{
    position: absolute;
    display: flex;
    top: 3.9em;
    left: 0em;
    max-width: 30em;
    background-color: #2a74db;
    border: solid #2a74db 1px;
    z-index: 10;
}

@media (min-width: 1200px) {
    .profileWrapper{
        width: 100%;
        height: 100%;
    }
    .active-line1{
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
    }
    // .profileWrapper__avatar{
    //     width: 30vw;
    // }
    .input1Prof{
        width: 80%;
    }
    .active-line1{
        width: 42.5%;
    }
    .backgroundProfile{
        width: 90%;
        height: 70%;
    }
}

@media (max-width: 1350px){
    .profileWrapper{
        // margin-left: 2em;
        width: 70%;
        height: 70%;
        &__content{
            width: 80%;
        }
    }
    .active-line1{
        width: 42.5%;
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
    .profileWrapper__avatar{
        width: 70vw;
    }
    .input1Prof{
        width: 65%;
    }
}


</style>