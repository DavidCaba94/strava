<template>
  <h1>Prueba API Strava</h1>
  <ComponentePrueba></ComponentePrueba>
</template>

<script>
//import { default as strava } from 'strava-v3';
//import { request as fetchGQL } from "graphql-request";
//import { ref, watchEffect } from 'vue';
import ComponentePrueba from '../components/ComponentePrueba.vue'
export default {
    components: {
        ComponentePrueba
    }
    /*
    async setup(){
        
        strava.config({
            "access_token"  : "a0eff88bc03441fab1bb29bb48e42efd9c6a44f5",
            "client_id"     : 59307,
            "client_secret" : "49216f251003343db5893f28f8d8abe0be21735f",
            "redirect_uri"  : "localhost/8080",
        });
        const payload = await strava.athlete.get({});
        console.log(payload);
        
    }
    */
}
</script>

<style>

</style>