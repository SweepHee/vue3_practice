import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import TestView from '../views/TestView.vue'
import DataBinding from '../views/DataBinding.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    // 아래 처럼 webpackPrefetch: true 를 주석으로 넣어주면 prefetch (비동기 레이지로드)가 적용된다 ... 
    component: () => import(
      /* webpackPrefetch: true */
      '../views/AboutView.vue'
      )
  },
  {
    path: '/test',
    name: 'test',
    component: TestView
  },
  {
    path: '/dataBinding',
    name: 'DataBinding',
    component: DataBinding
  }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
