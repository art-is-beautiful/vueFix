<template>
<div>
    <button class="myButton1">{{ button1_text }}</button>
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
    cursor: pointer;
    &::after{
        border: none;
    }
}
</style>