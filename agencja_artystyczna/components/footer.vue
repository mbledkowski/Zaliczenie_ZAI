<template>
    <div class="containerFooter">
        <footer>
            <div></div>
            <div class="mapa">Znajdź nas na mapie</div>
            <div class="fbYt">
                <a href="https://www.facebook.com/profile.php?id=100089196045033">FB</a>
                <a href ="https://www.youtube.com">YT</a>
            </div>
        </footer>
    </div>
</template>

<style lang="css" scoped>
.containerFooter {
    background-color: #20242e;
}

footer {
    background-color: #2a303c;
    justify-content: space-between;
    flex-wrap: nowrap;
    display: flex;
    flex-direction: row;
    margin-left: 1.5rem;
    margin-right: 1.5rem;
    border-radius: 0.5rem;
}

footer div {
    margin-top: 10px;
    margin-bottom: 10px;
}

a {
    margin-left:10px;
    margin-right:10px;
}

.mapa {
    font-size: 25px;
    margin-left: 40px;
}

.fbYt {
    font-size: 25px;
}
</style>