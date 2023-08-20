<template>
  <div>
    <el-drawer v-model="appStore.RemindWordVisable" direction="ltr">
      <template #header>
        <h4>添加单词</h4>
      </template>
      <template #default>
        <el-form :model="wordForm" label-width="100px">
          <el-form-item label="单词">
            <el-input v-model="wordForm.en_name"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="wordForm.type" placeholder="请选择类型">
              <el-option
                v-for="(item, key) in RemindWordOption"
                :key="key"
                :value="item.value"
                :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
        <el-form-item label="笔记">
            <el-input v-model="wordForm.own_mark"></el-input>
          </el-form-item>
        </el-form>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button type="danger" @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="addWord">添加</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import { ref } from "vue";
import { ElMessageBox } from "element-plus";
import store from "@/store/index";
import { Word } from "../../../dto/index";
import { RemindWordOption } from "../../../dto/option";
import moment from 'moment';
import {getWordList,saveWord} from '@/api/word';

const appStore = store.app;
const wordForm = ref<Word>({
  en_name: "",
  create_time: "",
  id: 0,
  own_mark: "",
  type: "1",
  // 其他字段
});
async function addWord() {
    wordForm.value.create_time = moment().format("YYYY-MM-DD hh:mm:ss")
    wordForm.value.id = undefined;
    const data = saveWord(wordForm.value)
    console.log(data);
    
    cancelClick();
}
function cancelClick() {
  appStore.setRemindWordVisable(false);
}
</script>
