<template>
    <div class="containerFooter">
        <footer>
            <div class="mapa">Znajdź nas na mapie</div>
            <div class="fbYt">FB, YT</div>
        </footer>
    </div>
</template>

<style lang="css" scoped>

.containerFooter {
    background-color: #20242e;
}

footer {
    background-color: #2a303c;
    align-content: space-between;
    align-items: end;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    border-radius: 0.5rem;
}

footer div {
    margin: 10px;
}

.mapa {
    font-size: 25px;
}

.fbYt {
    font-size: 25px;
}
</style>