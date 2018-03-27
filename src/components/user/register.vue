<template>
  <div id="register">
  	<div id="register-dev">
	    <el-form ref="form" :model="form" label-width="80px">
        <el-form-item label="用户名">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item label="确认密码">
          <el-input type="password" v-model="form.passwordAgain" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="register('form')">注册</el-button>
          <el-button @click="resetForm">重置</el-button>
        </el-form-item>
      </el-form>
	  </div>
  </div>
</template>

<script>
  import lib from '@/assets/js/lib.js'
  const {ajax, api} = lib
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        }
      }
    },
    methods: {
      register () {
        let callback = (data) => {
          this.$router.push('/index/login')
          window.history.go(0)
        }
        ajax(api.login, 'POST', this.form, callback)
      }
    }
  }
</script>

<style>
  .el-row {
    margin-bottom: 20px;
    &:last-child {
      margin-bottom: 0;
    }
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  #register-dev {
    float: right;
    width: 300px;
    height: 600px;
    margin-top: 300px;
    margin-right: 20%;
  }
</style>
