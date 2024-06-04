---
layout: post
title:  "修改Minima默认文件实现自定义功能"
date:   2024-06-02 00:01:00 +0800
categories: Function
top: true
---

{%raw%}
* Post内引用图片：`![]({{"assets/img/1.png" | absolute_url}})`，图片路径为`assets/img`或者自己设置一个图片路径。
{%endraw%}

* [置顶功能加入](https://n1uf.github.io/topfunction/2024/06/01/TopFunction.html)

* [公式块正确显示](https://n1uf.github.io/latex/formula/2024/05/31/LatexFormulaDisplay.html)

{% raw %}
* 实现`liquid`代码的正确引用：
  
  通过在`post`类型的`markdown`文件有关`liquid`代码引用内容的开头和结尾加入`{% raw %}`和`endraw`标记**（可恶这里被识别为`liquid`语言了！！！，只能不加`{% %}`展示了）**。
{% endraw %}

* [页脚添加Bilibili账户](https://n1uf.github.io/footer/bilibili/2024/06/02/SocialAdd.html)

* 点击页脚社交媒体链接打开新的网页而非覆盖原网页：
  
  在`_includes`的`social.html`中，为`herf`赋值结束的后面添加`target="_blank"`即可。

* 修改代码块引用的外显表示：
  1. 修改`_base.scss`中`pre,code`中的`background-color`为`rgb(236, 236, 236)`（这一项为代码的背景颜色，而不是整个代码块的背景颜色，与第三步修改的作区分）。
  2. 为`code`添加一行：`font-family:'Lucida Console', Monaco, monospace;`来应用另一种字体（Console）。
  3. 拷贝默认文件`_syntax-highlighting.scss`到`_sass\minima`，修改`.highlighter-rouge`中的`background`为`rgb(236, 236, 236)`。（这里修改的是整个代码块的背景颜色。该文件是控制代码块相关颜色和格式的文件，可以依据喜好自行修改）