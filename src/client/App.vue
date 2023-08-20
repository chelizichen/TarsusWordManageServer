<template>
  <div>
    <el-container>
      <Header></Header>
      <el-main style="margin-top: 70px;padding:0">
        <router-view></router-view>
      </el-main>
    </el-container>
  </div>
</template>

<script setup lang="ts">
import Header from '@/components/header/index.vue'
import Word from './Word.taro';
import {onMounted, ref} from 'vue';


onMounted(async () => {
  // isLoad.value = true
})
</script>

<style scoped></style>
