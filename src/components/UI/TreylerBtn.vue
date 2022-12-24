<template>
  <div>
    <button class="main__intro-treyler" @click="getVideo(type, id)">
      <img src="@/assets/images/play.svg" alt="" />
      Смотерть трейлер
    </button>
      <div class="main__treyler" :class="active" v-if="videoMovie">
        <div class="main__treyler-info" >
          <iframe
            class="main__treyler-video"
            :src="'https://www.youtube.com/embed/' + videoMovie.key"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
          <img
            class="main__treyler-close"
            src="@/assets/images/close.svg"
            alt=""
            @click="videoMovie = active = null"
          />
        </div>
      </div>
  </div>
</template>
<script setup>
import { Treyler } from "@/stores/treyler";
import { onMounted, ref, onBeforeUnmount } from "vue";
const props = defineProps(["id", "type"]);
const videoMovie = ref(null);
const get = Treyler();
let active = ref(null);
async function getVideo(type, id) {
  await get.getTreyler({ type: type, id: id });
  videoMovie.value = props.type == "/movie/" ? get.movieTreyler : get.tvTreyler;
  active.value = videoMovie.value ? "active" : "";
}
onBeforeUnmount(() => {
  videoMovie.value = null;
});
</script>
<style lang="scss"></style>
