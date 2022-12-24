<template >
  <section class="main__pop" v-if="tvsArr">
    <router-link to="/tv" class="main__pop-title">
      <span>Сереалы</span>
      <img src="@/assets/images/arrowLeft.svg" alt="" />
    </router-link>
    <Swiper
      :modules="modules"
      :space-between="25"
      :navigation="true"
      :breakpoints="swiperOptions.breakpoints"
    >
      <Swiper-slide
        class="main__pop-item"
        v-for="(tv) in tvsArr"
        :key="tv.id"
        @click="getTvInfo(tv)"
      >
        <img
          v-lazy="imgFullPath + tv.poster_path"
          alt=""
          class="main__pop-img"
        />
       <router-link class="main__pop-item-link" :to="'/tv/' + tv.id" />
      </Swiper-slide>
      <Swiper-slide class="main__pop-item">
        <router-link class="main__pop-item-content" to="/tv/"
          >Все Сереалы</router-link
        >
      </Swiper-slide>
    </Swiper>
    <InfoBlock
      :selectedId="selectedId"
      :selectedMovie="selectedMovie"
      @close="selectedMovie = selectedId = null"
      page="/tv/"
    />
  </section>
  <div class="load" v-else>
    <div class="loader">
      <div class="loader__circle"></div>
    </div>
  </div>
</template>
<script setup>
import InfoBlock from "@/components/InfoBlock/InfoBlock.vue";
import { imgFullPath } from "@/stores/key";
import { Swiper, SwiperSlide } from "swiper/vue";
import { onMounted, computed, ref } from "vue";
import { Popular } from "@/stores/popular";
import { Info } from "@/stores/info";
import { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
const get = Popular();
const getInfo = Info();
const selectedId = ref(null);
const selectedMovie = ref(null);

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
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1450: {
      slidesPerView: 5,
    },
  },
};
onMounted(() => {
  get.getPopular({type:"/tv/"});
});
const tvsArr = computed(() => get.popularTvs);
async function getTvInfo(tv) {
  selectedId.value = tv.id;
  selectedMovie.value = null;
  await getInfo.getInfoById({type:"/tv/",id:selectedId.value});
  selectedMovie.value = getInfo.tv;
}
</script>
<style lang="scss">
@import "../Movies/Movies.scss";
</style>