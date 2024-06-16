"use strict"; // 应用js严格模式

// 用Date构造函数，创建一个日期的实例，保存到变量now中
let now = new Date();
let someDate = new Date(Date.parse("May 23, 2019"));
// GMT 时间 2000 年 1 月 1 日零点
let y2k = new Date(Date.UTC(2000, 0));
// GMT 时间 2005 年 5 月 5 日下午 5 点 55 分 55 秒
let allFives = new Date(Date.UTC(2005, 4, 5, 17, 55, 55));

console.log(allFives.toString());
console.log(allFives.toDateString());
console.log(allFives.toTimeString());
console.log(allFives.toUTCString());
console.log(allFives.getTime()); // 返回日期的毫秒值
console.log(allFives.getDay()); // 周几？
// ...略

/**
 * > node demo4_basic_ref_type.js
 * > Fri May 06 2005 01:55:55 GMT+0800 (China Standard Time)
 * > Fri May 06 2005
 * > 01:55:55 GMT+0800 (China Standard Time)
 * > Thu, 05 May 2005 17:55:55 GMT
 * > 1115315755000
 * > 5
 */

// 包装类型是基础类型的升级，包装类型主要有Boolean, Number, String
let s1 = "some text"; // s1是原始值
let s2 = s1.substring(2); // 原始值s1不应该有方法，这里自动升级s1的类型为String再调用方法的
