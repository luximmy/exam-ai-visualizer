# 试卷/题库智能讲解与可视化分析平台

基于 Vue3 + TypeScript + Koa 的前端主导项目，集成阿里云 OCR/LLM 能力，提供题目解析、智能讲解、相似题推荐与可视化分析功能。

## 技术栈

### 前端

- Vue3 + TypeScript + Vite
- Vue Router + Pinia
- Element Plus + ECharts
- Axios

### BFF

- Koa + TypeScript
- 阿里云 OCR/LLM API 代理

### 工程化

- pnpm workspace (monorepo)
- ESLint + Prettier
- Husky + lint-staged + commitlint

## 快速开始

### 环境要求

- Node.js 18.20+ / 20.12+
- pnpm 9.x+

### 安装依赖

```bash
pnpm install
```

### 配置环境变量

复制 `.env.example` 为 `.env.local`，填入阿里云密钥：

```bash
cp .env.example .env.local
```

### 启动开发

```bash
# 前端（默认 http://localhost:5173）
pnpm dev:web

# BFF（默认 http://localhost:8788）
pnpm dev:bff
```

### 构建

```bash
pnpm build:web
```

## 项目结构

```
exam-ai-visualizer/
├── apps/
│   ├── web/          # 前端应用
│   └── bff/          # BFF 代理层
├── packages/
│   └── shared/       # 共享类型/工具
└── pnpm-workspace.yaml
```

## 开发规范

### 提交规范

使用 [Conventional Commits](https://www.conventionalcommits.org/)：

- `feat: 新功能`
- `fix: 修复问题`
- `chore: 工程化/依赖`
- `docs: 文档`
- `refactor: 重构`

### 代码检查

```bash
# Lint
pnpm lint

# Format
pnpm format
```

## 功能模块

- 📤 **题目上传**：支持图片/文本上传，OCR 解析
- 💡 **智能讲解**：基于阿里云 LLM 生成讲解与知识点标签
- 🔍 **相似题推荐**：向量检索推荐相似题目
- 📊 **可视化分析**：难度分布、知识点雷达图、错题热力图

## License

ISC
