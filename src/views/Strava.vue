<template>
    <div class="about">
        <h1>STRAVA</h1>
        <ul>
            <li v-for="episode in episodes" :key="episode.id">{{episode.name}}</li>
        </ul>
    </div>
</template>

<script>
import { request as fetchGQL } from "graphql-request";
import { ref, inject, watchEffect } from 'vue';
const { useRoute }=require("vue-router");
export default {
    setup(){
        let episodes = ref([]);
        const info = inject("info");
        const route = useRoute();
        watchEffect(() => {
            fetchGQL("https://rickandmortyapi.com/graphql", 
                /*GraphQL*/ `
                query($page: Int) {
                    episodes(page: $page) {
                        info {
                            count
                            pages
                            next
                            prev
                        }
                        results {
                            id
                            name
                            air_date
                            episode
                            created
                        }
                    }
                }
                `,
                {
                    page: parseInt(route.params.page),
                }
            ).then(data => {
                episodes.value = data.episodes.results;
                info.value = data.episodes.info;
            });
        });

        return {
            episodes,
        }
    }
}
</script>

<style>

</style>