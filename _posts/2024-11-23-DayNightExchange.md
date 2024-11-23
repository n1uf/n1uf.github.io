---
layout: post
title:  "日夜间模式切换功能"
date:   2024-11-23 11:35:00 +0800
categories: function
---

源码详见`_sass\_daynight.scss`，`_includes\header.html`，`_includes\head.html`，`assets\main.scss`。

仓库地址：[n1uf的github](https://github.com/n1uf/n1uf.github.io)

功能实现：

1. 使用了`_daynight.scss`创建样式（注意 `!important` 覆盖原有高光样式）。
2. `header.html`中引用样式（在页头的尾部添加）并添加切换逻辑（`<script>`）。
3. 在主SCSS文件`main.scss`中导入新样式。（`@import "daynight";`）。

一些优化：

1. 蓝色链接在夜间模式显示不清晰问题：添加了`css`中`a`样式的夜间模式颜色适配，并为`title`等类型加了`!important`标签以防也被处理。

2. 关于夜间模式下，该网站切换页面时的由日间模式变为夜间模式所带来的闪烁现象的修复。
   1. 在页面加载前应用夜间模式。
   
      通过在页面加载之前检查本地存储中的主题设置，并将夜间模式样式直接应用到 `<body>` 标签。可以在 `<head>` 内加入一段内联脚本：
   
      在 `head.html` 的 `<head>` 标签中添加以下脚本，确保它在任何 CSS 加载之前执行：
   
      ```html
      <script>
        (function() {
          const currentTheme = localStorage.getItem('theme');
          if (currentTheme === 'night') {
            document.documentElement.classList.add('night-mode');
          }
        })();
      </script>
      ```
   
   2. 使用 `html` 或 `body` 的类优先设置。
   
      为防止页面加载时样式抖动，在 SCSS 中使用默认样式或带有 `.night-mode` 的选择器。例如，在 `_daynight.scss` 中：
   
      ```scss
      body {
        transition: background-color 0.3s ease, color 0.3s ease;
      }
      
      body.night-mode {
        background-color: #2a2a2a;
        color: #ffffff;
      }
      
      // 为页面加载前默认添加无动画样式
      html.night-mode body {
        transition: none; // 避免加载时初始闪烁
      }
      ```
   
   3. 延迟显示页面内容。
   
      如果仍有细微闪烁，可以通过设置页面加载时的隐藏效果来解决。在 `head.html` 中添加：
   
      ```html
      <style>
        body { visibility: hidden; }
      </style>
      ```
   
      然后在加载完成后恢复显示，改良 `DOMContentLoaded` 的 JS：
   
      ```js
      document.addEventListener('DOMContentLoaded', () => {
        document.body.style.visibility = 'visible';
      });
      ```
   
   通过这几个步骤，夜间模式切换功能可以更平滑且没有明显的闪烁问题。推荐优先使用**在页面加载前通过类名应用夜间模式**的方式。
