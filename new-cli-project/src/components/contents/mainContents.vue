<template>
  <div class="container">
    <div class="row mb-5">
      <article>
        <div class="row">
          <div class="col-md-3" v-for="something in src">
            <img :src="something.source" class="img-fluid">
          </div>
          <div class="col-md-3 text-right" >
            <div v-if="$store.state.signInState">
              <router-link :to="{ name: 'signIn' }" role="button"> 로그아웃 </router-link>
            </div>
            <div v-else>
              <router-link class="mr-3" :to="{ name: 'signIn' }" > 로그인 </router-link>
              <router-link :to="{ name: 'signUp' }" role="button"> 회원가입 </router-link>
            </div>
          </div>
        </div>
      </article>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      src: [
        { name: 'YooAh', source: require('@/assets/YooAh.jpg') },
        { name: 'Arin', source: require('@/assets/Arin.jpg') },
        { name: 'YeoEun', source: require('@/assets/YeoEun.jpg') }
      ]
    }
  }
}
</script>

<style lang="css" scoped>
</style>
