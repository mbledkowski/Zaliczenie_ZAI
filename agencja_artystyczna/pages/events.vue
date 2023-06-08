<template>
    <div class="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <div class="hero-overlay bg-opacity-60">
            <div class="containerE">
                <div class="eventsText">
                    <ol class="list-decimal">
                        <li>Koncert wokalny "Głosy Emocji":
                            Data: 15 lipca 2023
                            Miejsce: Teatr Miejski, Sala Koncertowa
                            Opis: Wyjątkowy wieczór pełen niesamowitych występów wokalnych. Zapraszamy na koncert, podczas
                            którego
                            utalentowani śpiewacy przeniosą nas swoimi głosami do świata emocji i piękna muzyki.</li>

                        <li>Wystawa malarstwa abstrakcyjnego "Kolory Wyobraźni":
                            Data: 25-30 sierpnia 2023
                            Miejsce: Galeria Sztuki Nowoczesnej
                            Opis: Ta fascynująca wystawa prezentuje prace utalentowanych artystów, którzy w swoich obrazach
                            eksplorują świat abstrakcji i kolorów. Zapraszamy na wirtualne i osobiste zwiedzanie, aby odkryć
                            piękno
                            i wyobraźnię przedstawione na płótnach.</li>

                        <li>Spektakl taneczny "Przełamanie Granic":
                            Data: 10 września 2023
                            Miejsce: Teatr Tańca Nowoczesnego
                            Opis: Doświadcz ekscytującego i energetycznego spektaklu tanecznego, który łączy różne style i
                            techniki
                            taneczne. Wybitni tancerze zaprezentują swoje umiejętności, wnosząc na scenę innowacyjne
                            choreografie i
                            pasję.</li>

                        <li>Koncert solowy pianisty "Melodia Serca":
                            Data: 5 października 2023
                            Miejsce: Sala Koncertowa Filharmonii
                            Opis: Zanurz się w świecie muzyki klasycznej podczas tego niezwykłego koncertu solowego
                            pianisty. Piękne
                            dźwięki fortepianu przeniosą Cię w podróż pełną emocji i refleksji.</li>

                        <li>Warsztaty rysunku dla początkujących:
                            Data: 20-22 listopada 2023
                            Miejsce: Pracownia Artystyczna "Kreatywność"
                            Opis: Jeśli marzysz o rozwoju swoich umiejętności artystycznych, te warsztaty są idealne dla
                            Ciebie.
                            Doświadczeni artyści poprowadzą zajęcia, podczas których odkryjesz tajniki rysunku i techniki
                            artystyczne.</li>
                    </ol>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="css" scoped>
.containerE {
    text-align: justify;
    position: absolute;
    top: 55%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 80%;
    background-color: #2a303c;
    border-radius: 1.5em;
}


.eventsText {
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

@media screen and (max-width: 800px) {
  .eventsText {
    margin: 5px;
    font-size: 10px;
  }
}

</style>