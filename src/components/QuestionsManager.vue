<template>
  <div>
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
     
    }
  }
 
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
