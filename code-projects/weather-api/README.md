# 天气 API 服务 (Weather API Service)

## 项目简介

一个 RESTful API 服务，提供实时天气数据和天气预报。

## 功能特点

- 🌤️ 实时天气数据
- 📅 5天天气预报
- 🌍 支持全球城市
- 🔍 地理位置搜索
- 📊 历史天气数据
- 🚀 快速响应

## 技术栈

- Node.js
- Express.js
- REST API
- OpenWeatherMap API
- MongoDB

## API 端点

```javascript
// 获取当前天气
GET /api/weather/current?city=Beijing

// 获取天气预报
GET /api/weather/forecast?city=Shanghai&days=5

// 按地理坐标查询
GET /api/weather/location?lat=39.9042&lon=116.4074
```

## 使用示例

```javascript
// Node.js 客户端示例
const axios = require('axios');

async function getWeather(city) {
  try {
    const response = await axios.get(
      `http://api.example.com/weather/current?city=${city}`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching weather:', error);
  }
}

// 使用
getWeather('Beijing').then(data => {
  console.log(`Temperature: ${data.temperature}°C`);
  console.log(`Conditions: ${data.conditions}`);
});
```

## 返回数据格式

```json
{
  "city": "Beijing",
  "temperature": 22,
  "conditions": "Sunny",
  "humidity": 45,
  "windSpeed": 12,
  "timestamp": "2024-01-21T13:00:00Z"
}
```

## 项目状态

✅ 已部署上线

## 性能指标

- 平均响应时间：< 100ms
- 可用性：99.9%
- 支持请求数：1000 req/min
