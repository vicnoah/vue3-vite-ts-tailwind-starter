import { createRouter, createWebHistory } from "vue-router";

// 开启历史模式
const routerHistory = createWebHistory();

const router = createRouter({
    history: routerHistory,
    routes: [
        {
            path: '/',
            redirect: '/home'
        },
        {
            path: '/home',
            component: () => import("../views/Home.vue")
        }
    ]
});

export default router;