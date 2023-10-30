<template>
  <el-config-provider namespace="ep">
        <a href="https://element-plus.org/" target="_blank">
          <img src="/element-plus-logo-small.svg" class="logo element-plus" alt="Element Plus logo" />
        </a>
        <div class = "logo-title">
          <h1 color="$ep-color-primary">NEXT RPG</h1>
        </div>
      <el-form :model="fLogin" class="login">
        <el-form-item prop="email">
          <el-input v-model="fLogin.email"  placeholder="Please input email"  />
        </el-form-item>
        <el-form-item prop="pass">
          <el-input v-model="fLogin.password" type="password" placeholder="Please input password" show-password  />
        </el-form-item>
        <el-form-item>
          <el-button-group style="width: 100% ; padding: 0px ;">
            <el-button @click="authUser" type="primary" style="width: 49%" >Login</el-button>
            <el-button @click="authUser" type="primary" style="width: 49%" >Register</el-button>
          </el-button-group>
        </el-form-item>
      </el-form>
  </el-config-provider>
</template>

<script lang="ts" setup>
import authService from "../services/authService"
import router from '../router/router'
import {ElMessage} from "element-plus";
import { reactive } from 'vue'

const fLogin = reactive({
  email:'',
  password:'',
})
async function authUser(){
  authService.authUser(fLogin.email,fLogin.password)
      .then(response => {
        localStorage.setItem('accessToken', response.data.access_token)
        localStorage.setItem('refreshToken', response.data.refresh_token)
        ElMessage.success("Successfully logged in");
        router.push('/')
        console.log(response)
      })
      .catch(e => {
        console.log(e);
      })
};
</script>

<style>

.el-form{
  width: 100px;
}

/**
.form {
  width: 400px;
  height: 130px;
  padding: 20px;
  border-radius: 10px;
}

.form {
  border: 1px solid #4c4d4f;
}

.auth {
  width: 50%;
  height: 100%;
  margin-top:100px;

}
.login-form {
  position: relative;
  left: 35%;
  margin-top: 30px;
}
*/

.logo-title {
  position: relative;
  margin-top:-20px;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
.logo.element-plus:hover {
  filter: drop-shadow(0 0 2em #409effaa);
}

</style>