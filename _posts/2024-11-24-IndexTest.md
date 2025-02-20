---
layout: post
title: "Markdown 示例文件"
date: 2024-11-24
categories: test
---

*摘要：一个Markdown示例文件用于测试。*

# 这是一个一级标题

欢迎来到这篇文章！这是一个简单的 Markdown 示例文件，展示了常见的 Markdown 语法。

## 这是一个二级标题

### 这是一个三级标题

#### 这是一个四级标题

我们将展示不同类型的内容：

## 段落和文本格式

这是一个段落，段落可以包含**加粗**的文字和*斜体*的文字。你还可以在文本中使用 [链接](https://www.example.com)。

你可以使用 `code` 来标记行内代码，或者使用代码块：

```python
# 这是一个代码块
def hello_world():
    print("Hello, Markdown!")
```

## 列表

### 无序列表

- 项目 1
- 项目 2
  - 子项目 1
  - 子项目 2
- 项目 3

### 有序列表

1. 第一步
2. 第二步
3. 第三步

## 图片

这里是一个图片的示例：

![示例图片](https://via.placeholder.com/150)

## 引用

> 这是一个引用的示例。
>
> Markdown 让你可以很容易地引用他人话语。

## 表格

| 姓名  | 年龄 | 城市    |
|-------|------|---------|
| 张三  | 25   | 北京    |
| 李四  | 30   | 上海    |
| 王五  | 28   | 广州    |

## 分隔线

你可以使用分隔线来分隔内容：

---

## 任务列表

- [x] 完成文章的初稿
- [ ] 添加更多的示例
- [ ] 发布文章

## 代码高亮

如果你希望突出显示某种语言的语法，可以用三反引号来标记代码块，并指定语言类型：

```javascript
console.log("Hello, Markdown!");
```

## 结尾

希望你喜欢这个简单的 Markdown 示例！你可以在 Jekyll 网站中使用类似的结构来创建你的博客文章。

### 解释

- **头部 YAML 配置（Front Matter）**: 文章的元数据（如标题、日期、分类等）。在 Jekyll 中，这部分用于定义文章的属性。
- **Markdown 内容**:
  - `#` 用于标题（从一个 `#` 到六个 `#`，分别表示一级到六级标题）。
  - `-` 或 `*` 用于无序列表，`1.` 用于有序列表。
  - `![图片](图片链接)` 用于插入图片。
  - `>` 用于引用。
  - ` `` ` 用于代码块。
  - `|` 用于表格。
  - `---` 用于分隔线。
  - `- [ ]` 用于任务列表，`- [x]` 用于标记完成的任务。

你可以将这个文件保存为 `.md` 文件并上传到 Jekyll 博客的 `_posts` 文件夹中，Jekyll 会自动渲染它为网页内容。

---