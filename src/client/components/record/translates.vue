<template>
  <div>
    <el-drawer v-model="appStore.RemindTranslateVisable" direction="rtl">
      <template #header>
        <h4>添加翻译</h4>
      </template>
      <template #default>
        <el-form :model="wordForm" label-width="100px">
          <el-form-item label="单词">
            <el-input v-model="appStore.TranslatesWord" :disabled="true"></el-input>
          </el-form-item>

          <el-form-item label="翻译">
            <el-input v-model="wordForm.cn_name"></el-input>
          </el-form-item>
          <el-form-item label="类型">
            <el-select v-model="wordForm.en_type" placeholder="请选择词性">
              <el-option
                  v-for="(item, key) in WordTypeOptions"
                  :key="key"
                  :value="item.value"
                  :label="item.label"
              ></el-option>
            </el-select>
          </el-form-item>
          <el-form-item label="笔记">
            <el-input v-model="wordForm.own_mark" type="textarea" :rows="3"></el-input>
          </el-form-item>
        </el-form>
        <el-table :data="appStore.TranslatesList" border height="250">
          <el-table-column type="index" label="序号" width="60" align="center"/>
          <el-table-column prop="cn_name" label="中文翻译" width="90" align="center"/>
          <el-table-column prop="en_type" label="英文词性" width="90" align="center"/>
          <el-table-column prop="create_time" label="创建时间" width="150" align="center"/>
          <el-table-column prop="own_mark" label="个人笔记" width="150" align="center" fixed="right"/>
        </el-table>
      </template>
      <template #footer>
        <div style="flex: auto">
          <el-button type="danger" @click="cancelClick">取消</el-button>
          <el-button type="primary" @click="addTranslate">添加</el-button>
        </div>
      </template>
    </el-drawer>
  </div>
</template>

<script lang="ts" setup>
import {ref} from "vue";
import {ElMessageBox, ElNotification} from "element-plus";
import store from "@/store";
import {Word, WordTranslate} from "@/dto/Word";
import {RemindWordOption, WordTypeOptions} from "@/dto/option";
import moment from 'moment';
import {getWordList, saveTranslate, saveWord} from '@/api/word';

const appStore = store.app;
const wordForm = ref<WordTranslate>({
  cn_name: "",
  en_type: "",
  id: 0,
  own_mark: "",
  type: "1",
  word_id: 0,
  // 其他字段
});

async function addTranslate() {
  wordForm.value.create_time = moment().format("YYYY-MM-DD HH:mm:ss")
  wordForm.value.id = undefined;
  wordForm.value.word_id = appStore.TranslatesWordId;

  const data = await saveTranslate(wordForm.value)
  ElNotification({
    message: data.message,
    type: !data.code ? "success" : "error",
    position: "top-left"
  })
  cancelClick();
}

function cancelClick() {
  appStore.setRemindTranslateVisable(false);
}
</script>
