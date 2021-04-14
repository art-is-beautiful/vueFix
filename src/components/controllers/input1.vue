<template>
    <input :type="input1_type" class="input1" v-model="message" v-on:input="$emit('change-my-input', message)" :placeholder="input1_placeholder"/>
</template>

<script>
export default {
    props: {
        input1_placeholder: String,
        input1_type: String
    },
    data() {
        return {
            message: ''
        }
    }
}
</script>

<style lang="scss">
body{
    font-size: 16px;
}
.input1{
    width: 100%;
    height: 2.23125em;
    border: 2px solid #F2F2F2;
    border-radius: 2px;
    margin-top: 23px;
    padding: 6px 8px 6px 8px;
    font-size: 0.85em;
    font-style: normal;
    font-weight: normal;
    line-height: 1em;
    background-color: #FCFCFC;
    &:focus{
       outline: none;
       border-left: 2px solid #2a74db;
    }
}

</style>