import Vue from 'vue'
import Router from 'vue-router'
import Instractions from '@/components/Instractions'
import TransitionScreen from '@/components/TransitionScreen'
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
      name: 'userdetails',
      component: UserDetails
    },
    {
      path: '/transitionscreen',
      name: 'transitionScreen',
      component: TransitionScreen
    },
    {
      path: '/questions',
      name: 'questionsManager',
      component: QuestionsManager
    },
    {
      path: '/complete',
      name: 'complete',
      component: Complete
    },
  ]
})
