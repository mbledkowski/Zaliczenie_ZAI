<template>
  <hero />
  <div class="bg-base-300">
  <div class="marginPhotos">
  <section class="flex flex-row flex-wrap">
    <div v-for="(image, index) in firstSecImages" :key="index" class="w-full md:w-1/4 aspect-[20/12]">
      <img :src="image" :alt="image" class="w-full h-full object-cover" />
    </div>
  </section>
  <section class="flex flex-row flex-wrap bg-base-300">
    <div class="p-8 pr-4 w-full md:w-1/2 aspect-[20/6]">
    <div class="card bg-base-100 shadow-xl aspect-[20/6]">
      <div class="card-body">
        <h2 class="card-title">{{ $t('about') }}</h2>
        <p class="cP>">{{ $t('aboutP') }}</p>
      </div>
    </div></div>
    <div class="p-8 pl-4 w-full md:w-1/2 aspect-[20/6]">
    <div class="card bg-base-100 shadow-xl aspect-[20/6]">
      <div class="card-body">
        <h2 class="card-title">{{ $t('technique') }}</h2>
        <p class="tP">{{ $t('techniqueP') }}></p>
      </div>
    </div></div>
  </section>
  <section class="flex flex-row flex-wrap">
    <div v-for="(image, index) in secondSecImages" :key="index" class="w-full md:w-1/2 aspect-[20/12]">
      <img :src="image" :alt="image" class="w-full h-full object-cover" />
    </div>
  </section>
  </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      firstSecImages: [] as string[],
      secondSecImages: [] as string[],
    };
  },
  methods: {
    async loadImages() {
      const response = await fetch("/img/main/img.json");
      let images = await response.json() as string[];
      this.firstSecImages = images.slice(0, 8);
      this.secondSecImages = images.slice(8, 10);
    },
  },
  mounted() {
    this.loadImages();
  },
};
</script>

<style lang="css" scoped>

.marginPhotos {
  margin-left: 1rem;
  margin-right: 1rem;
}

</style>