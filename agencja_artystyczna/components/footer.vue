<template>
    <div class="containerFooter">
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
        <footer>
            <div class="agencjaF">Agencja artystyczna 2023</div>
            <div class="mapaF"><a class="mapaLink"
                    href="https://www.google.com/maps/place/Hel/@54.6362617,18.6924552,12z/data=!3m1!4b1!4m6!3m5!1s0x46fd0429b0408aab:0x66e584a9f09d68ea!8m2!3d54.6083804!4d18.8007998!16zL20vMDJteDZs?entry=ttu"
                    target="_blank">Znajdź nas na mapie 🌎</a></div>
            <div class="fbYt">
                <a href="https://www.facebook.com/profile.php?id=100089196045033" target="_blank"
                    class="fa fa-facebook"></a>
                <a href="https://www.youtube.com" target="_blank" class="fa fa-youtube"></a>
            </div>
        </footer>
    </div>
</template>

<style lang="css" scoped>
.containerFooter {
    background-color: #20252e;
}

footer {
    background-color: #2a303c;
    justify-content: space-between;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    margin: auto;
    width: 100%;
    height: 80px;
}

footer div {
    padding-top: 15px;
}

.agencjaF {
    padding-top: 25px;
    margin-left: 20px;
    font-size: 18px;
}

.mapaF {
    padding-top: 20px;
    font-size: 23px;
    margin-right: 80px;
}

.mapaLink:hover {
    opacity: 0.7;
}

.fbYt {
    font-size: 20px;
    margin-right: 10px
}

.fa {
    padding: 15px;
    width: 50px;
    text-align: center;
    text-decoration: none;
    border-radius: 1.5em;
    margin-left: 10px;
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

@media screen and (max-width: 800px) {

    .mapaF {
        font-size: 20px;
        margin-right: 20px;
    }

    .agencjaF {
        font-size: 17px;
    }
}

@media screen and (max-width: 630px) {

    .mapaF {
        padding-top: 23px;
        font-size: 16px;
        margin: 0;
    }

    .agencjaF {
        padding-top: 25px;
        font-size: 14px;
        margin-left: 10px;
    }

    .fa {
        font-size: 15px;
        width: 40px;
        height: 40px;
        text-align: center;
        text-decoration: none;
        border-radius: 1.5em;
        margin-left: 10px;
        border-radius: 1.5em;
    }

    .fbYt {
        font-size: 20px;
        margin-right: 10px
    }

    .fa-youtube {
        margin-left: 10px;
    }
}

@media screen and (max-width: 470px) {

    .mapaF {
        font-size: 14px;
        margin: 0;
        text-align: right;
        margin-right: 25px;
        margin-left: 20px;
    }

    .agencjaF {
        font-size: 13px;
    }

    .fa {
        font-size: 15px;
        width: 40px;
        height: 40px;
        text-align: center;
        text-decoration: none;
        border-radius: 1.5em;
        margin-left: 10px;
        border-radius: 1.5em;
        margin-top: 5px;
    }

    .containerFooter {
        background-color: #20252e;


    }

    .fbYt {
        margin-left: 40px;
    }

    footer div {
        padding-top: 5px;
    }
}
</style>