import Vue from "vue";
import VueRouter from "vue-router"; 

Vue.use(VueRouter);

const routes = [
  {
    path: '/recommend',
    component: () => import('@/views/recommend'),
    hidden: true,
    children: [{
      path: '/recommend/:id',
      component: () => import('@/views/detailed')
    }]
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
