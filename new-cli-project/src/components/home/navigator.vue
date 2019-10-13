<template>
  <nav>
    <div class="jumbotron">
      <h1 class="text-center display-3">걸그룹들을 알아보자</h1>
      <p class="text-center">내 취향을 알아보자.</p>
      <p class="text-center">
        <button type="button" class="btn btn-primary" @click="$router.push({name: 'home'})">시공!!</button>
      </p>
    </div>
    <div class="navbar navbar-light bg-light mb-4">
      <div v-for="group in groups">
          <router-link :to="{ name: group.locName}"> {{group.name}} </router-link>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  data: function() {
    return {
      groups: [
        { name: '트와이스', locName: null},
        { name: '레드벨벳', locName: null},
        { name: '오마이걸', locName: 'omg'},
        { name: '마마무', locName: null},
        { name: 'clc', locName: null}
      ]
    }
  }
}
</script>

<style lang="css" scoped>
  .jumbotron{
    background-image: url("../../assets/bg.jpg");
    background-size: cover;
    text-shadow: 2px 1px black;
    color: white;
  }
</style>
