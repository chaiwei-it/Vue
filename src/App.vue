<template>
  <div id="app">
    <div class="app" v-if="user.indexOf($route.path) != -1">
      <cw-user></cw-user>
    </div>
    <div class="app" v-else>
      <cw-index></cw-index>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'App',
    data () {
      return {
        index: ['/index'],
        user: ['/register', '/login']
      }
    }
  }
</script>

<style lang="less">
  @import "./assets/css/app.less";
</style>
