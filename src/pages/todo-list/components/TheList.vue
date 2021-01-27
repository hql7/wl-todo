<template>
  <div class="the-task the-body-border">
    <!-- 任务列表 -->
    <ul class="task-list" ref="parentNode" v-if="selfList.length">
      <li
        class="task-item"
        v-for="item of selfList"
        :key="item[nodeKey]"
        :class="{ 'task-finished': item[props.isDone] }"
      >
        <div class="task-info">{{ item[props.label] }}</div>
        <div class="task-btn">
          <i
            class="task-icon iconfont"
            :class="[
              item[props.isDone]
                ? 'icon-chehui icon-rollback'
                : 'icon-iconfontcheck icon-tofinish',
            ]"
            @click="handleTaskStatus(item)"
          ></i>
          <i
            class="task-icon iconfont icon-icon_shanchu- icon-del"
            @click="handleTaskDel(item)"
          ></i>
        </div>
      </li>
    </ul>
    <!-- 暂无数据 -->
    <div class="the-no-data" v-else>
      <slot>暂无数据</slot>
    </div>
  </div>
</template>

<script>
import MsgBox from "./msg-box";

export default {
  name: "TheList",
  props: {
    data: Array, // 任务数据
    props: Object, // 数据字段描述信息
    nodeKey: String, // node-key
    // 是否内部处理任务状态,true则内部改变task状态并emit到外部，false则外部处理
    taskStateInternally: Boolean,
    // 是否内部处理任务删除,true则内部移除task节点并emit到外部，false则外部处理
    taskDeleteInternally: Boolean,
    confirmOptions: Object,
  },
  data() {
    return {
      layout: {
        del: false,
      }, // 视图管理
      unfinishedTasks: [], // 未完成的任务
      completedTasks: [], // 已完成的任务
    };
  },
  computed: {
    selfList() {
      return this.taskStateInternally
        ? [...this.unfinishedTasks, ...this.completedTasks]
        : this.data;
    },
  },
  watch: {
    data: {
      handler(val) {
        if (!val) return;
        this.unfinishedTasks = [];
        this.completedTasks = [];
        val.forEach((i) => {
          !i[this.props.isDone]
            ? this.unfinishedTasks.push(i)
            : this.completedTasks.push(i);
        });
      },
      immediate: true,
    },
  },
  methods: {
    /**
     * @name 改变任务状态,内部改变并通知外部
     * @param {Object} item 当前任务节点信息
     */
    handleTaskStatus(item) {
      if (this.taskStateInternally) {
        // 将任务标记为完成
        if (!item[this.props.isDone]) {
          this.unfinishedTasks = this.unfinishedTasks.filter(
            (i) => i[this.nodeKey] != item[this.nodeKey]
          );
          this.completedTasks.unshift({ ...item, isDone: true });
        } else {
          // 将任务回退至未完成
          this.completedTasks = this.completedTasks.filter(
            (i) => i[this.nodeKey] != item[this.nodeKey]
          );
          this.unfinishedTasks.unshift({ ...item, isDone: false });
        }
      }
      // 通知外部变化
      this.$emit("task-change", item);
    },
    /**
     * @name 删除任务
     */
    handleTaskDel(item) {
      MsgBox(this.confirmOptions)
        .then(() => {
          // 先弹出确认
          if (this.taskStateInternally) {
            item[this.props.isDone]
              ? (this.completedTasks = this.completedTasks.filter(
                  (i) => i[this.nodeKey] != item[this.nodeKey]
                ))
              : (this.unfinishedTasks = this.unfinishedTasks.filter(
                  (i) => i[this.nodeKey] != item[this.nodeKey]
                ));
          }
          // 通知外部变化
          this.$emit("task-delete", item);
        })
        .catch(() => {});
    },
  },
};
</script>
