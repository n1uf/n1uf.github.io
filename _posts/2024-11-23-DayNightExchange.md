---
layout: post
title:  "日夜间模式切换功能"
date:   2024-11-23 11:35:00 +0800
categories: function
---

源码详见`_sass\_daynight.scss`，`_includes\header.html`，`assets\main.scss`。

仓库地址：[n1uf的github](https://github.com/n1uf/n1uf.github.io)

功能实现：

1. 使用了`_daynight.scss`创建样式（注意 `!important` 覆盖原有高光样式）。
2. `header.html`中引用样式（在页头的尾部添加）并添加切换逻辑（`<script>`）。
3. 在主SCSS文件`main.scss`中导入新样式。（`@import "daynight";`）。

