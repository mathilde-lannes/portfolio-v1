import Vue from 'vue'
import Router from 'vue-router'
import AppLayout from '../components/AppLayout'

Vue.use(Router)

const EmptyParentComponent = {
  template: '<router-view></router-view>',
}

export default new Router({
  routes: [
    {
      path: '*',
      redirect: { name: 'home' },
    },
    {
      name: 'home',
      path: 'home',
      component: AppLayout,
      default: true
    }
  ],
})
