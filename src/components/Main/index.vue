<template>
  <el-container class="container">
    <el-header class="header">
      <img src="./images/avatar.jpg" class="header_avatar">
      <el-menu class="header_nav" mode="horizontal" background-color="#303133" text-color="#C0C4CC" active-text-color="#909399" :default-active="$route.path" router>
        <el-menu-item index="/mySpace">MySpace</el-menu-item>
        <el-menu-item index="/myProjects">MyProjects</el-menu-item>
        <el-menu-item index="/information">Information</el-menu-item>
      </el-menu>
    </el-header>
    <el-main class="main">
      <router-view></router-view>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: "index"
}
</script>

<style lang="less" scoped>
  .container{
    background-color: #303133;
    .header{
      position: fixed;
      z-index: 999;
      display: flex;
      justify-content: center;
      align-items: center;
      width: 100%;
      height: 100%;
      padding: 0;
      background-color: #303133;
      .header_avatar{
        height: 80%;
        border-radius: 25%;
        margin-right: 20px;
      }
      .el-menu{
        border-bottom: none;
      }
    }
    .main{
      padding: 60px 0 0 0;
    }
  }
</style>
