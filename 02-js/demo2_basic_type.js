"use strict"; // 应用js严格模式

let message = "some string";
console.log("1. string类型:");
console.log(typeof message);

console.log("2. 数字类型:");
console.log(typeof 95);

// 当声明了变量，但是还未赋值，会得到undefined
let message2;
console.log("3. undefined类型:");
console.log(typeof message2);

let o = new Object();
console.log("3. Object类型:");
console.log(typeof o);

// tips: JS中的类型大致如下，Undefined、Null、Boolean、Number、String、Symbol（ES6）和 Object。
