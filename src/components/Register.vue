<template>
  <div class="register-container">
      <h2 color="white" style="font-weight: bold;">Регистрация</h2>
      <el-form :model="fLogin" class="login">
        <el-form-item prop="login">
          <el-input v-model="fLogin.login"  placeholder="Логин" >
            <template #prefix>
              <el-icon color="white"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="email">
          <el-input v-model="fLogin.email"  placeholder="Email" >
            <template #prefix>
              <el-icon color="white"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="password">
          <el-input v-model="fLogin.password" type="password" placeholder="Пароль" show-password>
            <template #prefix>
              <el-icon color="white"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="repeatPassword">
          <el-input v-model="fLogin.repeatPassword" type="password" placeholder="Повторите пароль" show-password>
            <template #prefix>
              <el-icon color="white"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="authUser" type="warning" style="margin: 0 auto">Создать аккаунт</el-button>
        </el-form-item>
        <el-form-item>
          <el-text class="mx-1" size="large" style="color:white; margin: 0 auto">Есть аккаунт?</el-text>
        </el-form-item>
        <el-form-item>
          <el-button @click="$router.push('auth')" type="primary" style="margin: 0 auto">Авторизоваться</el-button>
        </el-form-item>
      </el-form>
  </div>
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

.register-container{
  width: 300px;
  display: inline-block;
  justify-content: center;
  margin: 0 auto;
}

</style>