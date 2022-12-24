<template >
  <div class="container">
    <div class="main__content">
      <input
        type="text"
        class="main__search-input"
        :placeholder="placeholder"
        v-model="value"
      />
      <div class="main__content-list" v-if="searchArr">
        <SearchContent v-for="item in searchArr" :key="item.id" :item="item" />
      </div>
    
    </div>
  </div>
</template>
<script setup>
import SearchContent from "./SearchContent.vue";
import { Search } from "@/stores/search";
import { computed, onBeforeUnmount } from "vue";
const props = defineProps(["placeholder"]);
const searchStore = Search();

const searchArr = computed(() => searchStore.searchArr);
const value = computed({
  get: () => searchStore.search,
  set: (val) => {
    searchStore.search = val;
    searchStore.getSearch();
  },
});
onBeforeUnmount(() => {
  searchStore.searchArr = null;
  searchStore.search = "";
});
</script>
<style lang="scss">
</style>