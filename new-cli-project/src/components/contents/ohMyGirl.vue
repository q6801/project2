<template lang="html">
  <h1>오마이걸</h1>
</template>

<script>
export default {
  beforeRouteEnter: function(to, from, next) {
    if(this.$store.state.signInState == false) {
      alert("로그인을 해주세요");
      next('home');
    }
  }
}
</script>

<style lang="css" scoped>
</style>
