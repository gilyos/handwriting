// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router';
import router from './router'
import store from './store/store';
import VueResource from 'vue-resource';

/*
router.beforeEach((to, from, next) => {
  debugger;
})*/

Vue.config.productionTip = false
Vue.use(VueResource)

/* eslint-disable no-new */
window.app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})


var script_url = "https://script.google.com/macros/s/AKfycbz48_jYTfxjJzGLx4I_jTV1EU8xmLY8jGpN73e4ttilS9SVceMc/exec"
              


window.updateDB = function (type, userId,age,gender,eduction,userAnswer,correctAnswer,imageName) {
  var url = script_url+"?callback=ctrlq&" +
                        "type=" + type + 
                        "&userId=" + userId + 
                        "&age=" + age +
                        "&gender=" + gender +
                        "&eduction=" + eduction +
                        "&userAnswer=" + userAnswer +
                        "&correctAnswer=" + correctAnswer + 
                        "&imageName=" + imageName + 
                        "&action=insert"
  var request = jQuery.ajax({
    crossDomain: true,
    url: url ,
    method: "GET",
    dataType: "jsonp"
  });

  window.ctrlq = function (e) {
    console.log(e);  
  }
}
