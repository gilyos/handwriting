<template>
  <div>
    <div class='process'>{{curentUserIndex + 1}} / {{totalQuestions}}</div>
    <app-question></app-question>
  </div>
</template>

<script>
import question from "./Question.vue";

export default {
  components: {
    appQuestion: question
  },
  data() {
    return {
      totalQuestions:
        app.$store.state.questionsModule.questions[
          app.$store.state.questionsModule.questions.currentQuestionLang
        ]
      //totalQuestions: app.$store.getters.userAnswersData.length
    };
  },
  computed: {
    curentUserIndex() {
      debugger;
      if (
        app.$store.state.questionsModule.questions.currentQuestionLang == "heb"
      ) {
        return (
          Number(this.$store.getters.userDataIndex) -
          Number(app.$store.state.questionsModule.questions.en)
        );
      } else {
        return Number(this.$store.getters.userDataIndex);
      }
    }
  },
  created() {
    window.setTimeout(function() {
      if (!app.$store.getters.isImagesLoaded) {
        app.$router.push("/");
      }
    }, 1500);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.process {
  border:2px solid rgba(0,0,0,0.8);
  border-radius: 7px;
  line-height: 21px;
  text-align: center;
  margin: 0 40% 0 40%;
  font-weight: bolder;
  color: rgba(0,0,0,0.8);
  margin-bottom:10px;
}
</style>
