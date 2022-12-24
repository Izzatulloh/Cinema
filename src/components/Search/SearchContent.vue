<template >
    <router-link :to="item.media_type+'/'+ item.id" class="main__content-item">
        <img v-lazy="imgFullPath+item.backdrop_path" alt="" class="main__content-item-img">
        <h2 class="main__content-item-title">{{item.title || item.name}}</h2>
    </router-link>
</template>
<script setup>
import { imgFullPath } from "@/stores/key";
const props = defineProps(["item", "id"]);

</script>
<style lang="scss">
</style>