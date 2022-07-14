<template>
  <NavbarVue :login="login"></NavbarVue>
  <DatosUsuario v-if="!vistaGrafico" :username="dataUser.username" :sessions="dataUser.sessions" @cambiarVista="cambiarVista"/>
  <Grafico v-if="vistaGrafico" :dataUser="dataUser" @cambiarVista="cambiarVista"/>
</template>

<script>
import NavbarVue from '../components/Navbar.vue'
import DatosUsuario from '../components/DatosUsuario.vue'
import Grafico from '../components/Grafico.vue'
//import axios from 'axios'
import usuariosDB from '../Json/usuarios.json'

export default {
  components:{DatosUsuario,Grafico,NavbarVue},
  data(){
    return{
      dataUser: '',
      vistaGrafico: false,
      username:'',
      login: true
    }
  },
  created(){
    // Llamar a la API
    //let url = "https://7qak3a37b4dh7kisebhllubdxq0dnehm.lambda-url.us-east-1.on.aws/"
    this.username = JSON.parse(localStorage.getItem('user')).username
    this.obtenerDatos(usuariosDB)
    //console.log(userName.username);

    /*axios.get(url).then(response => {
     console.log(response.data);
    });*/
   
  },
  methods:{
    cambiarVista(){
      this.vistaGrafico = (this.vistaGrafico) ? false : true;
    },
    obtenerDatos(db){
      db.forEach(e => {      
        if (e.username == this.username){
          this.dataUser = e;
        }
      });
    }
  }
}
</script>