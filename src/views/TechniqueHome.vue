<template>
  <vuetable ref="vuetable"
    api-url="https://vuetable.ratiw.net/api/users"
    :fields="['name', 'email', 'birthdate']"
  ></vuetable>
</template>

<script>
  import Vuetable from 'vuetable-2/src/components/Vuetable'

  export default {
  name: "TechnIT",
  components: {
    Vuetable
  }
  
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>