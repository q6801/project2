<template>
  <section>
    <div class="col-10 col-md-6 offset-md-3">
      <div @keyup.enter="">
        <div class="form-group">
          <label for="idInput">ID</label>
          <input type="text" class="form-control" v-model="id"
          id="idInput" placeholder="Enter your id">
        </div>
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" v-model="pw"
          id="passwordInput" placeholder="Enter your password" autofocus>
        </div>
        <button type="button" class="btn btn-primary" @click="check">Submit</button>
      </div>
      <p class="mb-5"><router-link :to="{ name: 'signUp'}">아직 회원이 아니시라구요? 그렇다면 이쪽으로 오세요</router-link></p>
    </div>
  </section>
</template>

<script>
export default {
  data: function() {
    return {
      id: null,
      pw: null
    }
  },
  methods: {
    check: function() {
      this.$store.state.allUsers.forEach(user => {
        if( user.id == this.id && user.pw == this.pw) {
          this.$store.state.signInState = true;
          this.$router.push({name: 'home'});
        }
        else {
          alert("틀렸습니다.")
        }
      })
    }
  }
}
</script>

<style lang="css" scoped>
</style>
