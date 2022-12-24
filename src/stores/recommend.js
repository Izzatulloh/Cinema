import { defineStore } from 'pinia'
import axios from 'axios'
import { apiKey, } from './key'
export const Recommend = defineStore('recommend', {
    state: () => ({
        moviePath: "https://api.themoviedb.org/3",
        recommendMovie: null,
        recommendTv: null
    }),
    actions: {
        async getRecommend({type, id, count}) {
            try {
               
                const res = await axios.get(`${this.moviePath}${type}${id}/recommendations?api_key=${apiKey}&language=ru-Ru&page=1`)
                const data = res.data.results
                const result = data.filter(item=>item.poster_path !=null)
                let arr = []
                result.forEach(el => {
                    if (arr.length < count) arr.push(el)
                });
                if (type == "/movie/") this.recommendMovie = arr
                else this.recommendTv = arr
            
            } catch (error) {
                console.log("Xatolik yuz berdi Actor malumotlarini olishda", error);
            }
        },
    },

})
