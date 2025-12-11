<template>
  <div class="max-w-4xl mx-auto">
    <div class="bg-white rounded-lg shadow-md p-6">
      <h2 class="text-2xl font-bold text-gray-800 mb-6">题目上传</h2>
      <el-upload
        class="upload-dragger"
        drag
        :auto-upload="false"
        :on-change="handleFileChange"
        :file-list="fileList"
      >
        <el-icon class="el-icon--upload"><upload-filled /></el-icon>
        <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
        <template #tip>
          <div class="el-upload__tip text-gray-500">支持图片和文本文件</div>
        </template>
      </el-upload>
      <el-button
        type="primary"
        class="mt-6 w-full"
        size="large"
        :loading="uploading"
        @click="handleUpload"
      >
        开始解析
      </el-button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { UploadFilled } from "@element-plus/icons-vue";
import type { UploadFile } from "element-plus";

const fileList = ref<UploadFile[]>([]);
const uploading = ref(false);

const handleFileChange = (file: UploadFile) => {
  fileList.value = [file];
};

const handleUpload = () => {
  if (fileList.value.length === 0) {
    return;
  }
  uploading.value = true;
  // TODO: 调用 BFF API 上传并解析
  setTimeout(() => {
    uploading.value = false;
  }, 2000);
};
</script>

<style scoped>
.upload-dragger {
  width: 100%;
}
</style>
