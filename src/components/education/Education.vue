<template>
    <div id="education">

        <vuestic-widget class="no-h-padding no-v-padding" :headerText="'Formation'">
        <vuestic-timeline vertical centered>
            <vuestic-timeline-item>
            <span class="vuestic-timeline-item__text" slot="before"> 2017 - 2019 </span>
            <vuestic-card
                slot="after"
                theme="dark"
            >
                <template slot="title">Master Informatique Collaborative en Entreprise</template>
                lorem ipsum 
            </vuestic-card>
            </vuestic-timeline-item>
            <vuestic-timeline-item active>
            <span class="vuestic-timeline-item__text" slot="before"> 2014 - 2017 </span>
            <vuestic-card
                slot="after"
                theme="dark"
            >
                <template slot="title">Licence Mathématiques et Informatique Appliquées aux Sciences Humaines et Sociales </template>
                lorem ipsum
            </vuestic-card>
            </vuestic-timeline-item>
            <vuestic-timeline-item active>
            <span class="vuestic-timeline-item__text" slot="after"> 2014 </span>
            <vuestic-card
                slot="before"
            >
                <template slot="title">Baccalauréat Scientifique</template>
                Obtention du Baccalauréat Scientifique mention bien.
            </vuestic-card>
            </vuestic-timeline-item>
        </vuestic-timeline>
        </vuestic-widget>
    </div>
</template>

<script>
export default {
    name: 'education'
}
</script>

<style lang="scss" scoped>
    #education {
        padding: $layout-padding;
    }
</style>
