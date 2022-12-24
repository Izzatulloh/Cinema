import {
    defineStore
} from 'pinia'
import axios from 'axios'

import {
    apiKey,
} from './key'
export const Info = defineStore('info', {
    state: () => ({
        moviePath: "https://api.themoviedb.org/3",
        movie: null,
        tv: null
    }),
    actions: {
        async getInfoById({type, id}) {
            try {
                const res = await axios.get(`${this.moviePath}${type}${id}?api_key=${apiKey}&language=ru-Ru&page=1`)
                if (type == "/movie/") this.movie = res.data
                else this.tv = res.data
            } catch (error) {
                console.log("Xatolik yuz berdi kino malumotlarini olishda", error);
            }
        },
    },

})