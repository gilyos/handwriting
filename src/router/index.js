import Vue from 'vue'
import Router from 'vue-router'
import Instractions from '@/components/Instractions'
import UserDetails from '@/components/UserDetails'
import QuestionsManager from '@/components/QuestionsManager'
import Complete from '@/components/Complete'
import BootstrapVue from 'bootstrap-vue'

Vue.use(BootstrapVue);

Vue.use(Router)



export default new Router({
  mode: 'history',
  routes: [
    {
      path: '/',
      name: 'instractions',
      component: Instractions
    },
    {
      path: '/userdetails',
      name: 'UserDetails',
      component: UserDetails
    },
    {
      path: '/questions',
      name: 'QuestionsManager',
      component: QuestionsManager
    },
    {
      path: '/complete',
      name: 'Complete',
      component: Complete
    },
  ]
})
