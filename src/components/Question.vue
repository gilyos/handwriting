<template>
<div>
  <div class="questionsContainer" v-if=isActive>
    <img class='questionImg' :src="img" alt="">
    <div class="btnContainer">
       <button type="button" class="btn btn-primary btn-lg"><b>Male</b></button>
       <button type="button" class="btn btn-danger btn-lg"><b>Female</b></button> 
    </div>
  </div>
  <div v-else>
      <p>Loading...</p>
  </div>
</div>
</template>

<script>
export default {
  data () {
    return {
        userIndexQuestion : this.$store.getters.userDataIndex
    }
  },
  computed : {
      img() {
            if (this.$store.getters.userAnswersData.length > 0) {
                return this.$store.getters.userAnswersData[this.$store.getters.userDataIndex].imgUrl;
            }
            return null;
      },
      isAnswerAllQuestions() {
          if (this.$store.getters.userAnswersData.length == userIndexQuestion) {
                this.$router.push('complete')
          }
      },
      isActive() {
            return this.$store.getters.isImagesLoaded;
      }
  }, methods: {
      userAnswer(answer) {
          this.$store.dispatch('increaseUserDataIndex');
          this.$store.dispatch('setUserAnswer', answer);
          
      }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.questionImg {
    position: relative;
    width:95%;
    height:50%;
}

.btnContainer {
    position: relative;
    display: flex;
    text-align: center;
    justify-content: center;
}

button {
    width: 45%;
    padding: 7% 10% 7% 10%;
    margin: 20px 15px 2px 15px;
}

</style>
