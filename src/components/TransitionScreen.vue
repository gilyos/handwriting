<template>
<div class='page'>
  <div class='langTitle'>
    <h1>{{ lang.replace(/\*/,currentLang) }}</h1>
    <!--<h2>{{ welecomeMsg2.replace(/\*/,currentLang) }}</h2>
    </br>
    <p>{{ instractionMsg1 }}</p>
   
    </br>
    <router-link to="/questions">
    <button type="button" class="btn btn-primary" href='/questions'>{{btnMsg}}</button>
    </router-link>
    -->
  </div>
  </div>
</template>

<script>
export default {
  name: "Transition Screen",
  data() {
    return {
      lang: "*",
      welecomeMsg1: "סקר זיהוי מגדר",
      instractionMsg1: "",
      welecomeMsg2: "לפי כתב יד ב*.‏",
      btnMsg: "התחל",
      currentLang:
        app.$store.state.questionsModule.questions.currentQuestionLang == "en"
          ? "אנגלית"
          : "עברית"
    };
  },
  created() {
    window.setTimeout(function() {
      app.$router.push("questions");
    }, 1200);
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->


<style scoped>
.page {
  height: 100%;
  width: 100%;
  position: absolute;
  /* Permalink - use to edit and share this gradient: http://colorzilla.com/gradient-editor/#000000+0,545454+82&0+5,1+82 */
  background: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(5, 5, 5, 0) 5%,
    rgba(84, 84, 84, 1) 82%
  ); /* FF3.6-15 */
  background: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0) 0%,
    rgba(5, 5, 5, 0) 5%,
    rgba(84, 84, 84, 1) 82%
  ); /* Chrome10-25,Safari5.1-6 */
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0) 0%,
    rgba(5, 5, 5, 0) 5%,
    rgba(84, 84, 84, 1) 82%
  ); /* W3C, IE10+, FF16+, Chrome26+, Opera12+, Safari7+ */
  filter: progid:DXImageTransform.Microsoft.gradient(
      startColorstr="#00000000",
      endColorstr="#545454",
      GradientType=0
    ); /* IE6-9 */
}
.langTitle {
  background-color: rgba(255, 255, 255,0.2);
  border:1px solid rgba(0,0,0,0.4);
  border-radius: 20px;
  margin: 50% 3% 3% 3%;
}
h1 {
  font-size: 60px;
  color: #fff;
    text-shadow: 1px 1px  rgba(0,0,0,0.4), -1px -1px #000, -1px 1px  rgba(0,0,0,0.4), 1px -1px #000;
}
h2 {
  margin-top: -15px;
}
p {
  padding: 0px 20px 0px 15px;
  text-align: right;
}

.btn {
  font-size: 18px;
}
</style>
