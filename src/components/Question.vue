<template>
<div>
  <div class="questionsContainer" v-if=isActive>
    <img class='questionImg' :src="img" alt="">
    <div class="btnContainer">
       <button type="button" @click="userAnswer(rightMark)" class="btn btn-danger btn-lg" v-bind:disabled="btnDisabled" ><b>{{rightOption}}</b></button>
       <button type="button" @click="userAnswer(leftMark)" class="btn btn-primary btn-lg" v-bind:disabled="btnDisabled"><b>{{leftOption}}</b></button> 
    </div>
  </div>
  <div v-else>
      <p>Loading...</p>
  </div>
</div>
</template>

<script>
export default {
  data() {
    return {
      userIndexQuestion: 0,
      btnDisabled: false,
      leftMark: this.$store.getters.getLeftMarkSelection,
      rightMark: this.$store.getters.getRightMarkSelection,
      leftOption: this.$store.getters.getLeftSelection,
      rightOption: this.$store.getters.getRightSelection,
      totalQuestions:
        app.$store.state.questionsModule.questions[
          app.$store.state.questionsModule.questions.currentQuestionLang
        ]
    };
  },
  computed: {
    totalQuestionsForEnAndHeb() {
      if (
        app.$store.state.questionsModule.questions.currentQuestionLang == "en"
      ) {
        return Number(
          app.$store.state.questionsModule.questions[
            app.$store.state.questionsModule.questions.currentQuestionLang
          ]
        );
      } else {
        return (
          Number(
            app.$store.state.questionsModule.questions[
              app.$store.state.questionsModule.questions.currentQuestionLang
            ]
          ) + Number(app.$store.state.questionsModule.questions.en)
        );
      }
    },
    img() {
      debugger;
      if (
        this.$store.getters.userAnswersData.length > 0 &&
        //&& this.$store.getters.userDataIndex < this.$store.getters.userAnswersData.length) {
        this.$store.getters.userDataIndex < this.totalQuestionsForEnAndHeb
      ) {
        var index = this.$store.getters.userDataIndex;
        if (
          app.$store.state.questionsModule.questions.currentQuestionLang ==
          "heb"
        ) {
          index = this.$store.getters.userDataIndex; //+  Number(app.$store.state.questionsModule.questions.en);
        }
        return this.$store.getters.userAnswersData[index].imgUrl;
        //return this.$store.getters.userAnswersData[this.$store.getters.userDataIndex].imgUrl;
        //} else if (this.$store.getters.userAnswersData.length == this.$store.getters.userDataIndex) {
      } else if (this.totalQuestions <= this.$store.getters.userDataIndex) {
        debugger;
        if (
          app.$store.state.questionsModule.questions.currentQuestionLang == "en"
        ) {
          this.$store.state.userAnswerIndex = 0;
          app.$store.state.questionsModule.questions.currentQuestionLang =
            "heb";
          this.$router.push("transitionscreen");
        } else {
          debugger;
          this.$router.push("complete");
        }
      }
      return null;
    },
    isActive() {
      return this.$store.getters.isImagesLoaded;
    }
  },
  methods: {
    userAnswer(answer) {
      this.$store.dispatch("setUserAnswer", answer);
      this.delayAnswer();
    },
    delayAnswer() {
      this.btnDisabled = true;
      window.setTimeout(
        function(_this) {
          _this.btnDisabled = false;
        },
        800,
        this
      );
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.questionImg {
  position: relative;
  width: 95%;
  height: 50%;
  background-color: rgba(0, 0, 0, 0.25);
  border: 2px solid rgba(0, 0, 0, 0.6);
  border-radius: 10px;
}

.btnContainer {
  display: flex;
  text-align: center;
  justify-content: center;
  position: absolute;
  width: 96%;
  bottom: 15px;
  left: 2%;
}

button {
  width: 45%;
  padding: 7% 10% 7% 10%;
  margin: 20px 15px 2px 15px;
}
</style>
