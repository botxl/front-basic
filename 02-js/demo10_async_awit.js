/**
 * ============================ES8异步函数Async/await======================================
 */
// 1. async 关键字用于声明异步函数。这个关键字可以用在函数声明、函数表达式、箭头函数和方法上
// 2. async定义的函数签名，实际上得到的是一个期约

// 1
// 2
// 3
async function foo() {
  console.log(1);
  return 3;
}
// => 等价于
// async function foo() {
//   console.log(1);
//   return Promise.resolve(3);
// }
// 给返回的期约添加一个解决处理程序
foo().then(console.log);
console.log(2);

// 因为异步函数主要针对不会马上完成的任务，所以自然需要一种暂停和恢复执行的能力。使用 await
// 关键字可以暂停异步函数代码的执行，等待期约解决。
let p99 = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
p99.then((x) => console.log(x)); // 3

// 等价于async/awit的方式如下
async function foo99() {
  let p = new Promise((resolve, reject) => setTimeout(resolve, 1000, 3));
  console.log(await p);
}
foo99(); // 3

// 利用简单箭头函数实现sleep的效果
async function sleep(delay) {
  return new Promise((resolve) => setTimeout(resolve, delay));
}
async function foo() {
  const t0 = Date.now();
  await sleep(1500); // 暂停约 1500 毫秒
  console.log(Date.now() - t0);
}
foo(); // 1502
