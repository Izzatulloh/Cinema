<template >
  <div class="container">
    <div class="main__content">
      <h2 class="main__content-title">
        {{ content == "/movie/" ? "Все фильмы" : "Все Сереалы" }}
      </h2>
      <div class="main__content-list">
        <ContentItem
          v-for="item in allContent"
          :key="item.id"
          :item="item"
          :content="content"
        />
      </div>
    </div>
    <div class="load" v-if="loading">
      <div class="loader">
        <div class="loader__circle"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import ContentItem from "./ContentItem.vue";
import { ref, onMounted } from "vue";
import { Popular } from "@/stores/popular";
const props = defineProps(["content"]);
let page = ref(1);
let loading = ref(false);
let allContent = ref([]);

const getContent = async () => {
  if (!loading.value) {
    loading.value = true;
    const popular = Popular();
    await popular.getPopular({ type: props.content, page: page.value });
    let getter =
      props.content == "/movie/" ? popular.popularMovies : popular.popularTvs;

    allContent.value.push(...getter);
    loading.value = false;
    page.value++;
  }
};
onMounted(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY + window.innerHeight >= document.body.scrollHeight) {
      getContent();
    }
  });
  getContent();
});
</script>
<style lang="scss">
@import url("../Content/Content.scss");
</style>