<template>
    <div class="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <div class="hero-overlay bg-opacity-60">
            <div class="containerE" v-html="$t('eventsPage')">
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerE {
    text-align: justify;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background-color: #2a303c;
    border-radius: 1.5em;
    font-size: 18px;
}


.eventsText {
    margin: 20px;
    font-size: 18px;

    p {
    margin-top: 12px;
}
#firstP {
    font-size: 25px;
    margin-bottom: 40px;
}

ol {
    margin:20px;
}

li {
    margin-top: 10px;
}

#boldP {
    font-weight: bold;
    font-size: 20px;
}
}





@media screen and (max-width: 800px) {
  .eventsText {
    margin: 5px;
    font-size: 10px;
  }
}

</style>