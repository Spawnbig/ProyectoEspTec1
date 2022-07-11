<template>
     <main>  
      <br>
      <br>
      <div>
        <div id ="container-max" class="container box">
          <label class="label">Iniciar Sesion </label>
          <form>
            <div class="form-group">
              <label class="label" for="correo">Ingrese su nombre : </label>
              <input 
                id="nombre"  name="nombre" type="nombre" class="input"
                 required autofocus="autofocus" placeholder="Ingrese su nombre" v-model="correo"/>
            </div>

            <div class="form-group">
              <label class="label" for="clave">Ingrese su clave : </label>
              <input
                id="clave" type="password"  name="clave" class="input" 
                required autofocus="autofocus" placeholder="Digite su clave" v-model="clave"/>
            </div>

          </form>
              <div id="boton">
        <p>
          <button class="button" type="submit" name="login-submit" id="login-submit"
                  value="Ingresar" @click="login(nombre,clave)">
                  Ingresar
          </button>
          <button class="button ml-3" type="submit" name="login-submit" id="login-submit"
                  value="Ingresar" @click="$emit('cambiarVista')">
                  Crear Cuenta
          </button>
         </p>
      </div>
        </div>

      </div>
    </main>
    
</template>

<script>
import axios from 'axios';
export default {

data(){
return{
   correo:"",
   clave:"",
    };
},


methods: {

    login(){
      let json = {
      "correo":this.correo,
      "clave":this.clave,
      };
      axios.post('', json)
      .then(data => {
        this.$store.dispatch("login",data.data.nombre);
        console.log(data);
        localStorage.token = data.data.token;
        
      });
    },

  }
}

</script>

<style scoped>

.form-group{
padding-top: 15px;
   padding-bottom: 10px
}

#container-max{
  max-width: 500px;
}



#boton{
  
  text-align:center;
  margin-top: 50px;
  margin-bottom: 20px;
  
}

#boton button{
  background-color: #0274de;
  color: white;
}




</style>