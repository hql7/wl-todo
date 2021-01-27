<template>
  <div class="task-search">
    <input
      type="text"
      :value="key"
      autocomplete="off"
      :maxlength="maxlength"
      class="task-search-ipt"
      :placeholder="selfPlaceholder"
      @keyup.enter="handleCreate"
      @input="handleChange"
    />
  </div>
</template>

<script>
import { throttle } from "../assets/js/event";

export default {
  name: "TheInput",
  props: {
    value: String,
    placeholder: String,
    maxlength: {
      type: [Number, String],
      default: 200,
    }, // 可输入最大长度
  },
  data() {
    return {
      key: "",
    };
  },
  computed: {
    selfPlaceholder() {
      return this.placeholder ? this.placeholder : "请输入任务名并按回车键创建";
    },
  },
  watch: {
    value(val) {
      this.key = val;
    },
  },
  methods: {
    // 输入框change事件
    handleChange: throttle(function (e) {
      this.$emit("input", e.target.value);
    }, 300),
    // 创建条目事件
    handleCreate(e) {
      this.$emit("create", e.target.value);
    },
  },
};
</script>
