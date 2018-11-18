<template>
    <div id="front-end">
        Je suis spécialisée dans le développement front-end. [...]

        <h2> Technologies maîtrisées </h2>

        <div class="libs-icons">
            <img class="lib-icon" src="../../assets/icons/angular.svg" />
            <img class="lib-icon" src="../../assets/icons/node.svg" />
            <img class="lib-icon" src="../../assets/icons/html5.svg" />
        </div>

        <h2> Environnement de travail </h2>
    </div>
</template>

<script>
export default {
    name: 'front-end'
}
</script>

<style lang="scss" scoped>
    #front-end {

        h2 {
            margin-top: 20px;
            font-size: 24px;
            color: $dark-blue;
            text-align: center;
        }

        .lib-icon {
            width: 80px;   
            margin-right: 20px;
        }
    }
</style>
