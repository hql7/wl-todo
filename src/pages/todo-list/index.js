import TodoList from "./main.vue";

TodoList.install = function (Vue) {
  Vue.component(TodoList.name, TodoList);
};

export default TodoList;