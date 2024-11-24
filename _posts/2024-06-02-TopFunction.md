---
layout: post
title:  "置顶功能加入"
date:   2024-06-02 00:45:00 +0800
categories: function
---

*摘要：添加置顶功能。*

在`home.html`中使用`liquid`语言加入`if`判断，添加`post`类型`layouts`的页头属性`top`。
遍历所有`post`，当值为`true`时，使用强调体`<strong>`加入“置顶”样式，然后正常输出到页面上。
再次遍历，当值不是`true`，使用默认方式输出即可。

该网站中置顶功能被实现在**Minima主题自定义指南**。

{% raw %}
`home.html`中修改过的内容，其代码如下：

```html
{%- for post in site.posts -%}
    <li>
        {%-if post.top == true -%}
          <strong class="post-meta">置顶<br /></strong>

          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
          <span class="post-meta">{{ post.date | date: date_format }}</span>
          <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
            </a>
          </h3>
          {%- if site.show_excerpts -%}
            {{ post.excerpt }}
          {%- endif -%}
        {%- endif -%}
      </li>
      {%- endfor -%}

      {%- for post in site.posts -%}
      <li>
        {%-if post.top != true -%}
          {%- assign date_format = site.minima.date_format | default: "%b %-d, %Y" -%}
          <span class="post-meta">{{ post.date | date: date_format }}</span>
          <h3>
            <a class="post-link" href="{{ post.url | relative_url }}">
              {{ post.title | escape }}
            </a>
          </h3>
          {%- if site.show_excerpts -%}
            {{ post.excerpt }}
          {%- endif -%}
        {%- endif -%}
    </li>
{%- endfor -%}
```

{% endraw %}
