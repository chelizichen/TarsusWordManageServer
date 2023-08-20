
<template>
  <div class="box-bubble">
    <div class="bubble bubble-1" @click="to('user')">用户</div>
    <div class="bubble bubble-2" @click="to('word')">单词</div>
    <div class="bubble bubble-3" @click="setVisable()">
      记录
    </div>
    <div class="bubble bubble-4">打卡</div>
    <div class="bubble bubble-5">查询</div>
    <div class="bubble bubble-6">计划</div>
    <div class="bubble bubble-7">分类</div>
    <div class="bubble bubble-8">进度</div>
    <div class="bubble bubble-9">统计</div>
    <!-- <div class="bubble bubble-center">START</div> -->
  </div>
</template>

<script lang="ts" setup>
import { useRouter } from "vue-router";
import store from "../../store/index";
const appStore = store.app;

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
  .bubble-1 {
    top: 100px;
    right: 30px;
  }
  .bubble-2 {
    top: 150px;
    right: 90px;
  }
  .bubble-3 {
    top: 200px;
    right: 140px;
  }
  .bubble-4 {
    top: 250px;
    right: 180px;
  }
  .bubble-5 {
    top: 310px;
    right: 200px;
  }
  .bubble-6 {
    top: 370px;
    right: 180px;
  }
  .bubble-7 {
    top: 420px;
    right: 140px;
  }
  .bubble-8 {
    top: 470px;
    right: 90px;
  }
  .bubble-9 {
    top: 520px;
    right: 30px;
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