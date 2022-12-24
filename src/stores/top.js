import { defineStore } from 'pinia'
import axios from 'axios'

import { apiKey, } from './key'
export const Top = defineStore('top', {
    state: () => ({
        topPath: "https://api.themoviedb.org/3/movie/top_rated",
        popularTop: null
    }),
    actions: {
        async getTop() {
            try {
                const res = await axios.get(`${this.topPath}?api_key=${apiKey}&language=ru-Ru&page=1`)
                const data = res.data.results
                const dataFilter = data.filter(movie => movie.backdrop_path != null)
                const top10=[]
                dataFilter.forEach(item => {
                    if (top10.length<10) top10.push(item)                     
                });
                this.popularTop = top10
            } catch (error) {
                console.log("Xatolik yuz berdi Serial malumotlarini olishda", error);
            }
        },
    },

})