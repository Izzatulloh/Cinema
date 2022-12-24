<template >
  <section class="main__info" :class="{ active: selectedId != null }">
    <Transition name="infoblock" mode="out-in">
      <div class="main__info-block" v-if="selectedMovie">
        <div class="main__info-img">
          <img
            class="main__info-img-content"
            :src="imgFullPath + selectedMovie.backdrop_path"
            alt=""
          />
        </div>
        <fa icon="xmark" class="main__info-close" @click="$emit('close')" />
        <div class="main__info-content">
          <h2 class="main__info-content-title">
            {{ selectedMovie.title || selectedMovie.name }}
          </h2>
          <p class="main__info-content-text">
            {{ selectedMovie.overview }}
          </p>
          <p class="main__info-content-time">
            {{
              new Date(selectedMovie.release_date).getFullYear() ||
              new Date(selectedMovie.first_air_date).getFullYear()
            }}

            <span v-for="genres in selectedMovie.genres" :key="genres.id">
              {{ genres.name }}
            </span>
            <span
              class="main__info-content-time-span"
              v-if="selectedMovie.runtime"
            >
              {{ Math.floor(selectedMovie.runtime / 60) }}ч
              <span v-if="selectedMovie.runtime % 60 != 0"
                >{{ selectedMovie.runtime % 60 }}м</span
              ></span
            >
          </p>
          <div class="main__info-actor">
            <Actors :type="page" :id="selectedMovie.id" :count="4" />
          </div>
          <Btn :id="selectedMovie.id" :page="page" />
        </div>
      </div>
    </Transition>
  </section>
</template>
<script setup>
import Actors from "../UI/Actors.vue";
import Btn from "../UI/Btn.vue";
import { imgFullPath } from "@/stores/key";
const props = defineProps(["selectedId",  "selectedMovie", "page"]);
</script>
<style lang="scss">
@import "./InfoBlock";
</style>