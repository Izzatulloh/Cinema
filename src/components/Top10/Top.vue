<template >
  <section class="main__top">
    <h2 class="main__top-title">
      ТОП
      <span>10</span>
    </h2>
    <Swiper
      :modules="modules"
      :space-between="25"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <Swiper-slide
        class="main__top-item"
        v-for="(movie, i) in topArr"
        :key="movie.id"
        @click="getTopItem(movie, i)"
      >
        <div class="main__top-info">
          <p class="main__top-number">{{ i + 1 }}</p>
        </div>
        <div class="main__top-box">
          <img
            v-lazy="imgFullPath + movie.backdrop_path"
            alt=""
            class="main__top-img"
          />
        </div>
        <h2 class="main__top-item-title">{{ movie.title }}</h2>
      </Swiper-slide>
    </Swiper>
  </section>
</template>
<script setup>
import { imgFullPath } from "@/stores/key";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, computed, ref } from "vue";
import { Top } from "@/stores/top";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

const modules = [Navigation];
const swiperOptions = {
  breakpoints: {
    320: {
      slidesPerView: 1,
    },
    576: {
      slidesPerView: 2,
    },
    900: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 3,
    },
    1450: {
      slidesPerView: 3,
    },
  },
};
const get = Top();
onMounted(() => {
  get.getTop();
});
const topArr = computed(() => get.popularTop);
</script>
<style lang="scss">
@import "./Top";
</style>