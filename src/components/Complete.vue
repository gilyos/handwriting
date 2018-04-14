<template>
  <div>
    <h1>{{ welecomeMsg }}</h1>
    <p>{{ instractionMsg }}</p>

  </div>
</template>

<script>
export default {
  name: 'Instractions',
  data () {
    return {
      welecomeMsg: 'Thank you!',
      instractionMsg: ''
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
