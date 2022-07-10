<template>
  <NavbarVue></NavbarVue>
  <RouterView />
</template>

<script>
import NavbarVue from './components/Navbar.vue'
export default{
  components:{
    NavbarVue
  }
}
</script>


<style>
@import "https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma.min.css";

html{
  background: #f2f3f5;
}


</style>
