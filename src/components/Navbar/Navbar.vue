<template >
  <div class="header__nav" :class="{ active: scrolled > 0 }">
    <div class="container">
      <div class="header__nav-content">
        <router-link to="/" class="header__nav-logo">
          <img src="@/assets/images/Logo.svg" alt="" />
        </router-link>
        <button class="header__nav-btn" @click="burger = !burger">
          <img src="@/assets/images/burger.svg" v-if="!burger" alt="" />
          <img src="@/assets/images/close.svg" v-else alt="" />
        </button>
        <ul class="header__nav-list" :class="{ active: burger }">
          <li v-for="link in list" :key="link.path" @click="burger = false">
            <router-link class="header__nav-link" :to="link.path">{{
              link.title
            }}</router-link>
          </li>
          <li @click="burger = false">
            <router-link class="header__nav-link" to="/search"
              ><img src="../../assets/images/search.svg" alt=""
            /></router-link>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref,onMounted } from "vue";
const list = [
  { title: "Главная", path: "/" },
  { title: "Фильмы", path: "/movie" },
  { title: "Сериалы", path: "/tv" },
];
let burger = ref(false);
let scrolled = ref(0);
function updateScroll() {
  return (scrolled.value = window.scrollY);
}
onMounted(() => {
  window.addEventListener("scroll", ()=>{
    updateScroll()
  });
});
</script>
<style lang="scss">
@import "./Navbar.scss";
</style>