<template>
  <div>
    <div>{{this.$store.getters.userDataIndex + 1}} / {{totalQuestions}}</div>
    <app-question></app-question>
  </div>
</template>

<script>
import question from './Question.vue';

export default {
  components: {
    appQuestion: question
  },
  data () {
    return {
      totalQuestions: app.$store.getters.userAnswersData.length
    }
  },
  created() {
    window.setTimeout(function (){
      if (!app.$store.getters.isImagesLoaded) {
        app.$router.push('/');
      }
    },1500)

  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
