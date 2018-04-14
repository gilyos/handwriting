<template>
  <div>
    <h1>{{ welecomeMsg }}</h1>
    <p>{{ instractionMsg }}</p>
    
    <router-link to="/questions">
    <button type="button" class="btn btn-primary" href='/questions'>{{btnMsg}}</button>
    </router-link>

  </div>
</template>

<script>
export default {
  name: 'Instractions',
  data () {
    return {
      welecomeMsg: 'Welcome',
      instractionMsg: 'Write here the instractions',
      btnMsg: 'Continue'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
