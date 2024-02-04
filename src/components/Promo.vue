<script setup lang="ts">
import { ElImage } from 'element-plus';

</script>

<template>
  <div w="full" py="4" class="server-open-title">
    <h1 color="$ep-color-warning" style="font-weight: bold;">RF BASE GAMES <br>Открытие летом 2024</h1>
    <el-space direction="vertical">
      <el-text class="mx-1" size="large" type="primary" color="white" >» Новый эпизод Age of Patron</el-text>
      <el-text class="mx-1" size="large" type="primary">» 81 уровень, опыт x15</el-text>
      <el-text class="mx-1" size="large" type="primary">» Защита сервера, пофикшены все дюпы</el-text>
      <el-text class="mx-1" size="large" type="primary">» Автотаргет в клиенте и автолут</el-text>
      <el-text class="mx-1" size="large" type="primary">» Аукцион предметов и аккаунтов на сайте</el-text>
      <el-text class="mx-1" size="large" type="primary">» Новые предметы, квесты и многое другое</el-text>
    </el-space>
    <h2 color="white" style="font-weight: bold;">Прогресс готовности к запуску</h2>
    <div class="server-progress">
      <el-progress :text-inside="true" :stroke-width="26" :percentage="30" status="warning" />
    </div>
    <div class="server-progress-steps">
      <el-steps :active="1" :align-center="true">
        <el-step title="Разработка" description="Игровой контент и аукцион" process-status="process"/>
        <el-step title="Запуск ОБТ" description="Апрель-Май" />
        <el-step title="Открытие" description="Июнь-Июль"/>
      </el-steps>
    </div>
    
    <h2 color="white" style="font-weight: bold;">Присоединяйся к нам в <a href="https://element-plus.org" target="_blank">Discord</a></h2>
  </div>
</template>

<style>
.server-open-title{
  height: 200px;
}

.server-progress{
  margin-top:20px;
  margin-left: auto;
  margin-right: auto;
  width:300px;
  justify-content: center;
}

.server-progress-steps{
  margin-top:20px;
  margin-left: auto;
  margin-right: auto;
  width:400px;
}

.server-progress .el-progress--line {
  margin-bottom: 15px;
  width: 300px;
}

</style>