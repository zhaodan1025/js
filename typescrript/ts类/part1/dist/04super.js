"use strict";
(function () {
    class Animal {
        constructor(name) {
            this.name = name;
        }
        sayHello() {
            console.log('动物在叫');
        }
    }
    class Dog extends Animal {
        constructor(name, age) {
            // 如果在子类中写了构造函数，在子类的构造函数中必须对父类的构造函数进行调用
            super(name); // 调用父类的构造函数
            this.age = age;
        }
    }
    const dog = new Dog('旺财', 3);
    dog.sayHello();
})();
