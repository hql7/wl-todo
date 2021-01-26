import TodoList from "./main.vue";
import './assets/css/clear.css'
import './assets/css/index.min.css'

TodoList.install = function (Vue) {
  Vue.component(TodoList.name, TodoList);
};

export default TodoList;