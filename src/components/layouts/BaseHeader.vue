<script lang="ts" setup>
import { toggleDark } from "~/composables";
import authService from "~/services/authService";

</script>

<template>
  <el-menu class="el-menu-demo" mode="horizontal">
    <el-menu-item index="0">Nickname</el-menu-item>

    <div class="flex-grow" />
    <el-menu-item index="9" h="full" @click="toggleDark()">
      <button
        class="border-none w-full bg-transparent cursor-pointer"
        style="height: var(--ep-menu-item-height)"
      >
        <i inline-flex i="dark:ep-moon ep-sunny" />
      </button>
    </el-menu-item>

    <el-menu-item index="10" @click="authService.logout()">Logout</el-menu-item>
  </el-menu>
</template>

<style>


</style>