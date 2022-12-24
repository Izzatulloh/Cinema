<template>
  <Transition name="upcoming-item" mode="out-in">
    <div class="main__upcoming-item" v-if="slideView == index">
      <img
        v-lazy="fullPath + movie.backdrop_path"
        class="main__upcoming-item-img"
        alt=""
      />
      <div class="container">
        <div class="main__upcoming-content">
          <h1 class="main__upcoming-title">{{ movie.title }}</h1>
          <p class="main__upcoming-text">
            {{ movie.overview }}
          </p>
          <Btn :id="movie.id"/>
        </div>
      </div>
      <div class="main__upcoming-next" @click="$emit('slideNext')">
        <img
          :src="path + next.backdrop_path"
          class="main__upcoming-next-img"
          alt=""
        />
        <p class="main__upcoming-next-text">Следующий</p>
        <h2 class="main__upcoming-next-title">{{ next.title }}</h2>
        <div class="main__upcoming-next-line"></div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import { computed } from "@vue/runtime-core";
import { imgFullPath, imgPath } from "@/stores/key";
const props = defineProps({
  movie: Object,
  index: Number,
  slideView: Number,
  next: Object,
});
const fullPath = computed(() => imgFullPath);
const path = computed(() => imgPath);
</script>

<style lang="scss">
@import url(./Upcoming.scss);
</style>
