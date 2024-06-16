"use strict"; // 应用js严格模式

/**
 * ==============================Object=======================================
 */

// Object对象存储属性的集合
let person = new Object();
person.name = "Nicholas";
person.age = 29;

// 初始化对象的第二种方式
let person2 = {
  name: "Nicholas",
  age: 29,
};

// 初始化对象的第三种方式
let person3 = {}; // 等价于new Object()的方式
person.name = "Nicholas";
person.age = 29;

console.log(person.name); // Nicholas
console.log(person["age"]); // 29

/**
 * ===============================Array======================================
 */

const a = ["foo", "bar", "baz", "qux"];

const aKeys = Array.from(a.keys());
const aValues = Array.from(a.values());
const aEntries = Array.from(a.entries());
console.log(aKeys); // [0, 1, 2, 3]
console.log(aValues); // ["foo", "bar", "baz", "qux"]
console.log(aEntries); // [[0, "foo"], [1, "bar"], [2, "baz"], [3, "qux"]]
for (const [idx, element] of a.entries()) {
  console.log(idx); // 0 1 2 3
  console.log(element); // foo bar baz qux
}
console.log(a.toString()); // foo,bar,baz,qux
console.log(a.valueOf()); // [ 'foo', 'bar', 'baz', 'qux' ]
console.log(a.join(" ")); // foo bar baz qux

// 数组实现栈Stack
let pushCount = a.push("ex");
console.log(a.valueOf()); // [ 'foo', 'bar', 'baz', 'qux', 'ex' ]
let popItem = a.pop();
console.log(popItem); // ex
console.log(a.valueOf()); // [ 'foo', 'bar', 'baz', 'qux' ]

// 数组实现队列Queue
let pushCount2 = a.push("ex");
let shiftItem = a.shift();
console.log(shiftItem); // foo
console.log(a.valueOf()); // [ 'bar', 'baz', 'qux', 'ex' ]

// 数组快速排序和翻转
a.sort();
console.log(a.valueOf()); // [ 'bar', 'baz', 'ex', 'qux' ]
console.log(a.reverse()); // [ 'qux', 'ex', 'baz', 'bar' ]
function compare(value1, value2) {
  if (value1 < value2) {
    return -1;
  } else if (value1 > value2) {
    return 1;
  } else {
    return 0;
  }
}
a.sort(compare); // sort排序可以指定排序函数
console.log(a.valueOf()); // [ 'bar', 'baz', 'ex', 'qux' ]
a.sort((a, b) => (a < b ? 1 : a > b ? -1 : 0)); // 等价于上面排序函数的方式，箭头函数表示法

// 对数组打平和切片
let colors = ["red", "green", "blue"];
let colors2 = colors.concat("yellow", ["black", "brown"]); // 返回了一个新数组colors2
console.log(colors2.valueOf()); // [ 'red', 'green', 'blue', 'yellow', 'black', 'brown' ]

let colors3 = colors2.slice(1, 4);
console.log(colors3.valueOf()); // [ 'green', 'blue', 'yellow' ]

// 数组splice方法:
//  1. 删除一个元素, splice([开始位置], [删除多少数量])
//  2. 插入一个愿挨, splice([开始位置], [输入元素的数量], [要插入的元素])
//  3. 替换元素, splice([开始位置], [要删除的元素数量], [要插入任意多个元素...])
let removed = colors3.splice(0, 1); // 删除第一项
console.log(colors3.valueOf()); // [ 'blue', 'yellow' ]
removed = colors3.splice(1, 0, "yellow", "orange"); // 在位置 1 插入两个元素
console.log(colors3.valueOf()); // [ 'blue', 'yellow', 'orange', 'yellow' ]
removed = colors3.splice(1, 1, "red", "purple"); // 插入两个值，删除一个元素
console.log(colors3.valueOf()); // [ 'blue', 'red', 'purple', 'orange', 'yellow' ]

// 数组搜索：
// indexOf()、lastIndexOf()和 includes(), 其中includes方法只在ES7中有效，举例略
// find和findIndex来搜索数组并断言, find返回找到的第一个元素，findIndex返回找到的第一个元素的索引
const people = [
  {
    name: "Matt",
    age: 27,
  },
  {
    name: "Nicholas",
    age: 29,
  },
];
console.log(people.find((element, index, array) => element.age < 28)); // { name: 'Matt', age: 27 }

// 数组迭代:
// every()：对数组每一项都运行传入的函数，如果对每一项函数都返回 true，则这个方法返回 true。
// filter()：对数组每一项都运行传入的函数，函数返回 true 的项会组成数组之后返回。
// forEach()：对数组每一项都运行传入的函数，没有返回值。
// map()：对数组每一项都运行传入的函数，返回由每次函数调用的结果构成的数组。
// some()：对数组每一项都运行传入的函数，如果有一项函数返回 true，则这个方法返回 true。
let numbers = [1, 2, 3, 4, 5, 4, 3, 2, 1];
let everyResult = numbers.every((item, index, array) => item > 2);
console.log(everyResult); // false
let someResult = numbers.some((item, index, array) => item > 2);
console.log(someResult); // true
let filterResult = numbers.filter((item, index, array) => item > 2);
console.log(filterResult); // [ 3, 4, 5, 4, 3 ]
let mapResult = numbers.map((item, index, array) => item * 2);
console.log(mapResult); // [2, 4, 6, 8, 10, 8, 6, 4, 2]
numbers.forEach((item, index, array) => {
  // 数组的每一项，执行某些操作
});

// 数组归并聚集：
// reduce()和 reduceRight()
// reduce()方法从数组第一项开始遍历到最后一项。而 reduceRight()从最后一项开始遍历至第一项。
// 两个函数都含有四个参数：上一个归并值、当前项、当前项的索引和数组本身
let values = [1, 2, 3, 4, 5];
let sum = values.reduce((prev, cur, index, array) => prev + cur);
let sum2 = values.reduceRight(function (prev, cur, index, array) {
  return prev + cur;
});
console.log(sum); // 15
console.log(sum2); // 15
