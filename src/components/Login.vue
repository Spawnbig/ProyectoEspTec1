<template>
<v-app>
     <v-main>  
      <br>
      <br>
      <div>

        <div id ="login" class="column is-half is-offset-one-quarter">
          <label class="label">Iniciar Sesion </label>

          <form >
            <div class="form-group">
              <label class="label" for="correo">Ingrese su nombre : </label>
              <input 
                id="nombre"  name="nombre" type="nombre" class="input"
                 required autofocus="autofocus" placeholder="Ingrese su nombre" v-model="nombre"/>
            </div>

            <div class="form-group">
              <label class="label" for="clave">Ingrese su clave : </label>
              <input
                id="clave" type="password"  name="clave" class="input" 
                required autofocus="autofocus" placeholder="Digite su clave" v-model="clave"/>
            </div>
              
          </form>

        </div>


    <div id="boton">
        <p>
          <button class="button is-primary" type="submit" name="login-submit" id="login-submit"
                  value="Ingresar" @click="ingresar(nombre,clave)">
                  Ingresar
          </button>
         </p>
      </div>

      </div>
      
      

        
    </v-main>
    </v-app>
      
  
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
#login{
  display:table;
  text-align:center;
margin-top: 40px;
 padding-top: 50px;
  padding-bottom: 50px;
   background-color: #5acd95;
   border: #000000;
   border-style: solid;
}

#boton{
  
  text-align:center;
  margin-top: 50px;
  margin-bottom: 20px;
  
}





</style>