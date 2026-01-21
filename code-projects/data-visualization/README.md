# 数据可视化工具 (Data Visualization Tool)

## 项目简介

一个强大的数据可视化库，可以将复杂数据转换为直观的图表和图形。

## 功能特点

- 📊 多种图表类型（折线图、柱状图、饼图等）
- 🎨 可定制的颜色主题
- 📱 响应式图表
- 💾 数据导出功能
- 🔄 实时数据更新

## 技术栈

- D3.js
- Chart.js
- JavaScript ES6+
- Canvas API

## 使用方法

```javascript
// 示例代码
import DataViz from './dataViz.js';

const chart = new DataViz({
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr'],
    values: [10, 20, 15, 30]
  },
  options: {
    responsive: true,
    theme: 'dark',
    animation: true
  }
});

chart.render('#chart-container');
```

## 支持的图表类型

- 折线图 (Line Chart)
- 柱状图 (Bar Chart)
- 饼图 (Pie Chart)
- 散点图 (Scatter Plot)
- 面积图 (Area Chart)

## 项目状态

✅ 已完成并持续更新

## 演示

查看在线演示：[Demo Link]
