<template>
    <div class="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <div class="hero-overlay bg-opacity-60">
            <div class="containerC" v-html="$t('contactPage')">
            </div>
        </div>
    </div>
</template>

<style lang="scss">
.containerC {
    text-align: justify;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    background-color: #2a303c;
    border-radius: 1.5em;



    .contactText {
        margin: 20px;
        font-size: 18px;

        .mapaF {
            margin-top: 12px;
            color: #c2d2e2;

            .mapaLink:hover {
                opacity: 0.7;
            }

        }

        p {
            margin-top: 12px;
        }

        .authors {
            margin-top: 30px;
        }

        #phone {
            color: #c2d2e2;
        }

        #phone:hover {
            color: #ffffff;
        }

        #mail {
            color: #c2d2e2;
        }

        #mail:hover {
            color: #ffffff;
        }

        .fbYt {
            font-size: 20px;
            margin-top: 12px;
        }

        .fa {
            padding: 15px;
            width: 50px;
            text-align: center;
            text-decoration: none;
            border-radius: 1.5em;
        }

        .fa:hover {
            opacity: 0.7;
        }

        .fa-facebook {
            background: #3B5998;
            color: white;
        }

        .fa-youtube {
            background: #bb0000;
            color: white;
            margin-right: 10px;
            margin-left: 10px;
        }
    }


}



@media screen and (max-width: 800px) {
    .containerC {
        width: 80%;
    }
}
</style>