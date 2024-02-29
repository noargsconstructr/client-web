<template>
    <div class="auth-container">
      <h2 color="white" style="font-weight: bold;">Авторизация</h2>
      <el-form :model="fLogin" class="login">
        <el-form-item prop="login">
          <el-input v-model="fLogin.login"  placeholder="Логин" >
            <template #prefix>
              <el-icon color="white"><User /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item prop="pass">
          <el-input v-model="fLogin.password" type="password" placeholder="Пароль" show-password>
            <template #prefix>
              <el-icon color="white"><Lock /></el-icon>
            </template>
          </el-input>
        </el-form-item>
        <el-form-item>
          <el-button @click="authUser" type="primary" style="margin: 0 auto">Войти</el-button>
        </el-form-item>
        <el-form-item>
          <el-text class="mx-1" size="large" style="color:white; margin: 0 auto">У вас еще нет аккаунта?</el-text>
        </el-form-item>
        <el-form-item>
          <el-button @click="$router.push('register')" type="warning" style="margin: 0 auto">Создать аккаунт</el-button>
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
  login:'',
  password:'',
})

async function authUser(){
  authService.authUser(fLogin.login,fLogin.password)
      .then(async response => {
        localStorage.setItem('accessToken', response.data.accessToken)
        localStorage.setItem('refreshToken', response.data.refreshToken)
        ElMessage.success("Successfully logged in");
        await router.push('/gamecp')
        console.log(response)
      })
      .catch(e => {
        console.log(e);
      })
};
</script>

<style>

.auth-container{
  width: 300px;
  display: inline-block;
  justify-content: center;
  margin: 0 auto;
}

</style>