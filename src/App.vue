<template >
  <Navbar />
  <Router-view  v-if="routeChange"/>
</template>

<script setup>
import Navbar from "@/components/Navbar/Navbar.vue";
import Home from "@/pages/Home.vue";
import { ref, provide, nextTick } from 'vue'
const routeChange = ref(true)
const reload = () => {
  routeChange.value = false 
  nextTick(() => routeChange.value = true)
  console.log('Working');
}     
provide('reload', reload)
</script>

<style lang="scss">
</style>