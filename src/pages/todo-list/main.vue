<template>
  <div class="wl-todo-list">
    <!-- 创建条目 -->
    <the-input
      v-if="allowCreate"
      v-model="inputKey"
      :maxlength="maxlength"
      :allowCreate="allowCreate"
      :placeholder="placeholder"
      @create="handleCreateTask"
    ></the-input>
    <!-- 任务列表 -->
    <the-list
      :taskStateInternally="taskStateInternally"
      :nodeKey="nodeKey"
      :props="selfProps"
      ref="the-list"
      :data="data"
      @task-change="handleChangeTask"
      @task-delete="handleDeleteTask"
    >
      <slot name="no-data"></slot>
    </the-list>
  </div>
</template>

<script>
import TheInput from "./components/TheInput.vue";
import TheList from "./components/TheList.vue";

export default {
  name: "WlTodoList",
  components: { TheInput, TheList },
  props: {
    // 数据列表 ----------------------TheTask---------------
    data: {
      type: Array,
      default: () => {
        return [];
      },
    },
    // props配置项
    props: Object,
    // node-key
    nodeKey: {
      type: String,
      default: "id",
    },
    // 是否内部处理任务状态,true则内部改变task状态并emit到外部，false则外部处理
    taskStateInternally: {
      type: Boolean,
      default: true,
    },
    // 是否允许创建新任务 ---------------- TheInput------------
    allowCreate: {
      type: Boolean,
      default: true,
    },
    // placeholder
    placeholder: String,
    // 最大输入长度
    maxlength: [Number, String],
    // 确认弹出框配置项 ------------------ MsgBox -------------
    confirmOptions:Object
  },
  data() {
    return {
      inputKey: "", // 搜索或创建条目的值
    };
  },
  computed: {
    selfProps() {
      return {
        label: "label",
        isDone: "isDone",
      };
    },
    selfData() {
      return this.data || [];
    },
  },
  methods: {
    /**
     * @name 创建任务
     * @param {string} val
     */
    handleCreateTask() {
      this.$emit("task-create", this.inputKey);
      this.inputKey = "";
    },
    /**
     * @name 改变任务状态
     * @param {Object} item 任务信息
     */
    handleChangeTask(item) {
      this.$emit("task-change", item);
    },
    /**
     * @name 删除任务
     * @param {Object} item 任务信息
     */
    handleDeleteTask(item) {
      this.$emit("task-delete", item);
    },
  },
};
</script>

<style src="./assets/css/index.min.css"></style>
