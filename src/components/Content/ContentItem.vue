<template >
    <router-link :to="content+item.id" class="main__content-item">
        <img v-lazy="imgFullPath+item.poster_path" alt="" class="main__content-item-img">
        <h2 class="main__content-item-title">{{item.title || item.name}}</h2>
    </router-link>
</template>
<script setup>
import { imgFullPath } from "@/stores/key";
const props = defineProps(["content","item"])
</script>
<style lang="scss">
    @import "./Content.scss";
</style>