<template >
  <main class="main">
    <Upcoming />
    <Movies />
    <Tvs />
    <Top />
  </main>
</template>
<script setup>
import Upcoming from "@/components/Upcoming/Upcoming.vue";
import Movies from "@/components/Movies/Movies.vue";
import Tvs from "../components/Tvs/Tvs.vue";
import Top from "../components/Top10/Top.vue";
</script>
<style lang="scss">
</style>