<template>
    <div class="newDropdown">
        <p 
            class="newDropdown__title"
            @click="areOptionsVisible = !areOptionsVisible"
        ><span> {{ selectedName }} </span> <span class="specSelect"> v </span></p>
        <div 
            class="newDropdown__options"
            v-if="areOptionsVisible"
        >
            <p
                v-for="option in options"
                :key="option.value"
                @click="selectOption(option)"
            >
            {{option.name}}
            </p>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        options: {
            type: Array,
            default(){
                return []
            }
        },
        selectedName: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            areOptionsVisible: false,
        }
    },
    methods: {
        selectOption(option) {
            this.$emit('select', option);
            this.areOptionsVisible = false;
        }
    }
}
</script>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Exo+2:wght@300;400;500;600;700&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap');


body{
    font-size: 16px;
}

.newDropdown p {
    margin: 0;
}

.newDropdown{
    position: relative;
    width: 100%;
    height: 2.6466em; 
    border-radius: 2px;
    margin-top: 23px;
    font-size: 1em;
    font-family: 'Arial';
    font-style: normal;
    font-size: 1em;
    // font-weight: 400;
    line-height: 19px;
    letter-spacing: 0.4px;
    background-color: #FCFCFC;
    cursor: pointer;
    &__title{
        display: flex;
        justify-content: space-between;
        align-items: center;
        border: 2px solid #F2F2F2;
        height: 100%; 
        padding: 0px 8px 0px 8px; 
        font-size: 0.85em;
    }
    &__options{
        width: 95%;
        border: 2px solid #F2F2F2;
        padding-left: 6px;
        background: #F2F2F2;
        
    }
    &__options p:hover {
        background: #e7e7e7
    }
}
.specSelect {
    font-size: 10px;
    font-style: bold;
}

</style>