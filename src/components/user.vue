<template>
  <div id="user">
    <el-container>
      <el-header>
        <cw-header></cw-header>
      </el-header>
      <el-main>
        <div id="content">
          <router-view></router-view>
        </div>
      </el-main>
      <el-footer>
        <cw-footer></cw-footer>
      </el-footer>
    </el-container>
  </div>
</template>

<script>
export default {
  name: 'Test'
}
</script>

<style>
#user {
  width: 100%;
  background-color: #64696f;
}
html,body {
  margin: 0;
  padding: 0;
  height: 100%;
  overflow:auto
}
a {
  text-decoration: none;
}
.el-header, .el-footer {
    color: #333;
  }
  .el-header {
    padding: 0;
    height: 100px !important;
  }
  .el-footer {
    height: 100px;
  }
  .el-main {
    background-color: #E9EEF3;
    color: #333;
    padding: 0;
    margin: 0;
  }
</style>
