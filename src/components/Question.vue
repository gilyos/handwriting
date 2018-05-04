<template>
<div>
  <div class="questionsContainer" v-if=isActive>
    <img class='questionImg' :src="img" alt="">
    <div class="btnContainer">
       <button type="button" @click="userAnswer(leftMark)" class="btn btn-danger btn-lg" v-bind:disabled="btnDisabled"><b>{{leftOption}}</b></button> 
       <button type="button" @click="userAnswer(rightMark)" class="btn btn-primary btn-lg" v-bind:disabled="btnDisabled" ><b>{{rightOption}}</b></button>
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
        userIndexQuestion : this.$store.getters.userDataIndex,
        btnDisabled : false,
        leftMark: this.$store.getters.getLeftMarkSelection,
        rightMark: this.$store.getters.getRightMarkSelection,
        leftOption: this.$store.getters.getLeftSelection,
        rightOption: this.$store.getters.getRightSelection
    }
  },
  computed : {
      img() {
            if (this.$store.getters.userAnswersData.length > 0 
            && this.$store.getters.userDataIndex < this.$store.getters.userAnswersData.length) {
                return this.$store.getters.userAnswersData[this.$store.getters.userDataIndex].imgUrl;
            } else if (this.$store.getters.userAnswersData.length == this.$store.getters.userDataIndex) {
                this.$router.push('complete')
            }
            return null;
      },
      isActive() {
            return this.$store.getters.isImagesLoaded;
      }
  }, methods: {
      userAnswer(answer) {
          this.$store.dispatch('setUserAnswer', answer); 
          this.delayAnswer();   
      },
      delayAnswer() {
          this.btnDisabled = true;
          window.setTimeout(function (_this) {
              debugger;
            _this.btnDisabled = false;
          },1000, this);          
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
    background-color: rgba(0,0,0,0.25);
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
