import { defineStore } from 'pinia'
import axios from 'axios'

import { apiKey, } from './key'
export const Actors = defineStore('actors', {
    state: () => ({
        moviePath: "https://api.themoviedb.org/3",
        actorsMovie: null,
        actorsTv: null
    }),
    actions: {
        async getActors({type, id, count}) {
            try {
                const res = await axios.get(`${this.moviePath}${type}${id}/credits?api_key=${apiKey}&language=ru-Ru&page=1`)
                const data = res.data.cast
                const result = data.filter(actor=>actor.profile_path !=null)
                let arr = []
                result.forEach(el => {
                    if (arr.length < count) arr.push(el)
                });
                if (type == "/movie/") this.actorsMovie = arr
                else this.actorsTv = arr
            } catch (error) {
                console.log("Xatolik yuz berdi Actor malumotlarini olishda", error);
            }
        },
    },

})
