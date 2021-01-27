import Vue from 'vue';
import MsgBoxNode from "./MsgBox.vue";

const MsgBoxConstructor = Vue.extend(MsgBoxNode);

let instance = null;

const MsgBox = function (options) {
  // instance && instance.onClose();
  return new Promise((resolve, reject) => {
    instance = new MsgBoxConstructor({
      el: document.createElement('div')
    });
    instance.callback = type => {
      type === 'confirm' ? resolve(type) : reject(type);
    }

    if (typeof options === 'string') {
      instance.message = options
    } else if (Object.prototype.toString.call(options) === "[object Object]") {
      for (let i in options)
        instance[i] = options[i]
    }

    document.body.appendChild(instance.$el);

    Vue.nextTick(() => {
      instance.visible = true;
    });
  })
}

export default MsgBox