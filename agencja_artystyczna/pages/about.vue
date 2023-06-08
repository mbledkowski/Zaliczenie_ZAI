<template>
  <div class="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
    <div class="hero-overlay bg-opacity-60">
      <div class="containerA" v-html="$t('aboutPage')">
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.containerA {
  text-align: justify;
  position: absolute;
  top: 55%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 80%;
  background-color: #2a303c;
  border-radius: 1.5em;

  .aboutText {
    margin: 20px;
    font-size: 18px;

  }

  p {
    margin-top: 12px;
  }

  #firstP {
    font-size: 25px;
    margin-bottom: 40px;
  }

  .authors {
    margin-top: 30px;
  }
}

@media screen and (max-width: 800px) {
  .aboutText {
    margin: 10px;
    font-size: 10px;

    #firstP {
      font-size: 13px;
      margin-bottom: 10px;
    }

    .authors {
      margin-top: 10px;
    }
  }
}
</style>