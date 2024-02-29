<template>
  <el-config-provider namespace="ep">
    <BaseHeader />
    <router-view/>
  </el-config-provider>
</template>

<style>

.main-container{
  height: 93vh;
}

#app {
  text-align: center;
}

</style>

<script setup lang="ts">

import BaseHeader from "~/components/layouts/BaseHeader.vue";
</script>