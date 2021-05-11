<template>
  <div>
      <div class="content__admin"> 
        <header class="headerAdm"> 
          <button class="btn-adm-search" @click="btnSearchUser">  <img src="../../../public/img/Vector_admin_search.svg" alt="btn-search"/></button>
          <input class="headerAdm__search" type="text" placeholder="Type here to search..." v-model="username" />
    
        </header>
      </div>
      <section class="table"> 
        <header class="table__main bg-c-table"> 
          <p class="table__header-text">First Name </p>
          <p class="table__header-text">Last Name </p>
          <p class="table__header-text">Username </p>
          <p class="table__header-text">Status </p>
          <p class="table__header-text">Level </p>
          <p class="table__header-text">E-mail </p>
        </header>
        <div class="table__content-wrapper" v-if="username == null">
          <div class="table__main" v-for="user in users" :key="user.id"> 
            <p class="table__content-text">{{user.fname}} </p>
            <p class="table__content-text">{{user.lname}} </p>
            <p class="table__content-text">{{user.username}} </p>
            <p class="table__content-text">Completed</p>
            <div class="wrapperAdmin-select"> 
              <select class="table__content-text table__content-select" name="status">
                <option value="trash">Trash </option>
                <option value="silver">Silver </option>
                <option value="gold" selected="selected">Gold</option>
              </select>
            </div>
            <p class="table__content-text text-trans-lower">{{user.email}}</p>
          </div>
        </div>
        <div class="table__content-wrapper" v-else>
          <div class="table__main" v-for="user in users2" :key="user.id"> 
            <p class="table__content-text">{{user.fname}} </p>
            <p class="table__content-text">{{user.lname}} </p>
            <p class="table__content-text">{{user.username}} </p>
            <p class="table__content-text">Completed</p>
            <div class="wrapperAdmin-select"> 
              <select class="table__content-text table__content-select" name="status">
                <option value="trash">Trash </option>
                <option value="silver">Silver </option>
                <option value="gold" selected="selected">Gold</option>
              </select>
            </div>
            <p class="table__content-text text-trans-lower">{{user.email}}</p>
          </div>
        </div>
      </section>
  </div>
</template>

<script>
import apiService from '../../helpers/api';
export default {
    name: "admManage",
    data() {
      return {
        users: [{id: 1, fname: '', lname: '', username: '', email: ''}],
        users2: [{id: 1, fname: '', lname: '', username: '', email: ''}],
        
        username: null,    
      }
    },
    beforeCreate() {
      apiService.get("users/users-list")
        .then((res) => {
          this.users = res.data.users;
        })
        .catch((err) => {
          console.log(err);
        })
    },
    methods: {
      async btnSearchUser(){
        console.log(this.username);
        await apiService.get(`users/get-username/${this.username}`)
        .then((res) => {
          console.log(res.data.users);
          this.users2 = res.data.users;
        })
        .catch((err) => {
          console.log(err);
        })
      },
      // getUsername(data) {
      //   // console.log(data)
      //   this.username = data;
      // }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

body{
    font-size: 16px;
}
.headerAdm{
    width: 65em;
    margin-top: 40px;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-end;
    &__search{
        border: none;
        color: #252F48;
    }
}
.btn-adm-search{
    display: flex;
    align-self: center;
    border: none;
    background-color: #FFFFFF;
    border: none;
    border-radius: 2px;
}
.table{ 
    width: 62.5em;
    height: 27.125em;
    background: #FFFFFF;
    border: 1px solid #DAE4F2;
    box-sizing: border-box;
    box-shadow: -2px 9px 8px rgba(23, 31, 76, 0.03);
    border-radius: 4px;
    margin: 1.5em 0 0 3em;
    &__main{
        width: 100%;
        height: 42px;
        display: flex;
        justify-content: flex-start;
        border: 1px solid #EEF2F7;
        
    }
    &__header-text{
        width: 12.5em;
        margin: auto 0;
        text-transform: uppercase;
        color: #01134E;
        font-family: 'Roboto';
        font-weight: 500;
        font-size: 0.75em;
        letter-spacing: 0.6px;
        text-align: center;
    }
    &__content-wrapper{
        height: 88%;
        overflow-y: auto;
        overflow-x: hidden;
    }
    &__content-text{
        width: 11.03em;
        margin: auto 0;
        text-transform: capitalize;
        color: #222428;
        font-family: 'Roboto';
        font-weight: 300;
        font-size: 0.85em;
        letter-spacing: 0.6px;
        font-style: normal;
        text-align: center;
    }
    &__content-select{
         width: 75px;
        text-align-last: center;
        border: none;
        -webkit-text-size-adjust:initial;
        margin-left: 35px;
    }
}
.wrapperAdmin-select{
    width: 9.375em;
    margin: auto 0;
}

.text-trans-lower{
    text-transform:lowercase;
}

.bg-c-table{
    background: #F5F7FA;
}

</style>