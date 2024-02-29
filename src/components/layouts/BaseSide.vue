<template>
  <el-menu
      default-active="/gamecp"
      class="el-menu-vertical-demo"
      @open="handleOpen"
      @close="handleClose"
      :router="true"
  >
    <el-menu-item index="/gamecp" >
      <el-icon><user /></el-icon>
      <template #title>Аккаунт</template>
    </el-menu-item>
    <el-menu-item index="/gamecp1">
      <el-icon><Coin /></el-icon>
      <template #title>Кошелек</template>
    </el-menu-item>
    <el-sub-menu index="/gamecp2">
      <template #title>
        <el-icon><ShoppingBag /></el-icon>
        <span>Предметы</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="/gamecp3">item one</el-menu-item>
        <el-menu-item index="/gamecp4">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="/gamecp5">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="/gamecp">
        <template #title><span>item four</span></template>
        <el-menu-item index="/gamecp6">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-sub-menu index="/gamecp7">
      <template #title>
        <el-icon><Avatar /></el-icon>
        <span>Персонажи</span>
      </template>
      <el-menu-item-group>
        <template #title><span>Group One</span></template>
        <el-menu-item index="/gamecp8">item one</el-menu-item>
        <el-menu-item index="/gamecp9">item two</el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="Group Two">
        <el-menu-item index="/gamecp10">item three</el-menu-item>
      </el-menu-item-group>
      <el-sub-menu index="/gamecp11">
        <template #title><span>item four</span></template>
        <el-menu-item index="/gamecp12">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item @click="authService.logout()">
      <el-icon><setting /></el-icon>
      <template #title>Выход</template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from "@element-plus/icons-vue";

import authService from "~/services/authService";

const isCollapse = ref(true);
const handleOpen = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
const handleClose = (key: string, keyPath: string[]) => {
  console.log(key, keyPath);
};
</script>