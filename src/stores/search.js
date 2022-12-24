import {
    defineStore
} from 'pinia'
import axios from 'axios'

import {
    apiKey,
} from './key'
export const Search = defineStore('search', {
    state: () => ({

        moviePath: "https://api.themoviedb.org/3/search/multi?",
        searchArr: null,
        search: "",
    }),
    actions: {
        async getSearch(page = 1) {
          if (this.search) {
            try {
                const res = await axios.get(`${this.moviePath}api_key=${apiKey}&language=ru-Ru&query=${this.search}&page=${page}&include_adult=false`)
                const data = res.data.results
                
                this.searchArr = data.filter(movie => movie.backdrop_path != null)
            } catch (error) {
                console.log("Xatolik yuz berdi Qiduruv malumotlarini olishda", error);
            }
          }else{
            this.searchArr = null
          }
        
        },
    },

})