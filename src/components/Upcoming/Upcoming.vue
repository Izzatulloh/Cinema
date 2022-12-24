<template>
  <Transition name="upcoming" mode="out-in">

    <div class="main__upcoming" v-if="upcomingArr">
      <UpcomingItem
        v-for="(movie, i) in upcomingArr"
        :key="movie.id"
        :movie="movie"
        :index="i"
        :slideView="slideView"
        :next="upcomingArr[i == upcomingArr.length - 1 ? 0 : i + 1]"
        @slideNext="slideNext"
      />
    </div>
    <div class="load" v-else>
      <div class="loader">
        <div class="loader__circle"></div>
      </div>
    </div>
  </Transition>
</template>
<script setup>
import UpcomingItem from "./UpcomingItem.vue";
import { onMounted, computed, ref } from "vue";
import { Upcoming } from "@/stores/store";
const get = Upcoming();
let slideView = ref(0);
let timeout = ref(null);
function slide() {
  if (upcomingArr.value.length - 1 == slideView.value) {
    slideView.value = 0;
  } else {
    slideView.value++;
  }
  timeout = setTimeout(slide, 10000);
}
const slideNext = () => {
  clearTimeout(timeout);
  if (upcomingArr.value.length - 1 == slideView.value) {
    slideView.value = 0;
  } else {
    slideView.value++;
  }
};

onMounted(() => {
  get.getUpcoming();
  timeout = setTimeout(slide, 10000);
});
const upcomingArr = computed(() => get.upcoming);

</script>
<style lang="scss">
@import "./Upcoming.scss";
</style>
