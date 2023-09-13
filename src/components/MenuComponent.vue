<!-- MenuComponent.vue -->
<template>
  <div class="menu-component">
    <h1>MenuComponent</h1>
    <div v-if="!loggedUserDone">
      <form @submit.prevent="login" class="form-inline">
        <div class="form-group">
          <label for="username">Nombre de usuario:</label>
          <input type="text" id="username" v-model="username" required />
        </div>
        <div class="form-group">
          <label for="password">Contraseña:</label>
          <input type="password" id="password" v-model="password" required />
        </div>
        <button type="submit">Iniciar sesión</button>
      </form>
    </div>
    <div v-else>
      <label class="form-inline">Bienvenido {{ getLoggedUserName() }}!!</label>
    </div>
  </div>
</template>

<script>
import { mapMutations, mapGetters } from "vuex";
import LoginService from "@/services/LoginService"; // Ajusta la ruta de importación según la ubicación de tu servicio

export default {
  data() {
    return {
      username: "",
      password: "",
      loggedUserDone: false,
    };
  },
  methods: {
    ...mapMutations(["setLoggedUser"]),
    ...mapGetters(["getLoggedUserName"]),

    login() {
      
      // Aquí puedes implementar la lógica de inicio de sesión
      // Puedes acceder a los valores de 'username' y 'password' desde 'this.username' y 'this.password'
      console.log("Nombre de usuario:", this.username);
      console.log("Contraseña:", this.password);

      this.setLoggedUser(this.username);
      console.log("Usuario que ha hecho login", this.getLoggedUserName());

      // Reiniciar los campos después de iniciar sesión
      this.username = "";
      this.password = "";

      LoginService.doLogin("pepe", "12345")
        .then((response) => {
          console.log("Ya estoy en el componente vue. Response =", response);
          this.loggedUserDone = true;
        })
        .catch((error) => {
          console.log("Ya estoy en el componente vue. Error =", error);
        });
    },
  },
};
</script>

<style scoped>
.menu-component {
  background-color: lightblue;
  font-size: 20px;
  /* Estilos específicos del componente MenuComponent */
}

.form-inline {
  display: flex;
  flex-direction: row;
  justify-content: flex-end; /* Alinear elementos a la derecha */
  align-items: center; /* Alinea verticalmente en el centro */
  font-size: 20px;
  margin: 10px; /* Espacio entre los campos */
}

.form-group {
  margin-right: 10px; /* Espacio entre los campos */
}

</style>
