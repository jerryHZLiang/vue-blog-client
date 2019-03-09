<template>
  <div id="register">
    <h4>用户名</h4>
    <el-input v-model="username" placeholder="用户名"></el-input>
    <h4>密码</h4>
    <el-input v-model="password" type="password" placeholder="密码" @keyup.enter.native="onRegister"></el-input>
    <el-button size="medium"  @click='onRegister'>立即注册</el-button>
    <p class="notice">已有账号？<router-link to="/login">立即登录</router-link></p>
  </div>
</template>


<script src="./register.js"></script>
<style src="../Login/login.less" lang="less"></style>
