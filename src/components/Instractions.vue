<template>
  <div v-if=isBroswerSupport>
    <h1>{{ welecomeMsg1 }}</h1>
    <h2>{{ welecomeMsg2 }}</h2>
    
    </br>
    <p>{{ instractionMsg1 }}</p>
    <p>{{ instractionMsg2.replace(/\%/,  this.$store.getters.getNumberEnQuestions)
      .replace(/\*/, this.$store.getters.getNumberHebQuestions) }}</p>
    <p>{{ instractionMsg3.replace(/\%/, this.$store.getters.getLeftSelection)
      .replace(/\*/, this.$store.getters.getRightSelection) }}</p>
    <p>{{ instractionMsg4 }}</p>
    <p>{{ instractionMsg5 }}</p>
    <p>{{ instractionMsg6 }}</p>
    <p>{{ instractionMsg7 }}</p>
    </br>
    <router-link to="/userdetails">
    <button type="button" class="btn btn-primary" href='/userdetails'>{{btnMsg}}</button>
    </router-link>

  </div>
  <div v-else>
     <h2>{{ openOnSafariIOS }}</h2>
  </div>
</template>

<script>
export default {
  name: "Instractions",
  data() {
    return {
      openOnSafariIOS: 'This web application does not support Chrome broswer in IOS. Please open this URL in Safari broswer.',
      welecomeMsg1: "סקר זיהוי מגדר",
      welecomeMsg2: "לפי כתב היד",
      instractionMsg1:
        "במסגרת לימודי תואר שני במדעי המחשב, אני חוקר את יכולת הזיהוי של מאפיינים דמוגרפיים העולים מכתב יד באמצעות אלגוריתם בינה מלאכותית.‏",
      instractionMsg2: "לפניכם יוצגו * כתבי יד בעברית ו-% כתבי יד באנגלית.‏",
      instractionMsg3:
        "בסקר זה תיבחן היכולת שלכם להכריע האם הקטע נכתב על ידי % או *.‏",
      instractionMsg4: "‏‏משך הסקר הוא כדקה, אנא מלאו את הסקר בתשומת לב.‏",
      instractionMsg5: "בתום השאלון תוצג רמת הדיוק שלכם בכל שפה.‏",
      instractionMsg6: "הסקר הינו אנונימי וישמש לצרכי מחקר.‏",
      instractionMsg7: ".תודה רבה על השתתפותכם",
      btnMsg: "המשך",
      isBroswerSupport: !(navigator.userAgent.match('CriOS') != null && navigator.userAgent.toLowerCase().match(/iphone|ipad/) != null)
    };
  },
  created() { 
    if (typeof this.$route.query.qt != "undefined") {
      if (this.$route.query.qt == 1) {
        this.$store.dispatch("setSelectionOptions", {
          left: "זכר",
          leftMark: "M",
          right: "נקבה",
          rightMark: "F",
          type: this.$route.query.qt
        });
      } else if (this.$route.query.qt == 2) {
        this.$store.dispatch("setSelectionOptions", {
          left: "ימני",
          leftMark: "L",
          right: "שמאלי",
          rightMark: "R",
          type: this.$route.query.qt
        });
      }
    } else {
      this.$store.dispatch("setSelectionOptions", {
        left: "זכר",
        leftMark: "M",
        right: "נקבה",
        rightMark: "F",
        type: 1
      });
    }
    if (typeof this.$route.query.en != "undefined") {
      this.$store.dispatch("setNumberEnQuestions", this.$route.query.en);
    }
    if (typeof this.$route.query.heb != "undefined") {
      this.$store.dispatch("setNumberHebQuestions", this.$route.query.heb);
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h2 {
  margin-top: -15px;
}
p {
  padding: 0px 20px 0px 15px;
  text-align: right;
  line-height: 17px;
}

.btn {
  font-size: 18px;
}
</style>
