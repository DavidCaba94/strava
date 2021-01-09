<template>
  <div id="componente-prueba">
      <h1 class="titulo-prueba">{{ mensajePrueba }}</h1>
  </div>
</template>

<script>
export default {
    name: "ComponentePrueba",
    data() {
        return {
            mensajePrueba: "Prueba de componente"
        }
    }
}
</script>

<style>
    @import '../assets/css/styles.css';
</style>