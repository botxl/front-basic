"use strict"; // 应用js严格模式

// JS中，每个函数都是Function类型的实例，是对象。因为函数是对象，所以函数名就是指向函数对象的指针。拿到函数名，希望执行时后面增加();

/**
 * ============================函数定义=====================================
 */

// 函数定义方式1，sum1是函数名
function sum1(num1, num2) {
  return num1 + num2;
}

// 函数定义方式2，初始化一个函数，赋值给变量sum2，这里sum2就是函数名
let sum2 = function (num1, num2) {
  return num1 + num2;
};

// 函数定义方式3，用箭头函数定义。就是方式2省略了function关键字，增加了一个箭头
let sum3 = (num1, num2) => {
  return num1 + num2;
};

/**
 * ==============================箭头函数===================================
 * 箭头函数这种简洁的写法，非常适合嵌入函数的场景;
 */
let ints = [1, 2, 3];
console.log(
  ints.map(function (i) {
    return i + 1;
  })
); // [2, 3, 4]

console.log(
  ints.map((i) => {
    return i + 1;
  })
); // [2, 3, 4]

let doubleF = (x) => {
  return 2 * x;
};
// 如果函数体只有一行可以沈略{}
let tripleF = (x) => 3 * x;

/**
 * ==============================函数参数=================================
 * JS中函数参数定义只是为了方便直观，即使不定义参数，调用函数传了多少个参数，使用arguments也可以获得到。
 * 如果使用箭头函数，则没法使用arguments的动态参数机制
 */
function sayHi1(name, message) {
  console.log("Hello " + name + ", " + message);
}

// => 等价于
function sayHi2() {
  console.log(arguments.length); // 可以通过arguments.length获取调用方传入了多少个参数。
  console.log("Hello " + arguments[0] + ", " + arguments[1]); // 具体获取每个参数的值
}

// ES6函数参数提供默认值的写法，即使没传递该参数，则会使用默认值
function makeKing(name = "Henry") {
  return `King ${name} VIII`;
}

// 多参数快捷传递的一个例子
let values = [1, 2, 3, 4];
function getSum() {
  let sum = 0;
  for (let i = 0; i < arguments.length; ++i) {
    5;
    sum += arguments[i];
  }
  return sum;
}
function getSum2(...values) {
  // 顺序累加 values 中的所有值
  // 初始值的总和为0
  return values.reduce((x, y) => x + y, 0);
}

console.log(getSum(...values)); // 10
console.log(getSum(-1, ...values)); // 9
console.log(getSum(...values, 5)); // 15
console.log(getSum(-1, ...values, 5)); // 14
console.log(getSum(...values, ...[5, 6, 7])); // 28

/**
 * =========================函数作为参数===============================
 */
function callSomeFunction(someFunction, someArgument) {
  return someFunction(someArgument);
}
function add10(num) {
  return num + 10;
}
console.log(callSomeFunction(add10, 10)); // 20

/**
 * ============================递归函数=================================
 */
function factorial1(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * factorial1(num - 1);
  }
}

// 更推荐的方式
const factorial2 = function f(num) {
  if (num <= 1) {
    return 1;
  } else {
    return num * f(num - 1);
  }
};

/**
 * ==========================函数闭包===============================
 * 1. 闭包指的是那些引用了另一个函数作用域中变量的函数，通常是在嵌套函数中实现的。允许一个函数访问并操作函数外部的变量。
 * 2. 闭包在许多方面都非常有用，比如帮助保持变量的私有性，创建部分应用函数和管理状态。任何在块级作用于或者函数内的变量，都有私有的特征。
 */
function outer() {
  let count = 0; // `count` 是 `outer` 函数的局部变量
  function inner() {
    count++;
    console.log(count);
  }
  return inner;
}

// 在这个例子中，inner 函数是一个闭包，因为它访问了其外部函数 outer 的局部变量 count。即使 outer 函数的执行已经完成，count 变量仍然被 inner 函数记住并可以访问和修改。
const myFunction = outer(); // myFunction成为了一个闭包
myFunction(); // 输出 1
myFunction(); // 输出 2

/**
 * =========================立即执行的函数表达式============================
 * 立即调用的匿名函数又被称作立即调用的函数表达式。
 */
(function () {
  console.log("The End...."); // The End....
})();
