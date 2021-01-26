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
| props | 数据字段描述信息 | Object | {label: "label",isDone: "isDone",} |
| nodeKey | node-key | String | id |
| taskStateInternally | 是否内部处理任务状态,true则内部改变task状态并emit到外部，false则外部处理 | Boolean | true |
| taskDeleteInternally | 是否内部处理任务删除,true则内部移除task节点并emit到外部，false则外部处理 | Boolean | true |
| filterable | 是否可搜索 | Boolean | true |
| allowCreate | 是否允许创建新任务，必须开启filterable | Boolean | true |
| placeholder | 输入框placeholder | String | - |
| maxlength | 输入框最大输入长度 | [Number,String] | 200 |

## props
| 参数 | 说明 | 默认值 | 
| ---- | ---- | ---- |
| label | 展示任务信息节点的字段 | label |
| isDone | 任务信息是否完成状态字段 | isDone | 

## Events
| 事件名 | 说明 | 回调参数 |
| ---- | ---- | ---- |
| task-create | 创建任务 | value 输入框内的值 |
| task-change | 改变任务状态 | item 任务节点数据 |
| task-delete | 删除任务 | item 任务节点数据 | 

## Then
[ ] 搜索
[ ] 虚拟列表
[ ] 未完成任务拖拽排序
[ ] 多列todo list支持互相拖拽