---
layout: calculator
title: 在线计算器
permalink: /calculator/
description: 一个功能完整的在线计算器，支持基本数学运算
---

# 在线计算器

这是一个功能完整的在线计算器，支持基本的数学运算。

<div class="calculator-container">
  <div class="calculator">
    <div class="display">
      <input type="text" id="display" placeholder="输入表达式...">
    </div>
    <div class="buttons">
      <!-- 第一行：清除和功能按钮 -->
      <button class="btn btn-clear">C</button>
      <button class="btn btn-clear">⌫</button>
      <button class="btn btn-parenthesis">(</button>
      <button class="btn btn-parenthesis">)</button>
      <button class="btn btn-function">√</button>
      
      <!-- 第二行：数字和运算符 -->
      <button class="btn btn-number">7</button>
      <button class="btn btn-number">8</button>
      <button class="btn btn-number">9</button>
      <button class="btn btn-operator">÷</button>
      <button class="btn btn-function">^</button>
      
      <!-- 第三行：数字和运算符 -->
      <button class="btn btn-number">4</button>
      <button class="btn btn-number">5</button>
      <button class="btn btn-number">6</button>
      <button class="btn btn-operator">×</button>
      <button class="btn btn-function">π</button>
      
      <!-- 第四行：数字和运算符 -->
      <button class="btn btn-number">1</button>
      <button class="btn btn-number">2</button>
      <button class="btn btn-number">3</button>
      <button class="btn btn-operator">-</button>
      <button class="btn btn-function">e</button>
      
      <!-- 第五行：0、小数点和等号 -->
      <button class="btn btn-number btn-zero">0</button>
      <button class="btn btn-number">.</button>
      <button class="btn btn-operator">+</button>
      <button class="btn btn-equals">=</button>
    </div>
  </div>
</div>

## 功能说明

- **基本运算**: 支持加(+)、减(-)、乘(×)、除(/)运算
- **高级运算**: 支持乘方(^)、开根(√)运算
- **括号运算**: 支持括号()改变运算优先级
- **常数**: 支持π和e常数
- **连续计算**: 支持复杂表达式连续输入和计算
- **直接输入**: 文本框支持直接输入表达式
- **清除功能**: C 键清除所有内容，⌫ 键删除最后一个字符
- **小数运算**: 支持小数点运算
- **键盘支持**: 可以使用键盘输入数字和运算符
- **错误处理**: 自动处理语法错误和数学错误

## 使用说明

1. **按钮操作**: 点击数字和运算符按钮输入表达式
2. **直接输入**: 在文本框中直接输入数学表达式
3. **键盘操作**: 
   - 数字键：输入数字
   - 运算符键：+、-、*、/、^
   - Enter或=：计算结果
   - Escape：清除所有内容
   - Backspace：删除最后一个字符
4. **表达式示例**:
   - 基本运算：`2 + 3 * 4`
   - 括号运算：`(2 + 3) * 4`
   - 乘方运算：`2^3` 或 `2**3`
   - 开根运算：`sqrt(16)`
   - 复杂表达式：`sqrt(2^2 + 3^2) * π`
