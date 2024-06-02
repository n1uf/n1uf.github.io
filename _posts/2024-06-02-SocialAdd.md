---
layout: post
title:  "在页脚第二栏添加了Bilibili入口"
date:   2024-06-02 19:30:00 +0800
categories: Footer Bilibili
---
{% raw %}
1. 在`_config.yml`的`github_username`附近添加两行:
    ```yml
    bilibili_bid: 398068101
    bilibili_username: 路人_牛
    ```
2. 复制`minima`默认文件`social.html`到`_includes`目录下，添加对`bilibili`的支持：
   ```html
   {%- if site.bilibili_bid -%}<li><a href="https://space.bilibili.com/{{ site.bilibili_bid }}"><svg class="svg-icon"><use xlink:href="{{ '/assets/minima-social-icons.svg#bilibili' }}"></use></svg><span class="username">{{ site.bilibili_username }}</span></a></li>{%- endif -%}
   ```
3. 复制`minima`默认文件`minima-social-icons.svg`到`assets`目录下，添加`bilibili`矢量图：（[参考这里](https://www.svgrepo.com/svg/345504/bilibili)）
   ```svg
   <symbol id="bilibili" fill-rule="evenodd" clip-rule="evenodd" stroke-linejoin="round" stroke-miterlimit="1.414"><path d="M18.223 3.086a1.25 1.25 0 0 1 0 1.768L17.08 5.996h1.17A3.75 3.75 0 0 1 22 9.747v7.5a3.75 3.75 0 0 1-3.75 3.75H5.75A3.75 3.75 0 0 1 2 17.247v-7.5a3.75 3.75 0 0 1 3.75-3.75h1.166L5.775 4.855a1.25 1.25 0 1 1 1.767-1.768l2.652 2.652c.079.079.145.165.198.257h3.213c.053-.092.12-.18.199-.258l2.651-2.652a1.25 1.25 0 0 1 1.768 0zm.027 5.42H5.75a1.25 1.25 0 0 0-1.247 1.157l-.003.094v7.5c0 .659.51 1.199 1.157 1.246l.093.004h12.5a1.25 1.25 0 0 0 1.247-1.157l.003-.093v-7.5c0-.69-.56-1.25-1.25-1.25zm-10 2.5c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25zm7.5 0c.69 0 1.25.56 1.25 1.25v1.25a1.25 1.25 0 1 1-2.5 0v-1.25c0-.69.56-1.25 1.25-1.25z"/></symbol>
   ```
4. 命令行输入`bundle install`应用新的`_config.yml`

* To be fixed: 现在应用的`svg`代码，放到页面有所裁剪，不美观，暂未找到好的方法。
{% endraw %}