"use strict"; // 应用js严格模式

/**
 * ===================封装======================
 * 通过get和set方法来控制对属性的访问和修改。
 */
class Person {
  constructor(name, age) {
    this._name = name; // 使用下划线表示私有属性
    this._age = age;
  }

  // 获取名字的方法
  get name() {
    return this._name;
  }

  // 设置名字的方法
  set name(newName) {
    this._name = newName;
  }

  // 获取年龄的方法
  get age() {
    return this._age;
  }

  // 设置年龄的方法
  set age(newAge) {
    if (newAge > 0) {
      this._age = newAge;
    } else {
      console.error("年龄必须大于0");
    }
  }

  introduce() {
    console.log(`我叫${this._name}，今年${this._age}岁。`);
  }
}

const person = new Person("张三", 25);
console.log(person.name); // 张三
person.name = "李四";
console.log(person.name); // 李四
person.age = -5; // 年龄必须大于0
console.log(person.age); // 25
person.introduce(); // 我叫李四，今年25岁。

/**
 * ===================继承==========================
 * 通过extends关键字实现子类继承父类的属性和方法。
 */
class Student extends Person {
  constructor(name, age, grade) {
    super(name, age); // 调用父类的构造函数
    this._grade = grade;
  }

  // 获取年级的方法
  get grade() {
    return this._grade;
  }

  // 设置年级的方法
  set grade(newGrade) {
    this._grade = newGrade;
  }

  introduce() {
    console.log(
      `我叫${this._name}，今年${this._age}岁，读${this._grade}年级。`
    );
  }
}

const student = new Student("王五", 10, "四");
console.log(student.name); // 王五
student.name = "赵六";
console.log(student.name); // 赵六
student.introduce(); // 我叫赵六，今年10岁，读四年级。

/**
 * ======================多态========================
 * 通过方法重写（introduce方法在不同类中有不同的实现）实现多态。
 */
class Teacher extends Person {
  constructor(name, age, subject) {
    super(name, age);
    this._subject = subject;
  }

  // 获取教授科目
  get subject() {
    return this._subject;
  }

  // 设置教授科目
  set subject(newSubject) {
    this._subject = newSubject;
  }

  introduce() {
    console.log(`我叫${this._name}，今年${this._age}岁，教${this._subject}。`);
  }
}

const teacher = new Teacher("李老师", 40, "数学");
teacher.introduce(); // 我叫李老师，今年40岁，教数学。

const people = [person, student, teacher];
// 我叫李四，今年25岁。
// 我叫赵六，今年10岁，读四年级。
// 我叫李老师，今年40岁，教数学。
people.forEach((p) => p.introduce());
