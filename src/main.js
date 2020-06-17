import Vue from 'vue'
import App from './App.vue'
import './registerServiceWorker'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import "./static/utils/font-icon/iconfont.css"
import axios from 'axios'
import store from './store/store.js'



// 跳过路由报错
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
    return routerPush.call(this, location).catch(error => error)
}


// 导入富文本编译器
import VueQuillEditor from 'vue-quill-editor'
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
Vue.use(VueQuillEditor)


Vue.config.productionTip = false
Vue.use(ElementUI)
Vue.prototype.$http = axios
new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')