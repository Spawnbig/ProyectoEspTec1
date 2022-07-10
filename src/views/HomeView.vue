<template>
  <CrearUsuario v-if="!vistaLogin" @cambiarVista="cambiarVista"/>
  <Login v-if="vistaLogin" @cambiarVista="cambiarVista"/>
</template>

<script >
import CrearUsuario from "../components/CrearUsuario.vue";
import Login from "../components/Login.vue";

export default {
  components:{CrearUsuario,Login},
  data(){
    return {
      vistaLogin : true,
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