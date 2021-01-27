import Vue from 'vue'
import App from './App.vue'

// 引入清除默认样式文件
import "./assets/css/clear.css"

// 引入组件
import TodoList from "./pages/index"
Vue.use(TodoList)

Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
