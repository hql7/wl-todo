# wl-todo

todo list demo

## 运行项目

```
yarn install

yarn serve
```

## Attributes
| 参数 | 说明 | 类型 | 默认值 | 
| ---- | ---- | ---- | ---- |
| data | 任务数据 | Array | [] |
| props | 数据字段描述信息 | Object | 见props |
| nodeKey | node-key | String | id |
| taskStateInternally | 是否内部处理任务状态(完成、回退、删除),true则内部改变task状态并emit到外部，false则外部处理 | Boolean | true |
| allowCreate | 是否允许创建新任务 | Boolean | true |
| placeholder | 输入框placeholder | String | - |
| maxlength | 输入框最大输入长度 | [Number,String] | 200 |
| confirmOptions | 弹出框配置项 | Object | 见confirmOptions |

## props
| 参数 | 说明 | 默认值 | 
| ---- | ---- | ---- |
| label | 展示任务信息节点的字段 | label |
| isDone | 任务信息是否完成状态字段 | isDone | 

## confirmOptions
| 参数 | 说明 | 默认值 |
| ---- | ---- | ---- |
| title | 标题 | 提示 |
| message | 确认提示内容 | 是否确认执行当前操作？ |
| cancelText | 取消按钮的文字 | 取消 |
| confirmText | 确认按钮的文字 | 确认 |

## Events
| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| task-create | 创建任务 | value 输入框内的值 |
| task-change | 改变任务状态 | item 任务节点数据 |
| task-delete | 删除任务 | item 任务节点数据 | 

## Then
[ ] 虚拟列表  
[ ] 未完成任务可拖拽排序  
[ ] 多列todo list支持互相拖拽  