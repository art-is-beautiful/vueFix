<template>
    <div>
        <nav>
            <div class="navWrapper">
            <a href="/signIn1" class="navWrapper__logo">
                <img src="../../../public/img/leftnav/Vector_navLogo.svg" alt="">
            </a>
            <section class="navWrapper__menu">
                <a href="/results1" class="navWrapper__menu-item">
                    <svg width="18" height="18" viewBox="0 0 18 18"  class="menuElem" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M17.5595 15.4322L13.6491 11.5219C13.6283 11.5011 13.6039 11.4866 13.5822 11.4672C14.3516 10.3001 14.8007 8.90292 14.8007 7.40043C14.8007 3.31327 11.4874 0 7.40036 0C3.31327 0 0 3.31327 0 7.40036C0 11.4874 3.31319 14.8007 7.40028 14.8007C8.90285 14.8007 10.2999 14.3516 11.4671 13.5822C11.4864 13.6038 11.5009 13.6282 11.5217 13.649L15.4322 17.5595C16.0196 18.1468 16.972 18.1468 17.5595 17.5595C18.1468 16.972 18.1468 16.0197 17.5595 15.4322ZM7.40036 12.2352C4.73004 12.2352 2.5654 10.0706 2.5654 7.40036C2.5654 4.73004 4.73011 2.5654 7.40036 2.5654C10.0705 2.5654 12.2352 4.73011 12.2352 7.40036C12.2352 10.0706 10.0705 12.2352 7.40036 12.2352Z" />
                    </svg>
                </a>
                <br>
                <a href="/profile1" class="navWrapper__menu-item">
                    <svg width="18" height="19" viewBox="0 0 18 19" class="menuElem" xmlns="http://www.w3.org/2000/svg">
                    <path d="M9.00024 9.59594C11.229 9.59594 13.0361 7.4478 13.0361 4.79795C13.0361 1.12334 11.2291 0 9.00024 0C6.77125 0 4.96442 1.12334 4.96442 4.79795C4.96446 7.4478 6.7713 9.59594 9.00024 9.59594Z" fill="white" />
                    <path d="M17.912 16.6587L15.8758 11.9999C15.7827 11.7867 15.6191 11.6099 15.4155 11.5022L12.2555 9.83141C12.1858 9.79464 12.1015 9.80179 12.0388 9.84996C11.1451 10.5366 10.0942 10.8995 9.00004 10.8995C7.90565 10.8995 6.8549 10.5366 5.96116 9.84996C5.89834 9.80179 5.81396 9.79464 5.74428 9.83141L2.58455 11.5022C2.38083 11.6099 2.2174 11.7866 2.12418 11.9999L0.088054 16.6587C-0.0523244 16.9799 -0.0235536 17.3474 0.16504 17.6419C0.353546 17.9365 0.672575 18.1123 1.01848 18.1123H16.9815C17.3274 18.1123 17.6465 17.9364 17.835 17.6419C18.0235 17.3474 18.0524 16.9797 17.912 16.6587Z" fill="white" />
                    </svg>
                </a>
                <br>
                <a href="#" class="navWrapper__menu-item">
                    <svg width="20" height="17" viewBox="0 0 20 17" class="menuElem" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1.9196 5.31729C2.1726 5.49863 2.93522 6.03719 4.20752 6.9327C5.47985 7.82821 6.45455 8.51773 7.13164 9.0013C7.20603 9.05431 7.36408 9.16953 7.60585 9.34713C7.84767 9.52485 8.0486 9.66847 8.20848 9.77801C8.36848 9.88752 8.5619 10.0104 8.78894 10.1464C9.0159 10.2822 9.22985 10.3844 9.43074 10.4521C9.63167 10.5203 9.81766 10.5541 9.98876 10.5541H9.99998H10.0112C10.1823 10.5541 10.3684 10.5203 10.5693 10.4521C10.7702 10.3844 10.9843 10.2821 11.2111 10.1464C11.4379 10.0102 11.6314 9.88748 11.7914 9.77801C11.9514 9.66847 12.1521 9.52485 12.394 9.34713C12.6358 9.16937 12.794 9.05431 12.8684 9.0013C13.5528 8.51773 15.294 7.28961 18.0915 5.31705C18.6347 4.93179 19.0884 4.46693 19.453 3.92277C19.8178 3.37885 20 2.80824 20 2.21127C20 1.71242 19.8232 1.28539 19.4697 0.930225C19.1163 0.574983 18.6977 0.397461 18.2142 0.397461H1.78564C1.21276 0.397461 0.771891 0.593922 0.463111 0.986845C0.15437 1.37985 0 1.87108 0 2.4605C0 2.93661 0.20468 3.45254 0.613846 4.00797C1.02297 4.56345 1.45837 4.99993 1.9196 5.31729Z" fill="white" />
                    <path d="M18.8838 6.5299C16.4435 8.20748 14.5906 9.51124 13.3259 10.4409C12.9018 10.7582 12.5578 11.0059 12.2936 11.1833C12.0294 11.3609 11.678 11.5423 11.2389 11.7274C10.8 11.9127 10.3909 12.0051 10.0114 12.0051H10H9.9888C9.60934 12.0051 9.20006 11.9127 8.76115 11.7274C8.32224 11.5423 7.97061 11.3609 7.70647 11.1833C7.44241 11.0059 7.09826 10.7582 6.6742 10.4409C5.66968 9.69278 3.82075 8.38894 1.12734 6.5299C0.703129 6.24291 0.327387 5.91395 0 5.5437V14.5443C0 15.0434 0.174776 15.4702 0.524523 15.8254C0.874192 16.1807 1.29465 16.3583 1.78575 16.3583H18.2144C18.7053 16.3583 19.1258 16.1807 19.4755 15.8254C19.8253 15.47 20 15.0434 20 14.5443V5.5437C19.68 5.90629 19.3081 6.23525 18.8838 6.5299Z" fill="white" />
                    </svg>
                </a>
                <br>
                <a href="#" class="navWrapper__menu-item">
                    <svg width="20" height="21" viewBox="0 0 20 21" class="menuElem" xmlns="http://www.w3.org/2000/svg">
                        <path d="M14.9792 4.34873C15.7576 4.34873 16.388 3.72254 16.388 2.94421V1.47277C16.388 0.693732 15.7576 0.0654297 14.9792 0.0654297C14.2016 0.0654297 13.5733 0.693732 13.5733 1.47277V2.94421C13.5733 3.72254 14.2016 4.34873 14.9792 4.34873Z" />
                        <path d="M19.9796 2.50064H17.1473V3.21699C17.1473 4.39752 16.1872 5.3604 15.0039 5.3604C13.8191 5.3604 12.8619 4.39752 12.8619 3.21699V2.50064H7.14447V3.21699C7.14447 4.39752 6.18441 5.3604 5.00106 5.3604C3.81771 5.3604 2.85905 4.39682 2.85905 3.21629V2.50064L1.59539e-09 2.46472V20.3572H1.42918H18.5736L20 20.353L19.9796 2.50064ZM18.5736 18.9323H1.42918V7.5017H18.5736V18.9323Z" />
                        <path d="M4.97838 4.34873C5.75671 4.34873 6.38572 3.72254 6.38572 2.94421V1.47277C6.38572 0.693732 5.75742 0.0654297 4.97838 0.0654297C4.20145 0.0654297 3.57245 0.693732 3.57245 1.47277V2.94421C3.57245 3.72254 4.20145 4.34873 4.97838 4.34873Z" />
                        <path d="M9.39983 9.03589H7.14935V11.0229H9.39983V9.03589Z"  />
                        <path d="M5.87792 9.03589H3.62744V11.0229H5.87792V9.03589Z"  />
                        <path d="M13.0428 9.03589H10.7895V11.0229H13.0428V9.03589Z"  />
                        <path d="M16.416 9.03589H14.1655V11.0229H16.416V9.03589Z"  />
                        <path d="M9.39983 12.3356H7.14935V14.3212H9.39983V12.3356Z"  />
                        <path d="M13.0428 12.3356H10.7895V14.3212H13.0428V12.3356Z"  />
                        <path d="M16.416 12.3356H14.1655V14.3212H16.416V12.3356Z"  />
                        <path d="M9.39983 15.7013H7.14935V17.6869H9.39983V15.7013Z"  />
                        <path d="M5.82152 12.3356H3.57245V14.3212H5.82152V12.3356Z"  />
                        <path d="M5.82152 15.7013H3.57245V17.6869H5.82152V15.7013Z"  />
                        <path d="M13.0428 15.7013H10.7895V17.6869H13.0428V15.7013Z"  />
                        <path d="M16.416 15.7013H14.1655V17.6869H16.416V15.7013Z"  />
                        </svg>

                </a>
            </section>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    props:{

    }
}
</script>

<style lang="scss">

body{
    font-size: 16px;
}

nav{
    position: absolute;
    max-width: 5em;
    height: 100vh;
    background-color: #01134E;
    // margin: 0 auto;

}
.navWrapper{
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    max-height: 27em;
    &__logo{
        margin-top: 1em;
    }
    &__menu{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        // margin-top: 3em;
        align-items: flex-end;
    }
    &__menu-item{
        max-width: 5em;
        display: flex;
        flex-wrap: wrap;
        justify-content: center; 
        fill: white;
    }
}

.menuElem{
    fill: white;
    fill-opacity: 0.5;
    &:hover{
       fill-opacity: 1; 
    }
}

@media (min-width: 1350px) {
    nav{
        width: 90%;
    }
    .navWrapper{
        height: 100%;

        &__menu-item{
            width: 100%;
        }
    }
    
}
@media (max-width: 1350px) {
    nav{
        width: 90%;
    }
    .navWrapper{
        height: 100%;
        &__menu-item{
            width: 100%;
        }
    }
}
@media (max-width: 850px) {
    nav{
        visibility: hidden;
    }

}


</style>