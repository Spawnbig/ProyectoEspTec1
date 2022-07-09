<template>
  <main class="container">
    <div class="container has-text-centered mt-6">
      <h1 class="title is-1 has-text-black">Tabla Información</h1>
    </div>
    <div class="box mt-6">
      <h1 class="subtitle is-size-3">Para el usuario {{dataUser.username}}</h1>
      <div class="table-container">
        <table class="table is-hoverable is-fullwidth">
          <thead>
            <tr>
              <th class="is-primary">Fecha</th>
              <th class="is-primary">Duracion (Minutos)</th>
              <th class="is-primary">Puntaje Promedio</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="session in dataUser.sessions" :key="session.id">
              <td>{{session.date}}</td>
              <td>{{session.duration}}</td>
              <th>{{session.score}}</th>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
    <div class="container">
      <figure class="image is-64x64 mx-auto">
        <a>
        <img src="../assets/icons/graph.svg" class="level-item">
        </a>
      </figure>
    </div>
  </main>
</template>

<script>
export default {
  data(){
    return{
      dataUser: ''
    }
  },
  mounted(){
    this.dataUser = {
        id:1,
        username:'zmorrott0',
        sessions:[
          {id:1,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:2,date:"09/14/2021",score:'1.6',duration:'13'},
          {id:3,date:'10/19/2021',score:'4.1',duration:'47'},
          {id:4,date:'03/10/2021',score:'1.2',duration:'32'},
          {id:5,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:6,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:7,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:8,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:4,date:'03/10/2021',score:'1.2',duration:'32'},
          {id:5,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:6,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:7,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:8,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:4,date:'03/10/2021',score:'1.2',duration:'32'},
          {id:5,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:6,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:7,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:8,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:4,date:'03/10/2021',score:'1.2',duration:'32'},
          {id:5,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:6,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:7,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:8,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:4,date:'03/10/2021',score:'1.2',duration:'32'},
          {id:5,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:6,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:7,date:'02/11/2021',score:'3.9',duration:'60'},
          {id:8,date:'02/11/2021',score:'3.9',duration:'60'},                                        
        ]
      }
  }
}
</script>

<style scoped>

.table-container{
  max-height: 400px;
  overflow-y: auto;
}

</style>