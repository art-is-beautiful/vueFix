<template>
    <div>
        <myNav></myNav>
        <myHeader headerFirstText="Home" headerSecondText="My profile" headerThirdText="Results"></myHeader>
        <background class="background1"></background>
        <div class="profileWrapper">
            <div class="wrapper">
                <div class="profileWrapper__column">
                    <div class="profileWrapper__m-w">
                        <h3 class="profileWrapper__column-text">COUNTRY</h3>
                        <mySelect class="max-w" optionOne="Ukraine" optionTwo="USA" optionThree="UK" optionFour="France"></mySelect>
                        <h3 class="profileWrapper__column-text">SEARCH</h3>
                        <myInput1 input1_type="text" class="input-w" input1_placeholder="Name" />
                        <h3 class="profileWrapper__column-text">CATEGORY </h3>
                        <mySelect class="max-w" optionOne="Category 1" optionTwo="Category 2" optionThree="None" optionFour="anonim"></mySelect>
                        <h3 class="profileWrapper__column-text">SERVICE</h3>
                        <mySelect class="max-w" optionOne="3 Services" optionTwo="USA" optionThree="UK" optionFour="France"></mySelect>
                        <h3 class="profileWrapper__column-text">PERIOD</h3>
                        <myInput1 input1_type="date" class="input-w mg-bottom-2" input1_placeholder="Name" value="2020-03-14" min="2019-01-01" max="2025-12-31" />
                        <myButton class="myButton1" button1_text="SEARCH"/>
                    </div>
                </div>
                
            <div class="contentWrapper2">
                <formHeader></formHeader>
                <gMap></gMap>
                <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyCpg_bVTl4WhiOION5V-wYT8OGhYg6uHTM"></script> -->
            </div>

            </div>

        </div> 
    
    </div>   
</template>

<script>

import myHeader from '../components/controllers/header/profileHeader.vue'
import background from '../components/controllers/backgrounds/background_profile.vue'
import myInput1 from '../components/controllers/input1.vue'
import mySelect from '../components/controllers/select1.vue'
import myNav from '../components/controllers/leftNav.vue'
import myButton from '../components/controllers/button1.vue'
import formHeader from '../components/controllers/header/resultsBgHeader.vue'
import gMap from '../components/component/gmap.vue'

export default {
    name: 'signIn1',
    components: {
        myInput1,
        background,
        myHeader,
        mySelect,
        myNav,
        myButton,
        formHeader,
        gMap,
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
.background1{
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
    
    &__column{
        max-width: 17.5em;
        border-right: 1px solid #E7EAF5;
    }
    &__m-w{
        max-width: 15.5em;
    }
    &__column-text{
        font-family: "Roboto";
        font-weight: 500;
        font-size: 0.75em;
        letter-spacing: 1px;
        color: #546087;
        text-transform: uppercase;
        margin: 2em 0 -0.5em 0;
    }

}
.input-w{
    max-width: 16.7em;
    max-height: 2.0em;
}
.myButton1{
    // margin-top: 1em;
    max-width: 17.7em;
}
.wrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
}
.contentWrapper2{
    position: absolute;
    top: 50%;
    left: 65%;
    transform: translate(-50%, -60%);
    max-height: 30em;
    max-width: 50em;
}
.m-w{
    max-width: 100%;
}

.mg-top-0{
    margin-top: 0;
}
.mg-bottom-2{
    margin-bottom: 2em;
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
   
    .background1{
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
    .background1{
        max-height: 69vh;
        height: 100%;
    }
    
}
@media (max-height: 750px){
    .background1{
        max-height: 85vh;
        height: 100%;
    }
    
}


</style>