<template>
    <div class="hero min-h-screen" style="background-image: url(/images/stock/photo-1507358522600-9f71e620c44e.jpg);">
        <div class="hero-overlay bg-opacity-60">
            <div class="containerO">
                <div class="organizationText">
                    <p>W Naszej Agencji Artystycznej wiemy, że sukces artystyczny wymaga nie tylko
                        talentu, ale także solidnej organizacji i profesjonalnego podejścia. Dlatego staramy się zapewnić
                        naszym
                        artystom wsparcie na każdym etapie ich kariery.</p>

                    <p>Nasz zespół składa się z doświadczonych agentów artystycznych i menedżerów, którzy posiadają szeroką
                        wiedzę i kontakty w branży. Działamy jako pośrednicy pomiędzy naszymi artystami a klientami,
                        zapewniając
                        skuteczne negocjacje umów, organizację występów i promocję artystów.</p>

                    <p>Kiedy artysta dołącza do naszej agencji, przeprowadzamy szczegółowe spotkanie, aby lepiej poznać jego
                        cele, wizję i oczekiwania. Na podstawie tych informacji tworzymy spersonalizowany plan rozwoju
                        kariery,
                        który uwzględnia zarówno krótkoterminowe cele, jak i długoterminową strategię.</p>
                </div>
            </div>

            <div class="containerLiO">
                <div class="organizationText">
                    <p id="boldP">W ramach naszej organizacji artystycznej zajmujemy się szerokim spektrum działań, takich
                        jak:</p>
                    <ol class="list-decimal">

                        <li>Promocja i marketing: Wykorzystujemy nasze umiejętności marketingowe i kontakty, aby zapewnić
                            naszym
                            artystom szerokie możliwości promocji. Tworzymy strategie marketingowe, zarządzamy ich
                            obecnością w
                            mediach społecznościowych, organizujemy sesje zdjęciowe, tworzymy materiały promocyjne i
                            zapewniamy
                            obecność na branżowych wydarzeniach.</li>

                        <li>Organizacja występów i projektów: Zajmujemy się planowaniem, koordynacją i organizacją występów,
                            koncertów, sesji zdjęciowych, castingów i innych projektów artystycznych. Dbamy o logistykę,
                            harmonogramy, a także zapewniamy niezbędne zasoby i wsparcie techniczne.</li>

                        <li>Rozwój kariery: Pracujemy z naszymi artystami, aby wspierać ich rozwój i pomagać im osiągać
                            kolejne
                            cele. Śledzimy trendy w branży artystycznej, szukamy nowych możliwości i współpracujemy z innymi
                            profesjonalistami, aby maksymalnie wykorzystać potencjał naszych artystów.</li>
                    </ol>
                </div>
            </div>
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