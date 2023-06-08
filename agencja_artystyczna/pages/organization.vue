<template>
    <div class="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <div class="hero-overlay bg-opacity-60">
            <div class="containerO" v-html="$t('organizationPage')"></div>
            <div class="containerLiO" v-html="$t('organizationPageList')"></div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
.containerO {
    text-align: justify;
    position: absolute;
    top: 32%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background-color: #2a303c;
    border-radius: 1.5em;

    .organizationText {
        margin: 20px;
        font-size: 18px;

        #boldP {
            font-weight: bold;
            font-size: 20px;
        }

        p {
            margin-top: 12px;
        }

        ol {
            margin-left: 40px;
            margin-top: 10px;
        }

        li {
            margin-top: 10px;
        }
    }


}

.containerLiO {
    text-align: justify;
    position: absolute;
    top: 74%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background-color: #2a303c;
    border-radius: 1.5em;

    .organizationText {
        margin: 20px;
        font-size: 18px;

        #boldP {
            font-weight: bold;
            font-size: 20px;
        }
    }

    p {
        margin-top: 12px;
    }

    ol {
        margin-left: 40px;
        margin-top: 10px;
    }

    li {
        margin-top: 10px;
    }
}

@media screen and (max-width: 1200px) {


    .containerO {
        width: 90%;

        .organizationText {
            margin: 5px;
            font-size: 10px;
        }
    }

    .containerLiO {
        width: 90%;

        .organizationText {
            margin: 5px;
            font-size: 10px;

            #boldP {
                font-weight: bold;
                font-size: 12px;
            }
        }
    }

}
</style>