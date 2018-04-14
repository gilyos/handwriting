<template>
  <div>
    <h5>{{ TitleMsg }}</h5>
        <p>{{ AgeLabel }}</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <template v-for="range in AgeRanges">
          <label class="btn btn-outline-secondary">
            <input type="radio" name="options" id="option1" autocomplete="off"> {{range}}
          </label>
        </template>
        </div>
        <p>{{ GenderLabel }}</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <template v-for="gender in GenderSelection">
          <label class="btn btn-outline-secondary">
            <input type="radio" name="options" id="option1" autocomplete="off"> {{gender}}
          </label>
        </template>
        </div>
        <p>{{ EducationLabel }}</p>
        <div class="btn-group btn-group-toggle" data-toggle="buttons">
        <template v-for="education in EducationSelection">
          <label class="btn btn-outline-secondary">
            <input type="radio" name="options" id="option1" autocomplete="off"> {{education}}
          </label>
        </template>
        </div>
        </br>
                <button type="button" class="btn btn-primary" href='/userDetails'>{{btnMsg}}</button>
  </div>
</template>

<script>
export default {
  name: 'User Details',
  data () {
    return {
      TitleMsg: 'Please fill the following details',
      AgeLabel : 'Age',
      AgeRanges: ['18-29','30-49','50-64','65+'],
      GenderLabel : 'Gender',
      GenderSelection: ['Female', 'Male'],
      EducationLabel : 'Education',
      EducationSelection : ['high school', 'college', 'graduate degree'],
      btnMsg: 'Continue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style  scoped>

h5 {
  padding: 0px 5px 10px 10px;
  text-decoration: underline;
  text-transform: uppercase;
}
p {
  padding-top:15px;
}
button {
  margin: 30px;
}
</style>
