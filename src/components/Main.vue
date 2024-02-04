<script setup lang="ts">

import BaseHeader from "~/components/layouts/BaseHeader.vue";
import Promo from "~/components/Promo.vue";
import News from "~/components/News.vue";
import Features from "~/components/Features.vue"

</script>

<template>

<el-config-provider namespace="ep">
  <BaseHeader/>
  <div class="flex main-container">
    <Promo/>
  </div>
  <!--
  <Features/>
  <News/>
  -->
</el-config-provider>

</template>

<style>
.main-container {
  height: calc(100vh - var(--ep-menu-item-height) - 3px);
}
</style>