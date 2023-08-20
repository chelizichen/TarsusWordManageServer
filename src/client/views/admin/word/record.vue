<template>
  <div class="app-container" style="margin-top: 50px;">
    <el-form inline>
      <el-form-item label="字符">
        <el-input v-model="req.keyword"/>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="getList(true)">刷新</el-button>
      </el-form-item>
    </el-form>
    <el-table :data="state.list" border>
      <el-table-column type="index" label="序号" width="60" align="center"/>
      <el-table-column prop="total_trans" label="翻译" width="60" align="center" />
      <el-table-column prop="en_name" label="单词" width="180" align="center" />
      <el-table-column prop="type" label="类型"  width="90" align="center" >
        <template #default="scope">
          <span>{{getType(scope.row.type)}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="create_time" label="创建时间"  width="180" align="center"/>
      <el-table-column prop="own_mark" label="备注"  width="300" align="center"/>
      <el-table-column label="操作"  width="180" align="center" fixed="right" >
        <template #default="scope">
          <el-button type="danger" @click="delWord(scope.row.id)">删除</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script setup lang="ts">
import {delWordById, getWordList} from "@/api/word";
import {onMounted, reactive, ref} from "vue";
import {getWordListReq} from "../../../../struct/Word";
import {RemindWordOption} from "@/dto/option";
import {getTranslateListReq} from '@/dto/index'
import {ElNotification} from "element-plus";

const req = ref(<getWordListReq>{
  size:10,
  page:1,
  desc:'1',
  start_time:'',
  end_time:'',
  keyword:''
})
const state = reactive({
  list:[]
})
onMounted(async ()=>{
  await getList();
})

async function getList(init?){
  if(init){
    const req = new getTranslateListReq();
    req.size = 10
    req.page = 1
    const data = await getWordList(req);
    state.list = data.list
  }else {
    const data = await getWordList(req.value);
    state.list = data.list
  }
}
function getType(type){
  return RemindWordOption.find(item=>item.value == type).label;
}

function delWord(id){
  const data = {
    id
  }
  delWordById(data).then(res=>{
    ElNotification({
      message:res.message,
      type:"success"
    })
    getList()
  })
}
</script>

<style scoped>

</style>