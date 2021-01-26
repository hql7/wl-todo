<template>
  <div id="app">
    <todo-list :data="taskList" @create="handleCreateTask">
      <!-- 无数据-插槽 -->
      <template #no-data> 这里空空如也，快为我安排第一份工作任务吧！ </template>
    </todo-list>
  </div>
</template>

<script>
import TodoList from "./pages/todo-list";
import { createUuid } from "./utils";

export default {
  name: "App",
  components: {
    TodoList,
  },
  data() {
    return {
      taskList: [
        { id: "10", label: "完成docker部署微前端", isDone: true },
        { id: "11", label: "进入掘金2020年度作者前80", isDone: false },
        { id: "12", label: "完成2021年第一篇技术文章", isDone: true },
        { id: "13", label: "通过淘系技术考核", isDone: false },
      ],
    };
  },
  methods: {
    /**
     * @name 创建任务事件
     */
    handleCreateTask(val) {
      let item = {
        id: createUuid(),
        label: val,
      };
      this.taskList.unshift(item);
    },
  },
};
</script>

<style>
#app {
  margin: 60px auto;
  width: 360px;
}
</style>
