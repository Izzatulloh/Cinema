import {
    defineStore
} from 'pinia'
import axios from 'axios'

import {
    apiKey,
} from './key'
export const Treyler = defineStore('treyler', {
    state: () => ({
        moviePath: "https://api.themoviedb.org/3",
        movieTreyler: null,
        tvTreyler: null
    }),
    actions: {
        async getTreyler({type, id}) {
            try {
                const res = await axios.get(`${this.moviePath}${type}${id}/videos?api_key=${apiKey}&language=en-US`)
                if (type == "/movie/") this.movieTreyler = res.data.results[res.data.results.length-1]
                else this.tvTreyler = res.data.results[res.data.results.length-2 || res.data.results.length-1]
            } catch (error) {
                console.log("Xatolik yuz berdi kino malumotlarini olishda", error);
            }
        },
    },

})