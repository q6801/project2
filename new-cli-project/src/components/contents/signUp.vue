<template>
  <section>
  <div class="container">
    <div class="col-10 col-md-6 offset-md-3">
      <form action="process.php" method="post">
        <h1>회원가입</h1>
        <div class="form-group">
          <label for="idInput">ID</label>
          <input type="text" class="form-control" v-model="id"
          id="idInput" placeholder="Make your id">
        </div>
        <div class="form-group">
          <label for="passwordInput">Password</label>
          <input type="password" class="form-control" v-model="pw"
          id="passwordInput" placeholder="Make your password">
        </div>
        <div class="form-group">
          <label for="passwordRecheck">Password recheck</label>
          <input type="password" class="form-control" v-model="pwRecheck"
          id="passwordRecheck" placeholder="Recheck your password">
        </div>
          <div class="form-group">
            <label for="studentNumber">Student number</label>
            <input type="text" class="form-control" v-model="studentNumber"
            id="studentNumber" placeholder="Input your student number">
          </div>
        <div class="form-group">
          <label for="major">Major</label>
          <select class="form-control" id="major" v-model="majors">
            <option value="">Select your major</option>
            <option value="computer">computer engineering</option>
            <option value="machine">machine</option>
            <option value="mechatronics">mechatronics</option>
          </select>
        </div>

        <div class="form-group">
          <label for="phoneNumber">Phone number</label>
          <input type="text" class="form-control" v-model="phoneNumber"
          id="phoneNumber" placeholder="write your phone number except -">
        </div>
        <div class="form-group">
          <button type="button" class="btn btn-primary" @click="sendInfo"> Sign up </button>
          <a href="index.html" class="btn btn-secondary" role="button"> Cancel </a>
        </div>
      </form>
      <p class="mb-5"><router-link :to="{ name: 'signIn'}">이미 회원이라구요? 그렇다면 이쪽으로 오세요</router-link></p>
  </div>
</div>
</section>
</template>

<script>
export default {
  data: function() {
    return {
      id: null,
      pw: null,
      pwRecheck: null,
      studentNumber: null,
      majors: null,
      phoneNumber: null
    }
  },
  methods: {
    sendInfo: function() {
      if(this.pw != this.pwRecheck) {
        alert("비밀번호 불일치");
      }
      else {
        let user = {
          id: this.id,
          pw: this.pw,
          pwRecheck: this.pwRecheck,
          studentNumber: this.studentNumber,
          majors: this.majors,
          phoneNumber: this.phoneNumber
        };

        this.$store.state.allUsers.push(user);
        console.log(this.$store.state.allUsers);
        this.$router.push({name: 'home'});
      }
      this.clearUser();
    },
    clearUser: function() {
      this.id = null;
      this.pw = null;
      this.pwRecheck = null;
      this.studentNumber = null;
      this.majors = null;
      this.phoneNumber = null;
    }
  },

}
</script>

<style lang="css" scoped>
</style>
