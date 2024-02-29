<template>
  <div class="flex gamecp-container">
    <BaseSide />
    <div w="full" py="4">
      <UserInfo/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import BaseSide from "~/components/layouts/BaseSide.vue";
import UserInfo from "~/components/layouts/UserInfo.vue";
import BaseHeader from "~/components/layouts/BaseHeader.vue";

</script>

<style >

.gamecp-container{
  height: 93vh;
  margin-left: auto;
  margin-right: auto;
}

</style>