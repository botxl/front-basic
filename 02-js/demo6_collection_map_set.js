"use strict"; // 应用js严格模式\

/**
 * ============================Map===============================
 */

// 与 Object 只能使用数值、字符串或符号作为键不同，Map 可以使用任何 JavaScript 数据类型作为键
// 与 Object 类型的一个主要差异是，Map 实例会维护键值对的插入顺序，因此可以根据插入顺序执行迭代操作。这点与Golang语言不同

const m = new Map();
m.set("firstName", "Matt").set("lastName", "Frisbie");
console.log(m.has("firstName")); // true
console.log(m.get("firstName")); // Matt
m.delete("firstName");
console.log(m); // Map(1) { 'lastName' => 'Frisbie' }
m.clear();
console.log(m); // Map(0) {}

// 使用嵌套数组初始化映射
const m1 = new Map([
  ["key1", "val1"],
  ["key2", "val2"],
  ["key3", "val3"],
]);

for (let pair of m1.entries()) {
  // [ 'key1', 'val1' ]
  // [ 'key2', 'val2' ]
  // [ 'key3', 'val3' ]
  console.log(pair);
}

// key1 -> val1
// key2 -> val2
// key3 -> val3
m1.forEach((val, key) => console.log(`${key} -> ${val}`));
console.log(m1.keys()); // [Map Iterator] { 'key1', 'key2', 'key3' }
console.log(m1.values()); // [Map Iterator] { 'val1', 'val2', 'val3' }

// 选择Object还是选择Map?
