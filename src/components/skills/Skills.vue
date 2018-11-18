<template>
    <div id="skills">
        <vuestic-widget class="no-v-padding">
            <vuestic-tabs class="tabs" :names="['Développeuse front-end', 'Développeuse back-end', 'Etudiante']">
                <div :slot="'Développeuse front-end'" class="d-flex justify-content-center">
                <front-end></front-end>
                </div>
                <div :slot="'Développeuse back-end'" class="d-flex justify-content-center">
                <back-end></back-end>
                </div>
                <div :slot="'Etudiante'" class="d-flex justify-content-center">
                <student></student>
                </div>
            </vuestic-tabs>
        </vuestic-widget>
    </div>
</template>

<script>
import FrontEnd from './FrontEnd'
import BackEnd from './BackEnd'
import Student from './Student'

export default {
    name: "skills",
    components: {
        FrontEnd,
        BackEnd,
        Student
    }
}
</script>

<style lang="scss" scoped>
    #skills {
        padding: $layout-padding;
        background-color: $light-gray;
        font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
        $singleGutter: #{(19/16)}rem;

        h1 {
            text-align: center;
            color: $dark-blue;
            font-size: 34px;
            margin-top: 10px;
        }

    }
</style>
