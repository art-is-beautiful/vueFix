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
                <a href="/profile2" class="profileWrapper__header-text">ACCOUNT INFORMATION</a>
            </header>
            <div class="profileWrapper__content" >
                <div class="profileWrapper__avatar">
                    <img :src="myuser.photo" class="myAvatar" alt="avatar">
                    <br>
                    <input 
                        class="btn-changePhoto" 
                        style="display:none"
                        value="Chhos" type="file" 
                        @change="onFileSelected"
                        ref="inputFile"
                    />
                    <button @click="$refs.inputFile.click()" class="btn-changePhoto" style="margin-left: 2em; margin-top:1em;">
                        <img src="../../public/img/Vector_changePhoto.svg">
                        Change photo
                    </button>
                </div>
                <div class="profileWrapper__column1">
                    <h3 class="profileWrapper__column1-text mg-top-0">First Name </h3>
                    <myInput1 input1_type="text" class="input1 input1Prof" :input1_placeholder='myuser.fname'  v-on:change-my-input="getFirstName"  />
                    <h3 class="profileWrapper__column1-text">Gender . 
                        <i style="font-size: 1em; text-transform: none;">You are a {{myuser.gender}} .</i> 
                        <br>
                        <i v-if="myuser.gender == 'None' || myuser.gender == ''" style="font-size: 0.8em; text-transform: none; padding-bottom: -10em; color: #f64b4b;"> Please choose your gender .</i> 
                    </h3>
                    <mySelect2
                        :options="gender"
                        @select="optionSelect"
                        :selectedName="mySelectGender"
                        v-if="myuser.gender == 'None' || myuser.gender == ''"   
                    >
                    </mySelect2>
                    <mySelect2
                        :options="gender"
                        @select="optionSelect"
                        :selectedName="mySelectGender"
                        v-else
                    >
                    </mySelect2>
                    <!-- <mySelect class=""  v-model="gender_event" v-if="myuser.gender == 'None'" style="margin-top: -0.65em">
                        
                    </mySelect>
                    <mySelect class=""  optionFour="anonim" @change="getGender($event)" v-else>
                        
                    </mySelect>  -->
                    <h3 class="profileWrapper__column1-text">Country . 
                        <i style="font-size: 1em; text-transform: none;">You are from {{myuser.country}} .</i> 
                        <br>
                        <i v-if="myuser.country == 'None' || myuser.country == ''" style="font-size: 0.8em; text-transform: none; padding-bottom: -10em; color: #f64b4b;"> Please select your country .</i> 
                    </h3>
                    <mySelect2
                        :options="country"
                        @select="selectCountry"
                        :selectedName="mySelectCountry" 
                        v-if="myuser.country == 'None' || myuser.country == ''" 
                    ></mySelect2>
                    <mySelect2
                        :options="country"
                        @select="selectCountry"
                        :selectedName="mySelectCountry" 
                        v-else
                    ></mySelect2>
                   <!-- <mySelect class=""  @change="getCountry($event)" v-if="myuser.country == 'None' || myuser.country == ''" style="margin-top: -0.65em"></mySelect>
                   <mySelect class=""  @change="getCountry($event)" v-else></mySelect> -->
                </div>
                <div class="">
                    <h3 class="profileWrapper__column1-text mg-top-0">Last Name </h3>
                    <myInput1 input1_type="text" class="input1 input1Prof" :input1_placeholder="myuser.lname" v-on:change-my-input="getLastName" />
                    <h3 class="profileWrapper__column1-text">Mobile phone 
                        <br>
                        <i v-if="myuser.phone_number == 'None' || myuser.phone_number == ''" style="font-size: 0.8em; text-transform: none; padding-bottom: -10em; color: #f64b4b;"> Please write your number .</i> 
                    </h3>
                    <myInput1 input1_type="text" class="input1 input1Prof" :input1_placeholder="myuser.phone_number" v-if="myuser.phone_number == ''" v-on:change-my-input="getMobPhone"/>
                    <myInput1 input1_type="text" class="input1 input1Prof" :input1_placeholder="myuser.phone_number" v-else v-on:change-my-input="getMobPhone"/>
                    <h3 class="profileWrapper__column1-text">Category. 
                        <i style="font-size: 1em; text-transform: none;">You are a {{myuser.mycategory}}.</i> 
                        <br>
                        <i v-if="myuser.mycategory == '' || myuser.mycategory == 'None'" style="font-size: 0.8em; text-transform: none; padding-bottom: -10em; color: #f64b4b;">Please chose your role.</i> 
                    </h3>
                    <div class="categoryChoice">
                        <mySelect2
                        :options="role"
                        @select="selectRole"
                        :selectedName="mySelectRole" 
                        v-if="myuser.mycategory == 'None' || myuser.mycategory == ''" 
                        style="max-width: 10em;"
                    ></mySelect2>
                    <mySelect2
                        :options="role"
                        @select="selectRole"
                        :selectedName="mySelectRole" 
                        v-else
                        style="max-width: 10em;"
                    ></mySelect2>
                        <!-- <mySelect class="" optionOne="Choose your role" optionTwo="Teacher" optionThree="Student" optionFour="None" v-if="myuser.mycategory == ''" @change="getCategory($event)" style="max-width: 10em; margin-top: -0.65em"></mySelect> 
                        <mySelect class="" optionOne="Choose your role" optionTwo="Teacher" optionThree="Student" optionFour="None" v-else @change="getCategory($event)" style="max-width: 10em"></mySelect> -->
                        <myButton1 button1_text="Done" @click="btnChooseCategory" v-if="myuser.mycategory == ''" style="width: 6em; margin-top: 1.5em;  "/>
                        <myButton1 button1_text="Done" @click="btnChooseCategory" v-else style="width: 6em; margin-top: 1.5em; "/>
                    </div>
                 
                </div>
            </div>
        </div> 
    
    </div>   
</template>

<script>

import myProfileHeader from '../components/controllers/header/profileHeader.vue'
import background from '../components/controllers/backgrounds/background_profile.vue'
import myInput1 from '../components/controllers/input1.vue'
// import mySelect from '../components/controllers/select1.vue'
import mySelect2 from '../components/controllers/select2.vue'
import myNav from '../components/controllers/leftNav.vue'
import myButton1 from '../components/controllers/button1.vue'

import apiService from '../helpers/api';
// import api from '../helpers/api'


export default {
    name: 'signIn1',
    components: {
        myInput1,
        background,
        myProfileHeader,
        // mySelect,
        mySelect2,
        myNav,
        myButton1,
    },
    props: {
        
    },
    data() {
      return {
        gender: [
            {name: "Mr", value: 1},
            {name: "Mrs", value: 2},
            {name: "Miss", value: 3},
            {name: "Ms", value: 4},
        ],
        country: [
            {name: "Ukraine", value: 1},
            {name: "USA", value: 2},
            {name: "UK", value: 3},
            {name: "France", value: 4},
        ],
        role: [
            {name: "Teacher", value: 1},
            {name: "Student", value: 2},
        ],
        mySelectGender: 'Select your gender',
        mySelectCountry: 'Select your country',
        mySelectRole: 'Select your role',
        selectedFile: null,
        myuser: {
            id: '',
            fname: '',
            lname: '',
            username: '',
            email: '',
            mycategory: '',
            phone_number: '',
            gender: '',
            country: '',
            photo: '',
        },
        nameUpdate: {
            id: '',
            fname: '',
            lname: '',
        },
        categoryUpdate: {
            mycategory: '',
            users_id: '',
            phone_number: '',
            gender: '',
            country: '',
        },
        // mynewphoto: {
        //     photo: ''
        // },
        photo: null,
      }
    },
    beforeCreate() {
        apiService.get("users/profile")
            .then((res) => {
              this.myuser.id = res.data.user.id;
              this.nameUpdate.id = res.data.user.id;
              this.categoryUpdate.users_id = res.data.user.id;
              this.myuser.fname = res.data.user.fname;
              this.myuser.lname = res.data.user.lname;
              this.myuser.username = res.data.user.username;
              this.myuser.email = res.data.user.email;
              this.myuser.photo = res.data.user.photo;
            //   console.log('my id: ' + this.myuser.id)
            })
            .catch((err) => {
              console.log(err);
            })
        setTimeout(()=>{
            apiService.get(`category/get-one/${this.myuser.id}`)
            .then((res) => {
                console.log(res.data)
                this.myuser.mycategory = res.data.mycategory
                this.myuser.phone_number = res.data.phone_number
                this.myuser.gender = res.data.gender
                this.myuser.country = res.data.country
            })
        }, 1000)
        
    },
    methods: {
        async btnChooseCategory(){
            // console.log('data...:', {...this.nameUpdate})
            // console.log('dataCategory...:', {...this.categoryUpdate})
            // console.log('myphoto:' + this.photo)
        await apiService.put('users/update', {...this.nameUpdate}) 
            .then(res => {
                console.log('ok');
                console.log(res.data);
            })
            .catch(err => {
                console.log('Updated names was failed ', err.response.data)
            });
        await apiService.put('category/update', {...this.categoryUpdate}) 
            .then(res => {
                console.log('ok');
                console.log(res.data); 
            })
            .catch(err => {
                console.log('Updated category was failed ', err.response.data)
            });
        
        await apiService.put("/users/photo", {'photo': this.photo})
            .then(() => {
                console.log('photo: ok');
                location.reload();
                // console.log(res);
            })
            .catch(err => {
                console.log('Updated photo was failed ', err.response.data)
            });
        },
        optionSelect(option) {
            this.mySelectGender = option.name;
            this.categoryUpdate.gender = option.name
        },
        selectCountry(option) {
            this.mySelectCountry = option.name;
            this.categoryUpdate.country = option.name;
        },
        selectRole(option) {
            this.mySelectRole = option.name;
            this.categoryUpdate.mycategory = option.name;
        },
        getFirstName(data) {
            this.nameUpdate.fname = data;
        },
        getLastName(data) {
            this.nameUpdate.lname = data;
        },
        // getGender:function(gender_event) {
        //     this.categoryUpdate.gender = gender_event;
        // },
        // getCountry:function(event) {
        //     this.categoryUpdate.country = event;
        // },
        getMobPhone(data) {
            this.categoryUpdate.phone_number = data;
        },
        // getCategory:function(event) {
        //     this.categoryUpdate.mycategory = event;
        // },
        onFileSelected(event) {
            this.selectedFile =  event.target.files[0];
             
            var file = event.target.files[0];
            var reader = new FileReader();
            reader.onloadend = () => {
                // console.log('Base63: ' + reader.result)
                // this.mynewphoto.photo = reader.result;
                this.photo = reader.result;
                // console.log({'photo': this.photo})
            }
            reader.readAsDataURL(file);
            
            
        },
        

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
    &__column1-text{
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
.myAvatar {
    // max-height: 8em;
    // max-width: 8em;
    border-radius: 50%;
    width: 8em;
    height: 8em;
    margin-top: 1.2em;
    margin-left: 2.2em;

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

.categoryChoice{
    display: flex;
    width: 100%;
    justify-content: space-between;
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
        width: 42.5%; //42.5
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
        width: 42.5%; //42.5
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