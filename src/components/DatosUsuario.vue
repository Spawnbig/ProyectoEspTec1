<template>
  <main class="container">
    <div class="container has-text-centered mt-6">
      <h1 class="title is-1 has-text-black">Tabla Información</h1>
    </div>
    <div class="box mt-6">
      <h1 class="subtitle is-size-3">Para el usuario {{username}}</h1>
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
            <tr v-for="session in sessions" :key="session.id">
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
        <a v-on:click="$emit('cambiarVista')">
        <img src="../assets/icons/graph.svg" class="level-item">
        </a>
      </figure>
    </div>
  </main>
</template>

<script>
export default {
  props:{
    username: '',
    sessions:[]
  }
}
</script>

<style scoped>
.table-container{
  max-height: 400px;
  overflow-y: auto;
}

</style>