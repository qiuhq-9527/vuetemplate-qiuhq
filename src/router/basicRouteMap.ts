import HomeView from '@/views/HomeView.vue'
import DefaultLayout from '@/layout/DefaultLayout.vue'
import type { RouteRecordRaw } from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/', name: 'layout', component: DefaultLayout,
    redirect: '/home',
    children: [
      { path: '/home', name: 'home', component: HomeView },
      {
        path: '/test', name: 'test', component: () => import('@/views/TestView.vue'),
        meta: { needAuth: ["admin", "manager"] }
      }
    ],
  },
  { path: '/login', name: 'login', component: () => import('@/views/LoginView.vue') },
  { path: '/error', name: 'error', component: () => import('@/views/ErrorView.vue') },

]

export default routes
