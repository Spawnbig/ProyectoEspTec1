<template>
  <div id="container-max" class="container box px-6 mt-6">
    <div class="field">
      <label class="label is-large">Registrar Usuario</label>
      <div class="control has-icons-left has-icons-right">
        <input class="input is-large" type="email" placeholder="Nombre">
        <span class="icon is-small is-left">
          <i class="fas fa-envelope fa-xs"></i>
        </span>
        <span class="icon is-small is-right">
          <i class="fas fa-check fa-xs"></i>
        </span>
      </div>
   </div>
    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input class="input is-large" type="email" placeholder="Apellido">
        <span class="icon is-left">
          <i class="fas fa-envelope fa-sm"></i>
        </span>
        <span class="icon is-right">
          <i class="fas fa-check fa-sm"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input class="input is-large" type="email" placeholder="Correo">
        <span class="icon is-large is-left">
          <i class="fas fa-envelope"></i>
        </span>
        <span class="icon is-large is-right">
          <i class="fas fa-check"></i>
        </span>
      </div>
    </div>

    <div class="field">
      <div class="control has-icons-left has-icons-right">
        <input class="input is-large" type="email" placeholder="Contraseña">
        <span class="icon is-medium is-left">
          <i class="fas fa-envelope fa-lg"></i>
        </span>
        <span class="icon is-medium is-right">
          <i class="fas fa-check fa-lg"></i>
        </span>
      </div>
    </div>
    <button class="button is-primary mt-2">Registrar Usuario</button>
    <br>
    <button class="button is-danger mt-2 mb-2" v-on:click="$emit('cambiarVista')">Cancelar</button>
  </div>
</template>

<script>

export default {

}

</script>

<style scoped>
#container-max{
  max-width: 500px;
}

</style>

