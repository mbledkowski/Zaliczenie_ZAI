<template>
  <div class="carousel w-full" id="slider">
    <div v-for="(image, index) in images" :key="index" class="carousel-item relative w-full">
      <div :id="'slide' + index" class="w-full">
        <img :src="image" class="w-full aspect-square md:aspect-[3/1] lg:aspect-[4/1] object-cover" :alt="image"/>
        <div class="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
          <a :href="'#slide' + (index - 1)" v-if="index !== 0" class="btn btn-circle">&#10094;</a>
          <span v-else></span>
          <a :href="'#slide' + (index + 1)" v-if="index !== images.length - 1" class="btn btn-circle">&#10095;</a>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  data() {
    return {
      images: [] as string[],
    };
  },
  methods: {
    async loadImages() {
      const response = await fetch("/img/slider/img.json");
      this.images = await response.json() as string[];
    },
  },
  mounted() {
    this.loadImages();
  },
};
</script>

<style lang="css" scoped>
@media screen and (max-width: 1225px) {
#slider {
  margin-top: 50px;
}
}

@media screen and (max-width: 1023px) {
  #slider {
    margin-top: 0px;
  }
}

</style>