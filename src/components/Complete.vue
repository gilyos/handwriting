<template>
  <div>
    <h1>{{ welecomeMsg }}</h1>
      <p>{{answerResultsMsg}}</p>
      <p>{{answerResultsEnMsg.replace(/\%/,enLbRes)}}</p>
      <p>{{answerResultsHebMsg.replace(/\%/,hebLbRes)}}</p>
    <div v-if=isThereOtherSurvey>
      <p>{{ instractionMsg }}</p>

      <button type="button" class="btn btn-primary" @click="startNewSurvey()">{{btnMsg1}}</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "Instractions",
  data() {
    return {
      welecomeMsg: "תודה על השתתפותך.‏",
      answerResultsMsg: ':להלן רמת דיוקך בסקר כתב יד לפי מגדר',
      answerResultsEnMsg: 'בשפה האנגלית: צדקת ב %‏',
      answerResultsHebMsg: 'בשפה העברית: צדקת ב %‏',
      enRes: app.$store.state.questionsModule.questions.currectAnswersOn_en,
      hebRes: app.$store.state.questionsModule.questions.currectAnswersOn_heb,
      enQuestions: this.$store.getters.getNumberEnQuestions,
      hebQuestions: this.$store.getters.getNumberHebQuestions,
     
      instractionMsg:
        "משימת זיהוי יד דומיננטית של כותב (ימני או שמאלי), הינה משימה מאתגרת יותר, האם תרצה להשתתף בסקר על זיהוי היד הדומיננטית של הכותב?‏",
      btnMsg1: "אני מסכים",
      btnMsg2: "לא תודה",

      isThereOtherSurvey: false //this.$store.getters.getTypeSelection == 1 ? true : false
    };
  },
  computed: {
    enLbRes() {
      return  '(' + this.enRes + '/' + this.enQuestions + ') ' 
      + (Number(this.enRes)/Number(this.enQuestions) * 100).toFixed(2) + '%';
    },
    hebLbRes() {
      return '(' + this.hebRes + '/' + this.hebQuestions + ') ' 
      + (Number(this.hebRes)/Number(this.hebQuestions)* 100).toFixed(2) + '%';
    }
  },
  created: function() {
    window.setTimeout(function() {
      if (!app.$store.getters.isImagesLoaded) {
        app.$router.push("/");
      }
    }, 1500);
  },
  methods: {
    startNewSurvey() {
      this.$store.dispatch("initUserDataIndex");
      window.questionIndex = 0;
      this.$store.dispatch("setSelectionOptions", {
        left: "ימני",
        leftMark: "L",
        right: "שמאלי",
        rightMark: "R",
        type: 2
      });

      this.$store.dispatch("initQuestionData");
      getAllListQuestions("en", app.$store.getters.getNumberEnQuestions, function() {
        getAllListQuestions("heb", app.$store.getters.getNumberHebQuestions);
        app.$router.push("questions");
      });


      //window.location.href = "/?en=" + this.enQuestions +  "&heb=" + this.hebQuestions + "&qt=2";
    },
    closeWindow() {
      window.close();
    }
  }
};
</script>

<style scoped>
div {
  padding: 12px;
}
</style>
