
<template>
  <div class="box-bubble">
    <div class="bubble bubble-1" @click="to('user')">用户</div>
    <div class="bubble bubble-2" @click="to('record')">历史</div>
    <div class="bubble bubble-3" @click="setVisable()">
      记录
    </div>
    <div class="bubble bubble-4" @click="to('sign')">打卡</div>
    <div class="bubble bubble-5">查询</div>
    <div class="bubble bubble-6" @click="to('plan')">计划</div>
    <div class="bubble bubble-7">分类</div>
    <div class="bubble bubble-8">进度</div>
    <div class="bubble bubble-9">统计</div>
    <!-- <div class="bubble bubble-center">START</div> -->
    <Record></Record>
    <Translates></Translates>
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import store from "../../store/index";
const appStore = store.app;
import Record from "@/components/record/words.vue";
import Translates from "@/components/record/translates.vue";
const router = useRouter();

function to(path: string) {
  let baseAdminPath = "/manage/";
  path = baseAdminPath + path;
  router.push(path);
}

function setVisable(){
  appStore.setRemindWordVisable(true)
}
</script>

<style scoped lang="less">
.box-bubble {
  z-index: 999;
  .bubble-1 {
    left: 20px;
    top: 100px;
    //top: 100px;
    //left: 30px;
  }
  .bubble-2 {
    left: 20px;
    top: 160px;
    //top: 150px;
    //left: 90px;
  }
  .bubble-3 {
    left: 20px;
    top: 220px;
    //top: 200px;
    //left: 140px;
  }
  .bubble-4 {
    left: 20px;
    top: 280px;
    //top: 250px;
    //left: 180px;
  }
  .bubble-5 {
    left: 20px;
    top: 340px;
    //top: 310px;
    //left: 200px;
  }
  .bubble-6 {
    left: 20px;
    top: 400px;
    //top: 370px;
    //left: 180px;
  }
  .bubble-7 {
    left: 20px;
    top: 460px;
    //top: 420px;
    //left: 140px;
  }
  .bubble-8 {
    left: 20px;
    top: 520px;
    //top: 470px;
    //left: 90px;
  }
  .bubble-9 {
    left: 20px;
    top: 580px;
    //top: 520px;
    //left: 30px;
  }
  .bubble-center {
    top: 280px;
    right: 20px;
    background-color: rgb(19, 158, 160) !important;
    width: 100px !important;
    height: 100px !important;
    line-height: 100px !important;
    font-size: 24px !important;
  }
  .bubble {
    width: 50px;
    height: 50px;
    background-color: #1374e9;
    color: white;
    text-align: center;
    line-height: 50px;
    border-radius: 50%;
    font-size: 14px;
    position: absolute;
    cursor: pointer;
  }
}
</style>