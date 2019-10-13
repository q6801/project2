<template>
  <div class="container">
    <nav-contents></nav-contents>
    <router-view></router-view>
    <footer-contents></footer-contents>
  </div>
</template>

<script>
import navContents from '@/components/home/navigator.vue'
import footerContents from '@/components/home/footer.vue'

export default {
  components: {
    navContents,
    footerContents
  }
}
</script>
