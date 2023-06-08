<template>
  <hero />
  <section class="flex flex-row flex-wrap">
    <div v-for="(image, index) in firstSecImages" :key="index" class="w-full md:w-1/4 aspect-[20/12]">
      <img :src="image" :alt="image" class="w-full h-full object-cover" />
    </div>
  </section>
  <section class="flex flex-row flex-wrap">
    <div v-for="(image, index) in secondSecImages" :key="index" class="w-full md:w-1/2 aspect-[20/12]">
      <img :src="image" :alt="image" class="w-full h-full object-cover" />
    </div>
  </section>
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
</style>