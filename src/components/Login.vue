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
                 required autofocus="autofocus" placeholder="Ingrese su nombre" v-model="credenciales.nombre"/>
            </div>

            <div class="form-group">
              <label class="label" for="clave">Ingrese su clave : </label>
              <input
                id="clave" type="password"  name="clave" class="input" 
                required autofocus="autofocus" placeholder="Digite su clave" v-model="credenciales.clave"/>
            </div>

          </form>
              <div id="boton">
        <p>
          <button class="button" type="submit" name="login-submit" id="login-submit"
                  value="Ingresar" @click="ingresar(nombre,clave)">
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
export default {
name: 'login',
data(){
return{

  credenciales: {
        nombre: "",
        clave: "",
      },

    }
},


methods: {

    ingresar(){

    }

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