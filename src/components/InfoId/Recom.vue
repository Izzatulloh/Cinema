<template>
  <div class="main__content-list container">
    <router-link
      class="main__content-item"
      v-for="item in recommendArr"
      :key="item.id"
      :to="type + item.id"
    >
      <img
        v-lazy="imgFullPath + item.poster_path"
        alt=""
        class="main__content-item-img"
      />
      <h2 class="main__content-item-title">{{ item.title || item.name }}</h2>
    </router-link>
  </div>
</template>
<script setup>
import {imgFullPath} from '../../stores/key'
const props = defineProps(["type", "recommendArr"]);
</script>
<style lang=""></style>
