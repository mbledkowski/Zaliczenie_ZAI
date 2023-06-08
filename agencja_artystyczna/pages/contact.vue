<template>
    <div class="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <div class="hero-overlay bg-opacity-60">
            <div class="containerC">
                <div class="contactText">
                    <p>Zadzwoń do nas:</p> <a id="phone" href="tel:777-666-555">777-666-555</a>
                    <p>Napisz do nas maila:</p> <a id="mail"
                            href="mailto:agencja.artystyczna.ps.mb@gmail.com"><span id="napiszMail">agencja.artystyczna.ps.mb@gmail.com</span></a>
                    <div class="mapaF"><a class="mapaLink"
                            href="https://www.google.com/maps/place/Hel/@54.6362617,18.6924552,12z/data=!3m1!4b1!4m6!3m5!1s0x46fd0429b0408aab:0x66e584a9f09d68ea!8m2!3d54.6083804!4d18.8007998!16zL20vMDJteDZs?entry=ttu"
                            target="_blank">Znajdź nas na mapie 🌎</a></div>
                    <div class="fbYt">
                        <a href="https://www.facebook.com/profile.php?id=100089196045033" target="_blank"
                            class="fa fa-facebook"></a>
                        <a href="https://www.youtube.com" target="_blank" class="fa fa-youtube"></a>
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.containerC {
    text-align: justify;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 35%;
    background-color: #2a303c;
    border-radius: 1.5em;
}

.mapaF{
    margin-top: 12px;
    color: #c2d2e2;
}

.mapaLink:hover {
    opacity: 0.7;
}

.contactText {
    margin: 20px;
    font-size: 18px;

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

@media screen and (max-width: 800px) {
    .containerC {
    width: 80%;
}

#napiszMail {
    font-size: 15px;
}
}


</style>