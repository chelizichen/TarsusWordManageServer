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
import { onMounted } from 'vue';

onMounted(async () => {
  console.log(Word);
})
</script>

<style scoped></style>
