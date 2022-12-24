<template lang="">
     <div class=" main__intro" v-if="infoMovie">
        <div class="main__info-content">
          <h2 class="main__info-content-title">
            {{ infoMovie.title || infoMovie.name }}
          </h2>
          <p class="main__info-content-text">
            {{ infoMovie.overview }}
          </p>
          <p class="main__info-content-time">
      
            {{
           
              new Date(infoMovie.release_date).toLocaleDateString() ||
              new Date(infoMovie.first_air_date).toLocaleDateString()
            }}

            <span v-for="genres in infoMovie.genres" :key="genres.id">
              {{ genres.name }}
            </span>
            <span
              class="main__info-content-time-span"
              v-if="infoMovie.runtime"
            >
              {{ Math.floor(infoMovie.runtime / 60) }}ч
              <span v-if="infoMovie.runtime % 60 != 0"
                >{{ infoMovie.runtime % 60 }}м</span
              ></span
            >
          </p>
          <TreylerBtn :id="id" :type="type"/>
            <h2 class="main__intro-actor-title">В главных ролях</h2>
          <div class="main__intro-actor">
            <Actors :type="actorsInfo.type" :id="actorsInfo.id" :count="actorsInfo.count" />
          </div>
        </div>
        <div class="main__intro-item">
          <img class="main__intro-item-bg" v-lazy="imgFullPath+infoMovie.backdrop_path" alt="">
          <img class="main__intro-item-img" v-lazy="imgFullPath+infoMovie.poster_path" alt="">
        </div>
      </div>
      <div class="main__intro-descr container" v-if="infoMovie"  >
        <div class="main__intro-descr-info">
          <span>Бюджет</span>
          <span>$ {{infoMovie.budget ? infoMovie.budget.toLocaleString(): 0}}</span>
        </div>
        <div class="main__intro-descr-info">
          <span>Сборы</span>
          <span>$ {{infoMovie.revenue ? infoMovie.revenue.toLocaleString(): 0 }}</span>
        </div>
        <div class="main__intro-descr-info">
          <span>Статус</span>
          <span>{{infoMovie.status}}</span>
        </div>
        <div class="main__intro-descr-info">
          <span>Исходное название</span>
          <span>{{infoMovie.original_title || infoMovie.original_name}}</span>
        </div>
      </div>
      <div class="load" v-else>
      <div class="loader">
        <div class="loader__circle"></div>
      </div>
    </div>
</template>
<script setup>
import TreylerBtn from '../UI/TreylerBtn.vue'
import { imgFullPath } from "@/stores/key";
const props = defineProps(["infoMovie","actorsInfo","id","type"]);



</script>
<style lang="">
</style>