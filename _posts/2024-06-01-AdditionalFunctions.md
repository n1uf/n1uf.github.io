---
layout: post
title:  "修改Minima默认文件实现自定义功能"
date:   2024-06-01 20:01:00 +0800
categories: Function
top: true
---

{%raw%}
* Post内引用图片：`![]({{"assets/img/1.png" | absolute_url}})`，图片路径为`assets/img`或者自己设置一个图片路径。
{%endraw%}

* [置顶功能加入]({% post_url 2024-06-02-TopFunction %})

* [公式块正确显示]({% post_url 2024-06-01-LatexFormulaDisplay %})

{% raw %}
* 实现`liquid`代码的正确引用：
  
  通过在`post`类型的`markdown`文件有关`liquid`代码引用内容的开头和结尾加入`{% raw %}`和`endraw`标记**（可恶这里被识别为`liquid`语言了！！！，只能不加`{% %}`展示了）**。
{% endraw %}

* [页脚添加Bilibili账户]({% post_url 2024-06-02-SocialAdd %})

* 点击页脚社交媒体链接打开新的网页而非覆盖原网页：
  
  在`_includes`的`social.html`中，为`herf`赋值结束的后面添加`target="_blank"`即可。

* 修改代码块引用的外显表示：
  1. 修改`_base.scss`中`pre,code`中的`background-color`为`rgb(236, 236, 236)`（这一项为代码的背景颜色，而不是整个代码块的背景颜色，与第三步修改的作区分）。
  2. 为`code`添加一行：`font-family:'Lucida Console', Monaco, monospace;`来应用另一种字体（Console）。
  3. 拷贝默认文件`_syntax-highlighting.scss`到`_sass\minima`，修改`.highlighter-rouge`中的`background`为`rgb(236, 236, 236)`。（这里修改的是整个代码块的背景颜色。该文件是控制代码块相关颜色和格式的文件，可以依据喜好自行修改）

* 搜索引擎优化（SEO）：参照下面链接：
  
  [生成SEO](https://github.com/jekyll/jekyll-seo-tag/blob/master/docs/installation.md)，在自己仓库进行操作即可。

* 网站流量分析：
  1. （访问者需要能访问国外网站）Google-Anayltics：先在[这里](https://analytics.google.com/analytics/web/?authuser=0#/provision/SignUp/)注册一下，这里minima已经有对应模版`google-analytics.html`（可以在minima原始库中找到），只需要编辑自己的`_config.yml`，加入`google_analytics: <你在网站上生成的衡量ID>`，install一下即可。
  2. （国内自己的免费流量分析）点击[这里](51.la)进入，类似上面的方法注册后，根据网站给出的代码，插入到自己的`</head>`前即可。

{%raw%}
* 站内引用：`[<外显名字>]({% post_url <你需要引用的post名（不用后缀）> %})`
{%endraw%}

* 时间格式改变：
  
  在`_layouts`下修改`post.html`和`home.html`的`"%b %-d, %Y"`为如下格式即可。
  * "%Y-%m-%d" -> 2024-06-08
  * "%d/%m/%Y" -> 08/06/2024
  * "%B %d, %Y" -> June 08, 2024
  * "%d %B %Y" -> 08 June 2024
  * "%b %d, %Y" -> Jun 08, 2024
  
  ---
  *last updated 2024/06/09 0:35*