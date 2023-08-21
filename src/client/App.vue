<template>
  <div>
    <el-container>
      <Header></Header>
      <el-main style="margin-top: 60px;padding:0;background:#fff7e4;height:90vh">
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
