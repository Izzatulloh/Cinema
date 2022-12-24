import { defineStore } from 'pinia'
import axios from 'axios'

import { apiKey, } from './key'
export const Upcoming = defineStore('store', {
  state: () => ({
    upcoming: null,
    upcomingPath: "https://api.themoviedb.org/3/movie/upcoming"
  }),
  actions: {
    async getUpcoming() {
      try {
        const res = await axios.get(`${this.upcomingPath}?api_key=${apiKey}&language=ru-Ru&page=1`)
        const resData = res.data.results
        const arrRes = resData.filter(movie => movie.backdrop_path != null)
        this.upcoming = arrRes
      } catch (error) {
        console.log("Xatolik yuz berdi Upcoming malumotlarini olishda ",error);
      }
    },
  },
 

})
