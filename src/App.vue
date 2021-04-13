<template>
  <SignIn2 />
  <router-view />
</template>

<script>
import SignIn2 from './views/admin.vue'
export default {
  name: 'App',
  components: {
    SignIn2,
  }
}
</script>

<style lang="scss">

</style>
