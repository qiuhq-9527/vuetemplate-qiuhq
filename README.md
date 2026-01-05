# vuetemplate-qiuhq

基于 vue3 + ts 的项目模板
样式：shadcnvue、nuxtui、daisyui、elementplus

## 项目基本结构

```text
ProjectTemplate/
├── src/
│   ├── api/                # 接口请求层
│   │   ├── auth.ts         # 认证相关接口
│   │   └── type.ts         # 接口模型定义
│   ├── assets/             # 静态资源
│   │   ├── theme/          # 自定义主题 CSS
│   │   ├── tailwind.css    # Tailwind 主入口
│   │   └── main.css        # 全局样式
│   ├── components/         # 组件库
│   │   ├── ui/             # Shadcn 生成的 UI 组件
│   │   └── common/         # 业务公共组件
│   ├── composables/        # 组合式 API (Hooks)
│   │   └── useTheme.ts     # 主题切换逻辑
│   ├── layout/             # 基础布局
│   ├── router/             # 路由配置
│   │   ├── guard.ts        # 路由守卫
│   │   ├── basicRouteMap.ts # 路由表
│   │   └── index.ts        # 路由器实例
│   ├── stores/             # Pinia 状态管理
│   │   ├── modules/        # 状态模块
│   │   └── index.ts        # Pinia 实例
│   ├── utils/              # 工具类封装
│   │   └── axios.ts        # Axios 拦截器封装
│   └── views/              # 页面视图
├── env.d.ts                # 环境变量与 TS 类型声明
├── vite.config.ts          # Vite 配置 (已集成 Nuxt UI 自动导入)
└── components.json         # Shadcn 配置文件
```

## 常用工具
- **Shadcn UI 组件下载**：`pnpm dlx shadcn-vue@latest add button`
- **Shadcn 主题定制**：[tweakcn.com](https://tweakcn.com/)
