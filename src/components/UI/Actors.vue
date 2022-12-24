<template>
  <div class="main__info-item">
    <div class="main__info-item-actor" v-for="actor in actorsArr" :key="actor.id">
      <img :src="imgPath + actor.profile_path" alt="" class="main__info-item-img" />
      <p class="main__info-item-name">
        {{ actor.name }}
      </p>
    </div>
  </div>
</template>
<script setup>
import { imgPath } from "@/stores/key";
import { onMounted, computed, ref } from "vue";
import { Actors } from "@/stores/actors";
const props = defineProps(["type", "id", "count"]);
const get = Actors();
onMounted(() => {
  get.getActors({ type: props.type, id: props.id, count: props.count });
});
const actorsArr = computed(() => {
  return props.type == "/movie/" ? get.actorsMovie : get.actorsTv;
});
</script>
<style lang="scss">
@import "../InfoBlock/InfoBlock.scss";
</style>
