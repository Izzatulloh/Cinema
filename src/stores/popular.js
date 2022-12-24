import {
    defineStore
} from 'pinia'
import axios from 'axios'

import {
    apiKey,
} from './key'
export const Popular = defineStore('popular', {
    state: () => ({
        moviePath: "https://api.themoviedb.org/3",
        popularMovies: null,
        popularTvs: null
    }),
    actions: {
        async getPopular({type, page = 1}) {
            try {
                const res = await axios.get(`${this.moviePath}${type}popular?api_key=${apiKey}&language=ru-Ru&page=${page}`)
                const data = res.data.results
                if(type=="/movie/") this.popularMovies = data.filter(movie => movie.backdrop_path != null)
                else this.popularTvs = data.filter(movie => movie.backdrop_path != null)
            } catch (error) {
                console.log("Xatolik yuz berdi kino malumotlarini olishda", error);
            }
        },
    },

})