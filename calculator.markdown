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
      <input type="text" id="display" readonly>
    </div>
    <div class="buttons">
      <button class="btn btn-clear" onclick="clearDisplay()">C</button>
      <button class="btn btn-clear" onclick="deleteLast()">⌫</button>
      <button class="btn btn-operator" onclick="appendToDisplay('/')">/</button>
      <button class="btn btn-operator" onclick="appendToDisplay('*')">×</button>
      
      <button class="btn btn-number" onclick="appendToDisplay('7')">7</button>
      <button class="btn btn-number" onclick="appendToDisplay('8')">8</button>
      <button class="btn btn-number" onclick="appendToDisplay('9')">9</button>
      <button class="btn btn-operator" onclick="appendToDisplay('-')">-</button>
      
      <button class="btn btn-number" onclick="appendToDisplay('4')">4</button>
      <button class="btn btn-number" onclick="appendToDisplay('5')">5</button>
      <button class="btn btn-number" onclick="appendToDisplay('6')">6</button>
      <button class="btn btn-operator" onclick="appendToDisplay('+')">+</button>
      
      <button class="btn btn-number" onclick="appendToDisplay('1')">1</button>
      <button class="btn btn-number" onclick="appendToDisplay('2')">2</button>
      <button class="btn btn-number" onclick="appendToDisplay('3')">3</button>
      <button class="btn btn-equals" onclick="calculate()" rowspan="2">=</button>
      
      <button class="btn btn-number btn-zero" onclick="appendToDisplay('0')">0</button>
      <button class="btn btn-number" onclick="appendToDisplay('.')">.</button>
    </div>
  </div>
</div>

## 功能说明

- **基本运算**: 支持加(+)、减(-)、乘(×)、除(/)运算
- **清除功能**: C 键清除所有内容，⌫ 键删除最后一个字符
- **小数运算**: 支持小数点运算
- **键盘支持**: 可以使用键盘输入数字和运算符
- **错误处理**: 自动处理除零等错误情况

## 使用说明

1. 点击数字按钮输入数字
2. 点击运算符按钮选择运算
3. 点击等号(=)按钮计算结果
4. 使用 C 键清除，⌫ 键删除
5. 支持键盘输入，按 Enter 键计算结果
