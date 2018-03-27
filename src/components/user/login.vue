<template>
  <div id="login">
    <div id="login-dev">
      <el-form :model="form" :rules="rules" ref="form" label-width="80px">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username" placeholder="请输入用户名"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password" placeholder="请输入密码"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
          <el-button @click="resetForm()">重置</el-button>
        </el-form-item>
        <el-form-item>
          <div id="login-button">
            <router-link :to="{path: '/register'}">注册</router-link>
          </div>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
  import lib from '@/assets/js/lib.js'
  import { mapActions } from 'vuex'
  const {ajax, api} = lib
  export default {
    data () {
      return {
        form: {
          username: '',
          password: ''
        },
        rules: {
          username: [
            { required: true, message: '请输入用戶名', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密碼', trigger: 'blur' },
            { min: 3, message: '密码长度不能小于3位', trigger: 'blur' }
          ]
        }
      }
    },
    methods: {
      ...mapActions(['SYSTEM_SETLOGININFO']),
      resetForm () {
        this.form.username = ''
        this.form.password = ''
      },
      login (form) {
        this.$refs[form].validate((valid) => {
          if (valid) {
            let callback = (data) => {
              this.SYSTEM_SETLOGININFO(data)
              this.$router.push('/index')
              // window.history.go(0)
            }
            ajax(api.login, 'POST', this.form, callback)
          } else {
            console.log('error submit!!')
            return false
          }
        })
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
  #login-dev {
    float: right;
    width: 300px;
    height: 600px;
    margin-top: 300px;
    margin-right: 20%;
  }
</style>
