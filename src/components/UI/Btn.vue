<template>
  <div>
    <router-link class="more" :to="page + id" >
      <fa icon="bars" />
      <span>Подробнее</span>
    </router-link>
  </div>
</template>
<script setup>
const props = defineProps({
  id: Number,
  page: {
    typeof: String,
    default: "/movie/",
  },
});
</script>
<style lang="scss">
@import "@/assets/style/mixin.scss";
.more {
  width: 180px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;

  background: #149a03;
  border-radius: 10px;
  gap: 15px;
  font-weight: 400;
  font-size: 20px;
  line-height: 1.5;
  color: #ffffff;
  @include media(800) {
    width: 150px;
    height: 40px;
    font-size: 16px;
    gap: 10px;
  }
  @include media(600) {
    width: 130px;
    height: 33px;
    font-size: 14px;
    gap: 8px;
  }
}
</style>
