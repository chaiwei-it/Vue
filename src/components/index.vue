<template>
  <div id="index">
    <el-container>
      <el-header>
        <cw-header></cw-header>
      </el-header>
      <el-main>
        <div id="nav">
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="horizontal"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-menu-item index="1"><router-link :to="{path: '/index'}"><div class="div-button">首页</div></router-link></el-menu-item>
            <el-menu-item index="2"><router-link :to="{path: '/note'}"><div class="div-button">文章</div></router-link></el-menu-item>
            <el-menu-item index="3"><router-link :to="{path: '/catalog'}"><div class="div-button">分类</div></router-link></el-menu-item>
          </el-menu>
        </div>
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
  data () {
    return {
      activeIndex: '1',
      activeIndex2: '1'
    }
  }
}
</script>

<style>
#index {
  min-width: 1024px;
  max-width: 1366px;
  margin: auto;
  width: 100%;
  overflow: auto;
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
.el-container {
  height: 100%;
  overflow: auto;
}
.el-header, .el-footer {
  color: #333;
}
.el-header {
  padding: 0;
  height: 100px !important;
}
.el-footer {
  padding: 0;
  margin: 0;
  height: 100px !important;
}
.el-main {
  background-color: #E9EEF3;
  color: #333;
  padding: 0;
  margin: 0;
}
#content {
  min-height: 700px;
}
#nav ul li {
  padding: 0;
  margin: 0;
  float: left;
  width: 100px;
}
.div-button {
  width: 100%;
  text-align: center;
}
.table {
  margin: 32px;
}
</style>
