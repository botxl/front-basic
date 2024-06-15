"use strict"; // 应用js严格模式

// if条件语句
let i = 25;

if (i > 25) {
  console.log("Greater than 25.");
} else if (i < 0) {
  console.log("Less than 0.");
} else {
  console.log("Between 0 and 25, inclusive.");
}

// while语句
let j = 0;
while (j < 10) {
  j += 2;
}
console.log(j);

// for语句类似while，for-in语句，用来循环对象的属性等略
// switch, breack和contine和其他语言类似，标签语句类似其他语言的goto，省略

// for-of迭代，用于遍历可迭代对象的元素
for (const el of [2, 4, 6]) {
  console.log(el);
}

// with语句，将代码作用于限定到特定对象，减少重复代码；严格模式下不允许使用with，这里不再提及

/**
 * > node demo3_statements.js
 * > Between 0 and 25, inclusive.
 * > 10
 * > 2
 * > 4
 * > 6
 */
