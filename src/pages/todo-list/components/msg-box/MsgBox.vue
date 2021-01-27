<template>
  <div class="wl-msg-box" v-show="visible">
    <!-- 遮罩 -->
    <div class="msg-popup"></div>
    <!-- 确认框-外 -->
    <div class="msg-wrapper">
      <!-- 内容框 -->
      <div class="msg-box">
        <!-- title -->
        <div class="msg-title-box">
          <span class="msg-title">{{ title }}</span>
          <span
            class="iconfont icon-danyehuaban icon-close"
            @click="handleClick('cancel')"
          ></span>
        </div>
        <!-- context -->
        <p class="msg-context">{{ message }}</p>
        <!-- handle -->
        <div class="msg-btn-box">
          <span class="wl-btn" @click="handleClick('cancel')">{{ cancelText }}</span>
          <span class="wl-btn wl-btn-primary" @click="handleClick('confirm')">
            {{ confirmText }}
          </span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "MsgBox",
  data() {
    return {
      visible: false,
      title: "提示",
      message: "是否确认执行当前操作？",
      cancelText: "取消", // 取消按钮的文字
      confirmText: "确认", // 确认按钮的文字
      callback: null, // 回调
    };
  },
  methods: {
    /**
     * @name 按钮操作
     */
    handleClick(type) {
      this.callback?.(type);
      this.onClose();
    },
    // 关闭
    onClose() {
      this.visible = false;
    },
  },
};
</script>
