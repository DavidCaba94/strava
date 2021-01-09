<template>
  <MenuPrueba></MenuPrueba>
  <!--
  <nav>
    {{ info }}
    <router-link :to="prevComp">Prev</router-link> |
    <router-link :to="nextComp">Next</router-link>
  </nav>
  -->
</template>

<script>
  import MenuPrueba from './components/MenuPrueba.vue'
  export default {
    components: {
      MenuPrueba
    }
  }
  /*
  const { ref, provide, computed }=require("vue");
  const { useRoute }=require("vue-router");
  const info = ref({
    count: 0,
    pages: 0,
    next: 0,
    prev: 0
  });

  provide("info", info);

  const route = useRoute();

  const prevComp = computed(() => ({
    name: route.name,
    params: { page: info.value.prev || route.params.page },
  }));

  const nextComp = computed(() => ({
    name: route.name,
    params: { page: info.value.next || route.params.page },
  }));

  console.log(nextComp,prevComp);
  */
</script>

<style>
body {
  background-color: #f9f9f9;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #525252;
}

#nav a.router-link-exact-active {
  color: #4f46e5;
}
</style>
