<template>
  <div class="app-container" style="margin-top: 50px">
    <div id="checkin-container">
      <div class="checkin-info">
        <div class="total-days">
          <span class="number" id="total-days">{{ totalDays }}</span>
          <span class="label">签到天数</span>
        </div>
        <div class="consecutive-days">
          <span class="number" id="consecutive-days">0</span>
          <span class="label">连续签到天数</span>
        </div>
      </div>
      <el-button @click="checkIn()" type="primary">签到</el-button>
    </div>
    <div class="sign">
      <GithubGraph :data="graphData"/>
    </div>
  </div>
</template>

<script lang="ts" setup>
import {defineComponent, onMounted, ref} from "vue";
import GithubGraph from "./GithubGraph.vue";
import {queryIdReq} from "@/dto/User";
import {getUserRecord} from "@/api/record";

async function GetUserRecord() {
  const req = new queryIdReq();
  req.id = 1;
  const res = await getUserRecord(req);
  const {data: rawData, total} = res;
  totalDays.value = total;
  const checkInData: { [key: string]: boolean } = {};
  rawData.forEach((item) => {
    // 提取日期（忽略时间）
    const date = item.create_time.split(" ")[0];

    // 判断是否签到
    const isRegistered = item.is_register === "1";

    // 更新签到信息
    checkInData[date] = isRegistered;
    const startDate = new Date("2023-01-01");

    const GraphData: number[] = Array.from({length: 7 * 52}, (_, index) => {
      const currentDate = new Date(startDate);
      currentDate.setDate(startDate.getDate() + index);

      const dateString = currentDate.toISOString().split("T")[0];
      return checkInData[dateString] ? 1 : 0;
    });
    graphData.value = GraphData;
    console.log(graphData.value);
  });
}

onMounted(async () => {
  await GetUserRecord();
});
const graphData = ref<number[]>();

let totalDays = ref(0);
let consecutiveDays = 0;

function checkIn() {
  const totalDaysElement = document.getElementById("total-days");
  const consecutiveDaysElement = document.getElementById("consecutive-days");

  totalDays.value = totalDays.value + 1;
  consecutiveDays++;

  // 禁用签到按钮，表示已签到

  // 添加动画（可自定义）
  totalDaysElement.classList.add("animate__animated", "animate__bounce");
  consecutiveDaysElement.classList.add("animate__animated", "animate__bounce");

  // 动画结束后移除动画类
  setTimeout(() => {
    totalDaysElement.classList.remove("animate__animated", "animate__bounce");
    consecutiveDaysElement.classList.remove(
        "animate__animated",
        "animate__bounce"
    );
  }, 1000);
}
</script>

<style scoped>
.sign {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}

#checkin-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
}

.checkin-info {
  display: flex;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
}

.total-days,
.consecutive-days {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.number {
  font-size: 24px;
  font-weight: bold;
}

.label {
  font-size: 14px;
  color: #666;
}

.checkin-button {
  padding: 10px 20px;
  font-size: 16px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.checkin-button:hover {
  background-color: #0056b3;
}

.checkin-button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}
</style>
