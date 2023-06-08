<template>
    <div class="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <div class="hero-overlay bg-opacity-60">
            <div class="containerT" v-html="$t('techniquePage')">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.containerT {
    text-align: justify;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background-color: #2a303c;
    border-radius: 1.5em;
}

.techniqueText {
    margin: 20px;
    font-size: 18px;

}

p {
    margin-top: 12px;
}

.authors {
    margin-top: 30px;
}

@media screen and (max-width: 800px) {
  .techniqueText {
    margin: 10px;
    font-size: 10px;
  }
}

</style>