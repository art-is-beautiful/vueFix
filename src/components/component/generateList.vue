<template>
    <div class="cardWrapper" 
        v-if="(mycountry === ''|| mycountry ==='Select country') && (mycategory === '' || mycategory === 'Select your role') && additionalCategory.length < 1"
     > 
        <div class="card" v-for="user in users" :key="user.id" > 
            <img class="card__img" :src="user.photo" alt="avatar"/>
            <section class="card__info"> 
              <h3 class="card__nickname">{{user.fname}} {{user.lname}} </h3>
              <p class="card__text">{{user.email}} </p>
              <p class="card__text-main">Role:  <span class="card__text"> {{user.mycategory }} </span></p>
              <p class="card__text-main">Country:  <span class="card__text">{{user.country}}</span></p>
            </section>
        </div>
    </div>  
    <div class="cardWrapper" v-else-if="mycountry" >
        <div class="card" v-for="user in users2" :key="user.id" > 
            <img class="card__img" :src="user.photo" alt="avatar"/>
            <section class="card__info"> 
              <h3 class="card__nickname">{{user.fname}} {{user.lname}} </h3>
              <p class="card__text">{{user.email}} </p>
              <p class="card__text-main">Role:  <span class="card__text"> {{user.mycategory}} </span></p>
              <p class="card__text-main">Country:  <span class="card__text">{{user.country}}</span></p>
            </section>
        </div>
    </div>  
    <div class="cardWrapper" v-else-if="mycategory" style="z-index: 10" >
        <div class="card" v-for="user in users3" :key="user.id" > 
            <img class="card__img" src="../../../public/img/card_img_1.svg" alt="avatar"/>
            <section class="card__info"> 
              <h3 class="card__nickname">{{user.fname}} {{user.lname}} </h3>
              <p class="card__text">{{user.email}} </p>
              <p class="card__text-main">Role:  <span class="card__text"> {{user.mycategory}} </span></p>
              <p class="card__text-main">Country:  <span class="card__text">{{user.country}}</span></p>
            </section>
        </div>
    </div>  
    <!-- <div class="cardWrapper" v-else >
        <div class="card" v-for="user in users1" :key="user.id" > 
            <img class="card__img" src="../../../public/img/card_img_1.svg" alt="avatar"/>
            <section class="card__info"> 
              <h3 class="card__nickname">{{user.fname}} {{user.lname}} </h3>
              <p class="card__text">{{user.email}} </p>
              <p class="card__text-main">Role:  <span class="card__text"> {{user.mycategory}} </span></p>
              <p class="card__text-main">Country:  <span class="card__text">{{user.country}}</span></p>
            </section>
        </div>
    </div>  -->
    <myButton @click="btnSearch" class="myButtonSearch" button1_text="SEARCH"></myButton>
</template>

<script>
import apiService from '../../helpers/api';

import myButton from '../controllers/button1'

export default {
    name:"generateList",
    props: {
        mycountry: {
            type: String,
            default: '',
        },
        myname: {
            type: String,
            default: '',
        },
        mycategory: {
            type: String,
            default: '',
        }
    },
    components: {
        myButton,
    },
    data() {
      return {
        users: [{id: 1, fname: '', lname: '', username: '', email: '', mycategory: '', country: '', photo: ''}],
        users2: [{id: 1, fname: '', lname: '', username: '', email: '', mycategory: '', country: this.mycountry, photo: ''}],
        users3: [{id: 1, fname: '', lname: '', username: '', email: '', mycategory: this.mycategory, country: '', photo: ''}],
        additionalCategory: '',
      }
      
    },
    beforeCreate() {
      apiService.get("users/users-list-inner")
        .then((res) => {
          console.log(res)
          this.users = res.data.users;
        })
        .catch((err) => {
          console.log(err);
        })
    },
    methods: {
        //apiService.get() - select country by props
        async btnSearch() {   
            if(this.mycountry){
                // this.mycategory == ''
                // console.log('myCountry: ' + this.mycountry)
                await apiService.get(`users/users-country/${this.mycountry}`)
                    .then((res) => {
                      console.log(res.data.users)
                      this.users2 = res.data.users;
                    })
                    .catch((err) => {
                      console.log(err);
                    })
            }
            if(this.mycategory){
                // this.mycountry == ''
                // console.log(this.mycategory)
                await apiService.get(`users/users-role/${this.mycategory}`)
                    .then((res) => {
                      console.log(res.data.users)
                      this.users3 = res.data.users;
                      this.additionalCategory = 'True'
                    })
                    .catch((err) => {
                      console.log(err);
                    })
            }
        }
        
    },
}
</script>
<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

body{
    font-size: 16px;
}
.cardWrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin-top: 2em;
    margin-right: 3em;
    max-width: 47em;
    height: 30em;
    overflow-y: auto;
    overflow-x: hidden;
}
.card{
    max-width: 20.625em;
    max-height: 8em;
    background-color: #FFFFFF;
    border: 1px solid rgba(237, 237, 237, 0.2);
    box-sizing: border-box;
    box-shadow: -2px 9px 30px rgb(23 31 76 / 2%);
    border-radius: 2px;
    margin-bottom: 1em;
    margin-right: 0.6em;
    &__img{
        border-radius: 50%;
        width: 5em;
        height: 5em;
        margin-top: 1.2em;
        margin-left: 1.2em;
    }
    &__info{
        width: 15em;
        height: 8em;
        margin-top: -4.7em;
        margin-left: 7.3em;
    }
    &__nickname{
        font-family: "Roboto";
        font-weight: 500;
        font-size: 16px;
        letter-spacing: -0.1px;
        color: #01134E;
        margin-bottom: 10px;
    }
    &__text{
        font-family: "Roboto";
        font-weight: 300;
        font-size: 12px;
        letter-spacing: -0.0467px;
        color: #000000;
        margin-bottom: 7px;
    }
    &__text-main{
        font-family: "Roboto";
        font-weight: 400;
        font-size: 12px;
        letter-spacing: -0.0467px;
        color: #01134E;
        margin-bottom: 7px;
    }
}
.myButtonSearch{
    // margin-top: 1em;
    max-width: 17.7em;
    position: absolute;
    top: 31.35em;
    left: -20em;
    // top: -2.65em;
    // left: -20.5em;
}
@media (min-width: 1200px) {
 .myButtonSearch{
        width: 100%;
    }   
}

@media (max-width: 1240px){
    .card{
        width: 15em;
    }
    .myButtonSearch{
        // width: 100%;
        width: 100%;
    }
}

</style>