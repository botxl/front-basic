"use strict"; // 应用js严格模式

/**
 * ============================异步期约promise===================================
 */
// 通过new来实例化期约，期约可能有以下状态：1. 待定pending 2. 兑现resolved 3. 拒绝rejected
// 1. "待定"表示尚未开始或者正在执行中。
// 2. "兑现"表示已经成功完成，而"拒绝"则表示没有成功完成。
// 待定pending最终会转化为兑现，或者拒绝，过程不可逆。且如果是拒绝，期约会抛出异常, 这里要特别注意，期约的异常在主线程内try-catch是捕获不到的

// 下面三个例子并没有什么异步操作，因为在初始化期约时，执行器函数已经改变了每个期约的状态。
let p = new Promise(() => {});
setTimeout(console.log, 0, p); // Promise { <pending> }

// 通过执行函数控制期约的状态
let p1 = new Promise((resolve, reject) => resolve());
setTimeout(console.log, 0, p1); // Promise <resolved>

function onResolved(id) {
  setTimeout(console.log, 0, id, "resolved");
}
function onRejected(id) {
  setTimeout(console.log, 0, id, "rejected");
}

// 下面期约拒绝，使用try-catch是捕获不到异常的
let p2 = new Promise((resolve, reject) => reject());
setTimeout(console.log, 0, p2); // Promise <rejected>
p2.then(
  () => onResolved("p2"),
  () => onRejected("p2")
);

// 为避免期约卡在待定状态，可以添加一个定时退出功能。比如，可以通过 setTimeout 设置一个10 秒钟后无论如何都会拒绝期约的回调：
let p3 = new Promise((resolve, reject) => {
  setTimeout(reject, 10000); // 10 秒后调用 reject()
  // 执行函数的逻辑
});
p3.then(
  () => onResolved("p3"),
  () => onRejected("p3")
);
setTimeout(console.log, 0, p3); // Promise <pending>
setTimeout(console.log, 11000, p3); // 11 秒后再检查状态

// Promise.prototype.then()是为期约实例添加处理程序的主要方法。这个 then()方法接收最多
// 两个参数：onResolved 处理程序和 onRejected 处理程序。这两个参数都是可选的，如果提供的话，
// 则会在期约分别进入“兑现”和“拒绝”状态时执行。
let p4 = new Promise((resolve, reject) => setTimeout(resolve, 3000));
let p5 = new Promise((resolve, reject) => setTimeout(reject, 3000));
p4.then(
  () => onResolved("p4"),
  () => onRejected("p4")
);
p5.then(
  () => onResolved("p5"),
  () => onRejected("p5")
);

//
let p6 = Promise.reject();
// 这两种添加拒绝处理程序的方式是一样的：
// ，Promise.prototype.catch()的行为与 Promise.prototype.then()的 onRejected 处理程序是一样的。
p6.then(null, onRejected); // rejected
p6.catch(onRejected); // rejected

// 期约可以连锁构成强大逻辑，第一个期约的resolve可以作为第二个期约发起的条件
// 把期约逐个地串联起来是一种非常有用的编程模式。之所以可以这样做，是因为每个期约实例的方
// 法（then()、catch()和 finally()）都会返回一个新的期约对象，而这个新期约又有自己的实例方
// 法。这样连缀方法调用就可以构成所谓的“期约连锁”。比如：
let p7 = new new Promise((resolve, reject) => {
  console.log("p7 executor");
  setTimeout(resolve, 1000); // p7 executor（1 秒后）
})();
p7.then(
  () =>
    new Promise((resolve, reject) => {
      console.log("p8 executor");
      setTimeout(resolve, 1000); // p8 executor（2 秒后）
    })
)
  .then(
    () =>
      new Promise((resolve, reject) => {
        console.log("p9 executor");
        setTimeout(resolve, 1000); // p9 executor（3 秒后）
      })
  )
  .then(
    () =>
      new Promise((resolve, reject) => {
        console.log("p10 executor");
        setTimeout(resolve, 1000); // p4 executor（4 秒后）
      })
  );
