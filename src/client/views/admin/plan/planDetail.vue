<template>
  <div class="app-container">
    <div>
      <el-button @click="visible = true" type="primary">
        创建新的计划
      </el-button>
    </div>
    <div>
      <el-divider content-position="right">我的计划</el-divider>
      <el-table border :data="list">
        <el-table-column label="序号" type="index" align="center"></el-table-column>
        <el-table-column label="已完成" prop="is_mark" align="center">
          <template #default="scope">
            {{ scope.row.is_mark == 0 ?"未完成":"已完成"}}
          </template>
        </el-table-column>
        <el-table-column label="开始时间" prop="plan_start_time" align="center"></el-table-column>
        <el-table-column label="结束时间" prop="plan_end_time" align="center"></el-table-column>
        <el-table-column label="创建时间" prop="create_time" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button type="primary" @click="AddPlan(scope.row)">添加复习计划</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="visible" :show-close="true" width="400px">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">自定义计划</h4>
        </div>
      </template>
      <el-form label-width="100px">
        <el-form-item label="开始时间">
          <el-date-picker
              v-model="startTime"
              type="date"
              placeholder="请选择开始时间"
          />
        </el-form-item>
        <el-form-item label="结束时间">
          <el-date-picker
              v-model="endTime"
              type="date"
              placeholder="请选择结束时间"
          />
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="SavePlan()">提交</el-button>
        </el-form-item>
      </el-form>
    </el-dialog>
    <el-dialog v-model="wordsVisible" :show-close="true" width="1200px">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">添加单词计划</h4>
        </div>
      </template>
      <div>

      </div>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, ref} from 'vue'
import {ElButton, ElDialog, ElNotification} from 'element-plus'
import {PlanDetail, PlanWords} from "@/dto/Plan";
import moment from "moment";
import {savePlan, getPlansByUser, savePlanWords} from "@/api/plan";

const startTime = ref('')
const endTime = ref('')
const visible = ref(false)
const word_ids = ref('')
const mark_date = ref('')
const plan_id = ref('');
const list = ref([])
const wordsVisible = ref(true)
async function SavePlan() {
  let dto = new PlanDetail()
  dto.create_time = moment().format("YYYY-MM-DD HH:mm:ss")
  dto.is_mark = "0"
  dto.plan_end_time = moment( endTime.value).format("YYYY-MM-DD HH:mm:ss")
  dto.plan_start_time = moment( startTime.value).format("YYYY-MM-DD HH:mm:ss")
  dto.user_id = "1";
  dto.id = "0";
  const data = await savePlan(dto)
  console.log('data', data)
}

async function SavePlanWords() {
  let dto = new PlanWords()
  dto.is_mark = 0;
  dto.user_id = 1;
  dto.word_ids = word_ids.value;
  dto.mark_date = mark_date.value
  dto.plan_id = plan_id.value
  const data = await savePlanWords(dto)
  console.log('data', data)
}

async function getList() {
  const data = await getPlansByUser({id: 1})
  if (data.code) {
    ElNotification.error(data.message)
    return
  }
  list.value = data.data;
}

function AddPlan(row){
  const id = row
}

onMounted(() => {
  getList()
})


</script>


<style scoped>

</style>