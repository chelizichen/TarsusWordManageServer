<template>
  <div class="app-container">
    <div>
      <el-button @click="addPlan()" type="primary">
        创建新的计划
      </el-button>
    </div>
    <div>
      <el-divider content-position="right">我的计划</el-divider>
      <el-table border :data="list">
        <el-table-column label="序号" type="index" align="center"></el-table-column>
        <el-table-column label="已完成" prop="is_mark" align="center" width="100">
          <template #default="scope">
            {{ scope.row.is_mark == 0 ? "未完成" : "已完成" }}
          </template>
        </el-table-column>
        <el-table-column label="开始时间" prop="plan_start_time" align="center"></el-table-column>
        <el-table-column label="结束时间" prop="plan_end_time" align="center"></el-table-column>
        <el-table-column label="创建时间" prop="create_time" align="center"></el-table-column>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <div style="display: flex;padding: 5px 10px">
              <el-button type="primary" @click="addPlanWord(scope.row)">添加复习计划</el-button>
              <el-button type="primary" @click="checkWordPlans(scope.row)">查看计划</el-button>
            </div>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-dialog v-model="visible" width="400px">
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
    <el-dialog v-model="wordsVisible" width="1200px">
      <template #header="{ close, titleId, titleClass }">
        <div class="my-header">
          <h4 :id="titleId" :class="titleClass">添加单词计划</h4>
        </div>
      </template>
      <div>
        <el-form inline>
          <el-form-item label="字符">
            <el-input v-model="req.keyword"/>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="req.type" placeholder="请选择类型">
              <el-option
                  v-for="(item, key) in RemindWordOption"
                  :key="key"
                  :value="item.value"
                  :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item>
            <el-button type="primary" @click="getList(true)">刷新</el-button>
          </el-form-item>
          <el-form-item label="开始时间">
            <el-date-picker
                v-model="words_mark_date"
                type="date"
                placeholder="请选择开始时间"
            />
          </el-form-item>
        </el-form>
        <el-table :data="state.list" border @select="handleSelect">
          <el-table-column type="selection" width="60" align="center"/>
          <el-table-column prop="total_trans" label="翻译" width="120" align="center">
            <template #default="scope">
              <span style="color: #045bcc;cursor: pointer;font-weight: 900 "
                    @click="getTranslate(scope.row)">{{ scope.row.total_trans }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="en_name" label="单词" width="180" align="center"/>
          <el-table-column prop="type" label="类型" width="90" align="center">
            <template #default="scope">
              <span>{{ getType(scope.row.type) }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="create_time" label="创建时间" width="180" align="center"/>
          <el-table-column prop="own_mark" label="备注" width="150" align="center"/>
          <el-table-column prop="word_translates" label="翻译" width="300" align="center">
            <template #default="scope">
              <div v-for="item in getWordsTranslate(scope.row.word_translates)">
                <span>{{ item.en_type }}</span> - <span>{{ item.cn_name }}</span>
              </div>
            </template>
          </el-table-column>
        </el-table>
      </div>
      <template #footer>
        <el-button type="primary" @click="submitWords()">提交</el-button>
      </template>
    </el-dialog>
    <el-dialog v-model="checkPlanVisible" width="1200px">
      <template #header>
        <div>查看单词计划</div>
      </template>
      <el-table :data="checkList" border>
        <el-table-column type="index" label="序号" width="60" align="center"/>
        <el-table-column prop="is_mark" label="是否完成" width="120" align="center">
          <template #default="scope">
            <div>{{ scope.row.is_mark ? "已完成" : "未完成" }}</div>
          </template>
        </el-table-column>
        <el-table-column prop="mark_date" label="打卡日期" width="180" align="center"/>
        <el-table-column prop="plan_id" label="父计划" width="90" align="center"></el-table-column>
        <el-table-column prop="word_ids" label="具体单词" width="180" align="center"/>
        <el-table-column prop="word_translates" label="翻译" width="300" align="center">
          <template #default="scope">
            <el-button type="primary" @click="markWords(scope.row)">完成计划</el-button>
          </template>
        </el-table-column>
      </el-table>
    </el-dialog>
  </div>
</template>

<script lang="ts" setup>
import {computed, onMounted, reactive, ref} from 'vue'
import {ElButton, ElDialog, ElNotification} from 'element-plus'
import {PlanDetail, PlanWords} from "@/dto/Plan";
import moment from "moment";
import {savePlan, getPlansByUser, savePlanWords, getPlanWordsById, markPlanWords} from "@/api/plan";
import {RemindWordOption} from "@/dto/option";
import {getWordListReq} from "../../../../struct/Word";
import {delWordById, getTranslateListById, getWordList} from "@/api/word";
import store from "@/store";

const startTime = ref('')
const endTime = ref('')
const visible = ref(false)
const word_ids = ref('')
const mark_date = ref('')
const plan_id = ref('');
const list = ref([])
const wordsVisible = ref(false)

async function SavePlan() {
  let dto = new PlanDetail()
  dto.create_time = moment().format("YYYY-MM-DD HH:mm:ss")
  dto.is_mark = "0"
  dto.plan_end_time = moment(endTime.value).format("YYYY-MM-DD HH:mm:ss")
  dto.plan_start_time = moment(startTime.value).format("YYYY-MM-DD HH:mm:ss")
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


async function getPlansList() {
  const data = await getPlansByUser({id: 1})
  if (data.code) {
    ElNotification.error(data.message)
    return
  }
  list.value = data.data;
}


function addPlan() {
  visible.value = true
  console.log(visible)
}

const state = reactive({
  list: []
})

const req = ref(<getWordListReq>{
  size: 10,
  page: 1,
  desc: '1',
  start_time: '',
  end_time: '',
  keyword: '',
  type: '-1'
})

async function getList(init?) {
  if (init) {
    req.size = 10
    req.page = 1
    const data = await getWordList(req.value);
    state.list = data.list
  } else {
    const data = await getWordList(req.value);
    state.list = data.list
  }
}

function getType(type) {
  return RemindWordOption.find(item => item.value == type).label;
}

function delWord(id) {
  const data = {
    id
  }
  delWordById(data).then(res => {
    ElNotification({
      message: res.message,
      type: "success"
    })
    getList()
  })
}

async function getTranslate(row) {
  const data = await getTranslateListById({id: row.id})
  let word = {
    id: row.id,
    word: row.en_name
  }
  store.app.setRemindTranslateVisable(true, data, word)
}

function getWordsTranslate(text: string): any[] {
  return JSON.parse(text)
}

onMounted(() => {
  getPlansList()
})

function addPlanWord(row) {
  console.log(row)
  const {id} = row
  words_plan_id.value = String(id);
  wordsVisible.value = true;
  console.log(wordsVisible)
  getList()
}

const selections = ref([])
const words_mark_date = ref('')
const words_plan_id = ref();

function handleSelect(selection, row) {
  selections.value = selection
  console.log(selection)
  console.log(row)
}

async function submitWords() {
  const planWords = new PlanWords();
  const ids = selections.value.map(item => {
    return item.id;
  })
  planWords.word_ids = JSON.stringify(ids)
  planWords.plan_id = words_plan_id.value
  planWords.user_id = '1'
  planWords.mark_date = moment(words_mark_date.value || undefined).format("YYYY-MM-DD")
  planWords.is_mark = 0
  const data = await savePlanWords(planWords)
  console.log(data)
}

const checkPlanVisible = ref(false)
const checkList = ref([])

async function checkWordPlans(row: any) {
  const {id} = row;
  const data = await getPlanWordsById({id})
  checkList.value = data.data
  checkPlanVisible.value = true
}

async function markWords(row) {
  const {id} = row;
  const data = await markPlanWords({id})
  console.log(data)
}


</script>


<style scoped>

</style>