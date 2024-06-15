"use strict"; // 应用js严格模式

const a = 1;
var b = 2;

let sum = a + b;
let diff = a - b;

console.log(sum);
console.log(diff);

let test = true;
if (test) {
  test = false;
  console.log(test);
}

/**
 * > node demo1.js
 * > 3
 * > -1
 * > false
 */

// tips1: var, const, let区别
// 1.var 在 ECMAScript 的所有版本中都可以使用，而 const 和 let 只能在 ECMAScript 6 及更晚的版本中使用。
// 2. let声明的变量是块级作用于，var声明变量是函数作用域
// 3. 循环体内循环变量一定要使用let，不然使用var会渗透到函数内（ES6）
// 4. 能用let就用let（ES6）
// 5. const声明变量和let基本相同，区别是const声明变量必须指定初始化值，且不能修改
