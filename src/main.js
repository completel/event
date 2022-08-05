import Vue from 'vue';
import App from './App.vue';
import ElementUI from 'element-ui'; // 引入饿了么组件
import 'element-ui/lib/theme-chalk/index.css';
import store from '@/store'; // 引入vuex
import router from "@/router"; // 引入路由
import "@/mock"; // 执行mockjs数据
import "@/assets/global.css";

Vue.use(ElementUI);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')
