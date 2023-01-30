import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import NProgress from 'nprogress';
NProgress.configure({
    easing: 'ease', // 动画方式
    speed: 500, // 递增进度条的速度
    showSpinner: true, // 是否显示加载ico
    trickleSpeed: 600, // 自动递增间隔
    minimum: 0.3, // 更改启动时使用的最小百分比
    parent: 'body', //指定进度条的父容器
})
export const routes: RouteRecordRaw[] = [
    {
        path: '/home',
        component: () => import('@/views/home/index.vue'),
    },
    {
        path: '/',
        component: () => import('@/views/about/index.vue'),
    }]


const router = createRouter({
    history: createWebHistory(),
    routes,
})
router.beforeEach((to, from) => {
    if (!NProgress.isStarted()) {
        NProgress.start();
    }
});

router.afterEach((to, from) => {
    NProgress.done();
});
export default router
