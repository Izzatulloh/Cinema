<template>
  <IntroContent
    :infoMovie="infoMovie"
    :actorsInfo="actorsInfo"
    :id="route.params.id"
    :type="type"
  />
  <Recom :recommendArr="recommendArr" :type="type" />
</template>
<script setup>
import IntroContent from "./IntroContent.vue";
import Recom from "./Recom.vue";
import { Info } from "@/stores/info";
import { Recommend } from "@/stores/recommend";
import { computed, onMounted, onBeforeUnmount, inject, ref,onUpdated} from "vue";
import { useRoute } from "vue-router";

const props = defineProps(["type"]);
const route = useRoute();
const getInfo = Info();
const recommend = Recommend();
const path = ref(null);
const reload = inject('reload')
path.value = route.fullPath
let actorsInfo = { type: props.type, id: route.params.id, count: 6 };
onMounted(async () => {
  getInfo.getInfoById({ type: props.type, id: route.params.id });
  recommend.getRecommend({ type: props.type, id: route.params.id, count: 4 });
});

const infoMovie = computed(() => (props.type == "/movie/" ? getInfo.movie : getInfo.tv));
const recommendArr = computed(() =>
  props.type == "/movie/" ? recommend.recommendMovie : recommend.recommendTv
);
onUpdated(() => {
  if (route.fullPath != path.value) {
    reload();
  }
});
onBeforeUnmount(() => {
  getInfo.movie;
  getInfo.tv;
});
</script>
