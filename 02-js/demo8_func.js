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
