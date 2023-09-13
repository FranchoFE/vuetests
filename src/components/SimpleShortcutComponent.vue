<template>
  <button class="image-button" @click="handleClick">
    <!-- Ruta a la imagen en assets como fondo del botón -->
    <img :src="require(`@/assets/${imageName}`)" alt="Botón con imagen" />
    <h2>{{ title }}</h2>
  </button>
</template>

<script>
export default {
  props: {
    imageName: {
      type: String,
      required: true,
    },
    title: String,
  },
  methods: {
    handleClick() {
      // Lógica a ejecutar cuando se hace clic en el botón
      console.log("Botón clicado");
    },
  },
};
</script>

<style scoped>
.image-button {
  background-color: transparent;
  border: none;
  cursor: pointer;
}

/* Estilos para la imagen dentro del botón */
.image-button img {
  max-width: 50%;
  max-height: 50%;
  vertical-align: middle;
}
</style>
