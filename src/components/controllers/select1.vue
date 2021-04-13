<template>
    <div class="dropdown">
        <select name="choice-header" id="dropdownId" class="dropdown__select" onchange="javascript:handleSelect(this)">
            <option value="account" selected>{{optionOne}}</option>
            <option value="settings">{{optionTwo}}</option>
            <option value="about">{{optionThree}}</option>
            <option value="contact">{{optionFour}}</option>
        </select>
    </div>
</template>

<script>
export default {
    props:{
        optionOne: String,
        optionTwo: String,
        optionThree: String,
        optionFour: String,
    }
}
</script>

<style lang="scss">

body{
    font-size: 16px;
}

.dropdown__select{
    width: 100%;
    height: 3.408em;
    border: 2px solid #F2F2F2;
    border-radius: 2px;
    margin-top: 23px;
    padding: 6px 8px 6px 8px;
    font-size: 0.85em;
    font-style: normal;
    font-weight: normal;
    line-height: 1em;
    background-color: #FCFCFC;
}

</style>