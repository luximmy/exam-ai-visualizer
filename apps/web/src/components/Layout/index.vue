<template>
  <div class="min-h-screen bg-gray-50">
    <header class="bg-white border-b border-gray-200 shadow-sm">
      <div class="container mx-auto px-4 py-4 flex items-center justify-between">
        <h1 class="text-xl font-semibold text-gray-800">试卷智能讲解平台</h1>
        <nav class="flex space-x-1">
          <router-link
            to="/upload"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
            :class="
              $route.path === '/upload'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            "
          >
            题目上传
          </router-link>
          <router-link
            to="/explain"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
            :class="
              $route.path === '/explain'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            "
          >
            智能讲解
          </router-link>
          <router-link
            to="/similar"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
            :class="
              $route.path === '/similar'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            "
          >
            相似题推荐
          </router-link>
          <router-link
            to="/analytics"
            class="px-4 py-2 rounded-md text-sm font-medium transition-colors"
            :class="
              $route.path === '/analytics'
                ? 'bg-blue-100 text-blue-700'
                : 'text-gray-600 hover:bg-gray-100'
            "
          >
            可视化分析
          </router-link>
        </nav>
      </div>
    </header>
    <main class="container mx-auto px-4 py-6">
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts"></script>
