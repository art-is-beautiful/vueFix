<template>
    <div class="headerBgWrapper">
        <div class="headerBgWrapper__first">
            <a href="results2" class="show__map-text">SHOW MAP</a>
            <img src="../../../../public/img/Vector__results_showmap.svg" alt="ico">
        </div>
        <div class="headerBgWrapper__second"> 
           <div class=""> 
             <input class="checkBox__round" type="checkbox" name="sortBy1"/>
             <label class="checkBox__text" for="sortBy1">by price </label>
           </div>
           <div class=""> 
             <input class="checkBox__round" type="checkbox" name="sortBy2"/>
             <label class="checkBox__text" for="sortBy2">by rating </label>
           </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "resultsBgHeader",
    props: {
        
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');

body{
    font-size: 16px;
}

.headerBgWrapper{
    margin-top: 1em;
    width: 50em;
    // width: 100%;
    height: 1em;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;


    &__first{
        width: 38em;
        // width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
    &__second{
        width: 10em;
        // width: 100%;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
    }
}

.checkBox__round{
    width: 18px;
    height: 18px;
    background-color: #FFFFFF;
    border-radius: 50%;
    vertical-align: middle;
    border: 1px solid #F0F1F3;
    -webkit-appearance: none;
    outline: none;
    cursor: pointer;
    margin-right: 5px;
    &:checked{
        background-color: #0AD69C;
        content: url(../../../../public/img/Vector__checkbox_round_checked.svg);
        border: 5px solid #F0F1F3;
        // vertical-align: middle;
        // -webkit-appearance: none;
        // outline: none;
        // cursor: pointer;
        margin-right: 5px;
    }
}

.checkBox__text{
    font-family: "Roboto";
    font-weight: 300;
    font-size: 14px;
    letter-spacing: -0.4px;
    color: #000000;
}
.show__map-text{
    font-family: "Roboto";
    font-weight: 500;
    font-size: 0.75em;
    letter-spacing: 0.28px;
    text-transform: uppercase;
    color: #01134E;
    text-decoration: none;
    margin: auto 0;
}


// @media (min-width: 1200px) {
//     .headerBgWrapper{
//         width: 100%;
//         &__first{
//             width: 100%;
//         }
//         &__second{
//             width: 100%;
//         }
//     }
// }
@media (max-width: 1200px){
    .headerBgWrapper{
        width: 100%;
        &__first{
            width: 100%;
        }
        &__second{
            width: 100%;
        }
    }
}

@media (max-width: 1350px){
    .headerBgWrapper{
        width: 80%;
        &__first{
            width: 60%;
        }
        &__second{
            width: 38%;
            margin-left: .3em;
        }
    }
}
</style>
