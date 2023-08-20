<template>
  <div>
    <el-carousel height="auto" autoplay>
      <el-carousel-item
        style="height: 800px"
        v-for="(item, index) in assets"
        :key="index"
      >
        <img :src="item" />
      </el-carousel-item>
    </el-carousel>
    <el-row class="tips">
      <el-col :sm="12" :lg="6">
        <el-result
          icon="success"
          title="用户账户和个人化设置"
          sub-title="提供个人化设置选项，如选择学习目标、难度级别、学习习惯等"
        >
          <template #extra>
            <el-button type="primary">START</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result
          icon="success"
          title="单词收集和分类"
          sub-title="允许用户添加新单词到系统中，包括单词本身、发音、定义和示例句子"
        >
          <template #extra>
            <el-button type="primary">START</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result
          icon="success"
          title="单词学习计划"
          sub-title="提供灵活的学习模式，如逐个单词学习、随机单词学习和按分类学习"
        >
          <template #extra>
            <el-button type="primary">START</el-button>
          </template>
        </el-result>
      </el-col>
      <el-col :sm="12" :lg="6">
        <el-result
          icon="success"
          title="进度跟踪和统计"
          sub-title="根据学习数据生成报告，让用户了解自己的学习效果和进展"
        >
          <template #extra>
            <el-button type="primary">START</el-button>
          </template>
        </el-result>
      </el-col>
    </el-row>
    <Footer/>
  </div>
</template>

<script setup lang="ts">
import Sky from "@/assets/sky.png";
import Cloudy from "@/assets/cloudy.png";
import Star from "@/assets/star.png";
import { useRouter } from "vue-router";
import { ref } from "vue";
import Footer from '@/components/footer/index.vue'
const router = useRouter();

const assets = ref([Sky, Cloudy, Star]);
</script>

<style scoped lang="less">
.tips :deep(.icon-success) {
  color: blue;
}
.tips :deep(.el-button--primary){
    background-color: blue;
    color: white;
}
</style>