<template>
  <div class="wl-todo-list">
    <!-- 搜索&创建条目 -->
    <the-search
      v-if="filterable"
      v-model="searchKey"
      :maxlength="maxlength"
      :allowCreate="allowCreate"
      :placeholder="placeholder"
      @create="handleCreateTask"
    ></the-search>
    <!-- 任务列表 -->
    <the-list
      :taskStateInternally="taskStateInternally"
      :nodeKey="nodeKey"
      :props="selfProps"
      :data="data"
      @task-change="handleChangeTask"
      @task-delete="handleDeleteTask"
    >
      <slot name="no-data"></slot>
    </the-list>
    <!-- 删除弹窗 -->
    <the-delete></the-delete>
  </div>
</template>

<script>
import TheSearch from "./components/TheSearch.vue";
import TheList from "./components/TheList.vue";
import TheDelete from "./components/TheDelete.vue";

export default {
  name: "WlTodoList",
  components: { TheSearch, TheList, TheDelete },
  props: {
    // 数据列表 ----------------------TheTask---------------
    data: {
      type: Array,
      default: () => {
        return [];
      }
    },
    // props配置项
    props: Object,
    // node-key
    nodeKey: {
      type: String,
      default: "id"
    },
    // 是否内部处理任务状态,true则内部改变task状态并emit到外部，false则外部处理
    taskStateInternally: {
      type: Boolean,
      default: true
    },
    // 是否可搜索 --------------------- TheSearch------------
    filterable: {
      type: Boolean,
      default: true
    },
    // 是否允许创建新任务，必须开启filterable
    allowCreate: {
      type: Boolean,
      default: true
    },
    // placeholder
    placeholder: String,
    // 最大输入长度
    maxlength: [Number, String]
  },
  data() {
    return {
      searchKey: "" // 搜索或创建条目的值
    };
  },
  computed: {
    selfProps() {
      return {
        label: "label",
        isDone: "isDone"
      };
    },
    selfData() {
      return this.data || [];
    }
  },
  watch: {
    searchKey(val) {
      console.log(val, 1);
    }
  },
  methods: {
    /**
     * @name 创建任务
     * @param {string} val
     */
    handleCreateTask() {
      this.$emit("task-create", this.searchKey);
      this.searchKey = "";
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
    }
  }
};
</script>
