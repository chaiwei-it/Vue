<template>
  <div id="header">
    <div id="login-button">
      <a href="javascript:void(0)" v-if="login_info.data">
        {{ login_info.data[0].userName }}
      </a>
      <router-link :to="{path: '/login'}" v-else>登录</router-link>
    </div>
  </div>
</template>

<script>
  import { mapState } from 'vuex'
  export default {
    data () {
      return {

      }
    },
    props: {
      inter: {
        type: String
      }
    },
    computed: {
      ...mapState({
        login_info: state => state.system.login_info
      })
    }
  }
</script>

<style>
#header{
  background-color: #f8f8f8;
  height: 100px !important;
}
#login-button{
  height: 100%;
  float: right;
  line-height: 100px;
  margin-right: 15%;
}
</style>
