---
layout: post
title:  "Windows系统创建基于Jekyll的GitHub-Page"
date:   2024-05-30 21:30:00 +0800
categories: Jekyll GitHub Windows
---
## 本文是个人创建GitHub Page时的步骤以及遇到的问题

* 首先贴一个GitHub官方Docs的原文链接，其实看原文才能不走弯路，目前网络上的一些所谓教程都是来自原文但是有所缺陷，完全照搬可能污染环境或者配置失败。

  [GitHub Pages 快速入门 - GitHub 文档](https://docs.github.com/zh/pages/quickstart)

1. 首先Create一个new repository，name一栏设置为`username.github.io`，这里的`username`为你的GitHub用户名，不用勾选Add a README file。

   ![](https://github.com/n1uf/n1uf.github.io/raw/master/img/3_1.png)

   ![](https://github.com/n1uf/n1uf.github.io/raw/master/img/3_2.png)

   我这里错误是因为我已经创建了以该名字为名字的仓库。

2. 在创建好的仓库的选项栏，选择Settings（如果没有就是隐藏在`...`中了），在左边栏目中找到Pages，设置为如下：

   ![](https://github.com/n1uf/n1uf.github.io/raw/master/img/3_3.png)

   注意这里主分支可能是`main`，第一次尝试创建建议和我一样即可（选择`/(root)`，不用`/docs`）。然后`Save`一下。

3. 如果你之前使用`git-bash`或者`vscode`的一些插件管理过`github`项目，这里直接用你之前的方式为你的新库添加`git`即可。以下是比较臃肿的办法，但比较好用。

   * 在[GitHub Desktop](https://desktop.github.com/)上下载专用与GitHub的git工具。下载安装好后，从左上角`clone`你刚刚在`GitHub`上创建的仓库到本地。

     ![](https://github.com/n1uf/n1uf.github.io/raw/master/img/3_4.png)

     这里`n1uf.github.io`是我已经克隆好的仓库。

   * To be continued.
