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
    border-radius: 0.5rem;
    margin-bottom: 20px;
    margin: auto;
    width: 98%;
}

footer div {
    padding-top: 5px;
    padding-bottom: 5px;
}

.agencjaF {
    padding-top: 15px;
    margin-left: 10px;
    font-size: 18px;
}

.mapaF {
    padding-top: 10px;
    font-size: 23px;
    margin-right: 80px;
}

.mapaLink:hover {
    opacity: 0.7;
}

.fbYt {
    font-size: 20px;
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
    footer {
        width: 600px;
    }
    .mapaF {
        font-size: 18px;
    }

    .agencjaF {
        padding-top: 15px;
        font-size: 13px;
    }
}
</style>