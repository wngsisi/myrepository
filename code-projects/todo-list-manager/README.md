# 待办事项管理器 (Todo List Manager)

## 项目简介

一个功能完善的待办事项管理应用，帮助用户组织和跟踪日常任务。

## 功能特点

- ✅ 添加、编辑、删除任务
- ✅ 标记任务完成状态
- ✅ 任务分类和标签
- ✅ 本地存储持久化
- ✅ 搜索和筛选功能

## 技术栈

- React.js
- LocalStorage API
- CSS Modules

## 使用方法

```javascript
// 示例代码
class TodoManager {
  constructor() {
    this.todos = this.loadTodos();
  }
  
  addTodo(text, category) {
    const todo = {
      id: Date.now(),
      text,
      category,
      completed: false,
      createdAt: new Date()
    };
    this.todos.push(todo);
    this.saveTodos();
  }
  
  toggleTodo(id) {
    const todo = this.todos.find(t => t.id === id);
    if (todo) todo.completed = !todo.completed;
    this.saveTodos();
  }
}
```

## 项目状态

🚧 开发中

## 特色功能

- 智能提醒系统
- 多设备同步（计划中）
- 主题定制
