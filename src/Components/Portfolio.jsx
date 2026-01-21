/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpeg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "计算器应用 (Calculator App) 🧮",
    description:
      "一个简单实用的计算器应用，支持基本的数学运算。使用 JavaScript、HTML5 和 CSS3 开发，具有响应式设计和简洁的用户界面。",
    url: "https://github.com/wngsisi/myrepository/tree/main/code-projects/calculator-app",
  },
  {
    title: "待办事项管理器 (Todo List Manager) ✅",
    description:
      "功能完善的任务管理应用，支持任务的添加、编辑、删除和分类。采用 React.js 开发，提供本地存储和智能提醒功能。",
    url: "https://github.com/wngsisi/myrepository/tree/main/code-projects/todo-list-manager",
  },
  {
    title: "数据可视化工具 (Data Visualization) 📊",
    description:
      "强大的数据可视化库，支持多种图表类型。使用 D3.js 和 Chart.js，可将复杂数据转换为直观美观的图表，支持实时更新和主题定制。",
    url: "https://github.com/wngsisi/myrepository/tree/main/code-projects/data-visualization",
  },
  {
    title: "天气 API 服务 (Weather API) 🌤️",
    description:
      "RESTful API 服务，提供实时天气数据和天气预报。基于 Node.js 和 Express.js，支持全球城市查询，快速响应，已部署上线。",
    url: "https://github.com/wngsisi/myrepository/tree/main/code-projects/weather-api",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>我的代码项目 (My Code Projects)</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover" }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
