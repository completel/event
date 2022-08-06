import Vue from "vue";
import VueRouter from "vue-router";

Vue.use(VueRouter);

export default new VueRouter({
    routes: [
        {
            path: '/reg',
            // 路由懒加载
            component: () => import("@/page/Register")
        },
        {
            path: '/login',
            component: () => import("@/page/Login")
        },
        {
            path: '*',
            redirect: '/login',
        }
    ]
})
