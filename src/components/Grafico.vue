<template>
  <main class="container">
    <div class="container has-text-centered mt-6">
      <h1 class="title is-1 has-text-black">Grafico Rendimiento para {{dataUser.username}}</h1>
    </div>
    <div class="box mt-6 container">
      <canvas id="myChart" width="400px" height="500px"></canvas>
      
    </div>
    <button class="button is-warning" v-on:click="$emit('cambiarVista')">Volver</button>
  </main>
</template>

<script>
import Chart from 'chart.js/auto'
export default {
  props:{
    dataUser : Object,
  },
  data(){
    return{
      getLabels:[],
      getData: [],
    }
  },
  mounted(){
    const ctx = document.getElementById('myChart')
    this.dataUser.sessions.forEach( e => {
      this.getData.push(e.score)
      this.getLabels.push(e.date)
    })
    const myChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: this.getLabels,
        datasets: [{
            label: 'Rendimiento',
            backgroundColor: '#19AADE',
            pointBorderColor: '#820401',
            hoverBorderColor: 'red',
            data: this.getData,
            borderColor: '#19AADE',
            borderWidth: 5 
        }]
    },
    options: {
        scales: {
            y: {
                beginAtZero: true
            }
        },
        responsive: true,
        
    }
});

  }
}
</script>