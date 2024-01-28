<template>

<el-config-provider namespace="ep">
  <!--
  <div class="common-layout">
    <el-container>
      <BaseHeader />
      <el-main class="main">
        <img src="/main-banner.webp" class="main-bg"/>

      </el-main>
      <el-footer>

      </el-footer>
    </el-container>
  </div>
  -->

  <BaseHeader/>
  <el-container class="main-container">
    <img src="/main-banner.webp" class="main-bg"/>
    <div class="main-container-gradient"></div>
    <div class="main-container-box">
      <span class="main-container-box-banner">RF Online AOP+</span>
        <h1 class="main-container-box-title">
          Новый сервер<br> BASE x2
        </h1>
        <h2 class="main-container-box-text">
          Дополнение Age Of Patron <br> Аукцион с предметами на сайте
        </h2>
        <el-button style="margin: 0 180px 0; font-family: 'Montserrat'; font-size: 16px" type="primary">Вступить в сообщество</el-button>
    </div>
  </el-container>

  <el-container class="second-container">
    <img src="/second-bg.webp" alt="" class="second-container-bg">
    <div class="second-container-box">
      <h1 class="second-container-box-title"></h1>
    </div>
  </el-container>

</el-config-provider>

</template>

<style>

.second-container-box-title{
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 64px;
  margin: 20px 0 16px;
  text-align: center;
}

.second-container-box{
  max-width: 700px;
  width: 100%;
  position: absolute;
  margin: auto;
  display: flex;
  flex-direction: column;
}

.second-container-bg {
  width: 100%;
  object-fit: cover;
  height: 800px;
}

.second-container{
  position: relative;
}


.main-container{
  position: relative;
  width: 100%;
  top: 0;
  left: 0;
}

.main-container-box{
  max-width: 700px;
  width: 100%;
  position: absolute;
  bottom: 0;
  top: 180px;
  margin: auto;
  right: 260px;
  display: flex;
  flex-direction: column;
}

.main-container-box-banner{
  width: 250px;
  height: 36px;
  background-size: contain;
  display: flex;
  justify-content: center;
  align-items: center;
  background-repeat: no-repeat;
  background-image: url("/man-banner-sub.svg");
  font-size: 24px;
  font-weight: 700;
  position: relative;
  margin-left: 200px;
}

.main-container-box-text{
  width: 493px;
  font-size: 20px;
  font-weight: 600;
  color: rgba(24, 41, 56, 1);
  line-height: 24px;
  margin: 0 100px 20px;
}

.main-container-box-title{
  width: 100%;
  font-size: 50px;
  font-weight: bold;
  text-transform: uppercase;
  line-height: 64px;
  margin: 20px 0 16px;

}

.main-container-button-box{
  display: flex;
  align-items: center;
}

.main-container-button-start{
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  color: rgba(255, 255, 255, 1);
  font-size: 16px;
  font-weight: 600;
  background: linear-gradient(rgba(9, 79, 184, 1), rgba(8, 184, 239, 1));
  width: 96%;
  height: 72px;
  border: 2px solid rgba(8, 184, 239, 1);
  text-decoration: none;
  box-shadow: rgba(10, 93, 192, 0.1);
  transition: all 1s;
}

.main-bg{
  width: 100%;
  object-fit: cover;
  height: 800px;
  object-position: 19% 0%;
}

.main-container-gradient{
  bottom: 0;
  left: 0;
  width: 100%;
  height: 293px;
  position: absolute;
  background: linear-gradient(rgba(5, 132, 202, 0), rgba(5, 132, 202, 1));
}




</style>
<script setup lang="ts">

import BaseHeader from "~/components/layouts/BaseHeader.vue";
</script>