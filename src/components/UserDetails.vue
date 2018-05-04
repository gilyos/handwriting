<template>
  <div>
    <h5>{{ TitleMsg }}</h5>
        <p>{{ AgeLabel }}</p>
        <div class="btn-group btn-group-toggle limit-width" data-toggle="buttons">
        <template v-for="range in AgeRanges">
          <label class="btn btn-outline-secondary" v-bind:data-val ="range">
            <input type="radio" name="options" autocomplete="off"> {{range}}
          </label>
        </template>
        </div>
        <p>{{ GenderLabel }}</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <template v-for="(gender, index) in GenderSelection">
          <label class="btn btn-outline-secondary" v-bind:data-val ="GenderMarks[index]">
            <input type="radio" name="options"  autocomplete="off"> {{gender}}
          </label>
        </template>
        </div>
        <p>{{ EducationLabel }}</p>
        <div class="btn-group btn-group-toggle limit-width" data-toggle="buttons">
        <template v-for="(education, index) in EducationSelection">
          <label class="btn btn-outline-secondary" v-bind:data-val ="EducationMarks[index]">
            <input type="radio" name="options"  value="g"  autocomplete="off"> {{education}}
          </label>
        </template>
        </div>
        </br>
        <button type="button" class="btn btn-primary" @click="submitDetails">{{btnMsg}}</button>
  </div>
</template>

<script>
export default {
  name: "User Details",
  data() {
    return {
      TitleMsg: "אנא מלא את הפרטים הבאים:‏",
      AgeLabel: "גיל",
      AgeRanges: ["<18", "18-24","25-35", "36-49", "50-64", "65>"],
      GenderLabel: "מגדר",
      GenderSelection: ["נקבה", "זכר"],
      GenderMarks: ["Female","Male"],
      EducationLabel: "השכלה",
      EducationSelection: ["אחר","דר'‏","תואר שני","תואר ראשון", "בוגר תיכון", "תלמיד תיכון"],
      EducationMarks: ["Other","Dr","First Degree","Second Degree","High School Diploma","High School Student"],
      btnMsg: "התחל בסקר"
    };
  },
  methods: {
    submitDetails() {
      if ($(".active").length == 3) {
        var selectedDetails = $(".active");
        var userDetails = this.$store.getters.userDetails;
        userDetails.age = $(selectedDetails[0]).attr("data-val");
        userDetails.gender = $(selectedDetails[1]).attr("data-val");
        userDetails.education = $(selectedDetails[2]).attr("data-val");
        this.$router.push("questions");
      }
    }
  },
  created() {
    debugger;
    this.$store.dispatch('setImagesLoadedStatus', true);
    getAllListQuestions("en", app.$store.getters.getNumberEnQuestions, function() {
      getAllListQuestions("heb", app.$store.getters.getNumberHebQuestions);
    });
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>
h5 {
  padding: 0px 5px 10px 10px;
  text-decoration: underline;
  text-transform: uppercase;
}
p {
  padding-top: 15px;
}
button {
  margin: 30px;
}

.limit-width {
    width: 300px;
    display: block;
    left: 50%;
    margin-left: -150px;
}
</style>
