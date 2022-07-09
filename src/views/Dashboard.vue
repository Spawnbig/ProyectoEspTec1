<template>
  <DatosUsuario v-if="!vistaGrafico" :username="dataUser.username" :sessions="dataUser.sessions" @cambiarVista="cambiarVista"/>
  <Grafico v-if="vistaGrafico" :dataUser="dataUser" @cambiarVista="cambiarVista"/>
</template>

<script>
import DatosUsuario from '../components/DatosUsuario.vue'
import Grafico from '../components/Grafico.vue'
export default {
  components:{DatosUsuario,Grafico},
  data(){
    return{
      dataUser: '',
      vistaGrafico: false,
    }
  },
  created(){
    // Llamar a la API
    this.dataUser = {
        id:1,
        username:'zmorrott0',
        sessions:[
          {id:1,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:2,date:"09/14/2021",score:'1.6',duration:'13'},
          {id:3,date:'10/12/2021',score:'4.1',duration:'47'},
          {id:4,date:'03/10/2021',score:'1.2',duration:'32'},
          {id:5,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:6,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:7,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:8,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:9,date:'03/10/2021',score:'1.2',duration:'32'},
          {id:10,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:11,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:12,date:'02/11/2021',score:'3.9',duration:'60'},                                 
        ]
      }
  },
  methods:{
    cambiarVista(){
      this.vistaGrafico = (this.vistaGrafico) ? false : true;
    }
  }
}
</script>

<style scoped>



</style>