<template>
    <div id="nav" class="contenedor-menu">
        <router-link to="/home">{{item1}}</router-link>
        <router-link to="/about">{{item2}}</router-link>
        <router-link to="/strava">{{item3}}</router-link>
        <router-link to="/prueba">{{item4}}</router-link>
    </div>
    <router-view/>
</template>

<script>
export default {
    name: "MenuPrueba",
    data() {
        return {
            item1: "Home",
            item2: "About",
            item3: "Strava",
            item4: "Prueba"
        }
    }
}
</script>

<style>
@import '../assets/css/menu.css';
</style>