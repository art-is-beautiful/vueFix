<template>
    <div class="signTopText">
    {{signTopText}}
    </div> 
</template>

<script>
export default {
    name: "signTopText",
    props: {
        signTopText: String
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2&display=swap');

.signTopText{
    font-family: 'Exo 2';
    font-size: 1.75em;
    font-weight: 600;
    font-style: normal;
    color: #002396;
    margin-bottom: 0.75em;
}

</style>