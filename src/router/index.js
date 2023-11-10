import { createRouter, createWebHistory } from 'vue-router';
import home from './home';
import threeJS from './threeDemo';
import notFoundComponent from '@/components/Controls/notFound.vue';

const routes = [
  { path: '/:pathMatch(.*)*', redirect: { name: '/notFound' } },
  { path: '/404', name: 'notFound', component: notFoundComponent },
  ...home,
  ...threeJS

]

const router = createRouter({
  routes,
  history: createWebHistory(import.meta.env.BASE_URL)
})

export default router
