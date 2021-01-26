<template>
  <div class="task-search">
    <input
      type="text"
      :value="key"
      autocomplete="off"
      class="task-search-ipt"
      :maxlength="maxlength"
      :placeholder="selfPlaceholder"
      @change="searchChange"
      @keyup.enter="handleCreate"
    />
  </div>
</template>

<script>
export default {
  name: "TheSearch",
  model: {
    prop: "value",
    event: "change",
  },
  props: {
    placeholder: String,
    allowCreate: Boolean, // 允许创建条目
    maxlength: {
      type: [Number, String],
      default: 200,
    },
  },
  data() {
    return {
      key: "",
    };
  },
  computed: {
    selfPlaceholder() {
      if (this.placeholder) return this.placeholder;
      let _placeholder = "请输入todo查询";
      return this.allowCreate ? `${_placeholder}，或回车创建新条目` : _placeholder;
    },
  },
  methods: {
    // 输入框change事件
    searchChange(e) {
      this.key = e.target.value;
      this.$emit("change", this.key);
    },
    // 创建条目事件
    handleCreate() {
      if (!this.allowCreate) return;
      this.$emit("create", this.key);
    },
  },
};
</script>
