<template>
  <section class="container">
    <Header/>
  </section>
</template>

<script>
import '../sass/common.scss';
import Header from '../components/header.vue'
export default {
  components: {
    Header
  }
}
</script>

<style lang="scss" scoped>
#__nuxt,#__layout{
  width: 100%;
  height: 100%;
}
</style>
