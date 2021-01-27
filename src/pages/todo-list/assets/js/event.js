/**
 * @method 节流函数
 * @param {Function} handler 事件处理函数
 * @param {Number} delay 恢复点击的毫秒数
 */
const throttle = (handler, delay) => {
  let last, deferTimer
  return function (...args) {
    let that = this
    let now = +new Date()
    if (last && now < last + delay) {
      deferTimer && clearTimeout(deferTimer)
      deferTimer = setTimeout(() => {
        last = now
        handler.apply(that, args)
      }, delay)
    } else {
      last = now
      handler.apply(that, args)
    }
  }
}

export {
  throttle
}