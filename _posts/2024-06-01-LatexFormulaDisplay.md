---
layout: post
title:  "为Minima主题的Post添加Latex公式显示"
date:   2024-06-01 00:30:00 +0800
latex: true
categories: Latex Formula
---
{% raw %}

在`_includes`内创建文件`katex.html`（使用katex渲染公式）：

```html
<!--add support for latex formula-->
{%- if page.latex == true -%}
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.css">
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/katex.min.js"></script>
<script defer src="https://cdn.jsdelivr.net/npm/katex@0.15.1/dist/contrib/auto-render.min.js"
  onload="renderMathInElement(document.body, {
    delimiters: [
      {left: '$$', right: '$$', display: true},
      {left: '$', right: '$', display: false},
      {left: '\\[', right: '\\]', display: true},
      {left: '\\(', right: '\\)', display: false}
    ],
    throwOnError: false
  });">
</script>
{%- endif -%}
```

在`head.html`内添加如下代码启用支持：

```html
<!--add support for latex formula-->
  {% include katex.html %}
```

此时，可以在页头添加`latex: true`来启用Latex公式支持。

***以下为示例***


This is an inline formula: $E = mc^2$.

$$
\int_{a}^{b} f(x) \, dx = F(b) - F(a) \\
\text{with } a \leq x \leq b
$$

$$
\frac{\partial{L_{CE}(w,b)}}{\partial{w_j}}\\
=-\left[y\cdot\frac{1}{\sigma(w\cdot x+b)}\cdot\frac{\partial{\sigma(w\cdot x+b)}}{\partial{w_j}}+(1-y)\cdot\frac{1}{1-\sigma(w\cdot x+b)}\cdot\frac{\partial{(1-\sigma(w\cdot x+b))}}{\partial{w_j}}\right]\\
=-\left[y\cdot\frac{1}{\sigma z}\cdot\sigma z(1-\sigma z)x_j-(1-y)\cdot\frac{1}{1-\sigma z}\cdot(-\sigma z)(1-\sigma z)(-x_j)\right](令z=w\cdot x+b)\\
=-(y-\sigma z)x_j=[\sigma(w\cdot x+b)-y]x_j
$$


{% endraw %}