<template>
  <vuestic-layout v-layout>
    <main slot="content" id="content" class="content" role="main">
      <vuestic-pre-loader v-show="isLoading" class="pre-loader"></vuestic-pre-loader>
      <welcome></welcome>
      <skills></skills>
      <education></education>
    </main>
    <span slot="footer">©2018. Made by&nbsp;<a href="https://github.com/mathilde-lannes" target="_blank">Mathilde Lannes </a></span>
  </vuestic-layout>
</template>

<script>

import VuesticLayout from '../vuestic-theme/vuestic-components/vuestic-layout/VuesticLayout'
import Welcome from './welcome/Welcome'
import Skills from './skills/Skills'
import Education from './education/Education'
import Layout from '../vuestic-theme/vuestic-directives/Layout'
import { mapGetters } from 'vuex'

export default {
  name: 'app-layout',

  components: {
    VuesticLayout,
    Welcome,
    Skills,
    Education
  },
  directives: {
    layout: Layout,
  },
  computed: {
    ...mapGetters([
      'isLoading'
    ])
  }
}
</script>
