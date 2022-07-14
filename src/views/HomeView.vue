<template>
  <NavbarVue :login="login"></NavbarVue>
  <CrearUsuario v-if="!vistaLogin" @cambiarVista="cambiarVista"/>
  <Login v-if="vistaLogin" @cambiarVista="cambiarVista"/>
</template>

<script >
import NavbarVue from '../components/Navbar.vue'
import CrearUsuario from "../components/CrearUsuario.vue";
import Login from "../components/Login.vue";

export default {
  components:{CrearUsuario,Login,NavbarVue},
  data(){
    return {
      vistaLogin : true,
      login: false
    }
  },
  methods:{
    cambiarVista(){
      this.vistaLogin = (this.vistaLogin) ? false : true
    }
  }
}

</script>


<style scoped>

</style>