# 计算器应用 (Calculator App)

## 项目简介

一个简单的计算器应用程序，支持基本的数学运算。

## 功能特点

- ✅ 加法、减法、乘法、除法
- ✅ 清除和重置功能
- ✅ 响应式设计
- ✅ 简洁的用户界面

## 技术栈

- JavaScript
- HTML5
- CSS3

## 使用方法

```javascript
// 示例代码
function calculate(num1, num2, operator) {
  switch(operator) {
    case '+': return num1 + num2;
    case '-': return num1 - num2;
    case '*': return num1 * num2;
    case '/': return num2 !== 0 ? num1 / num2 : 'Error';
    default: return 'Invalid operator';
  }
}
```

## 项目状态

✅ 已完成

## 贡献者

- 作者：项目所有者
- 日期：2024
