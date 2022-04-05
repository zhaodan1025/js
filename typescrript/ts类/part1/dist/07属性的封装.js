"use strict";
(function () {
    // 定义一个表示人的类
    class Person {
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
        /*
            getter方法用来读取属性
            setter方法用来设置属性
                它们被称为属性的存取器
        */
        // 定义方法，用来获取name属性
        // getName(){
        //     return this.name
        // }
        // // 定义方法，用来设置name属性
        // setName(value: string){
        //     this.name = value
        // }
        // getAge(){
        //     return this.age
        // }
        // setAge(value: number){
        //     // 判断年龄是否合法
        //     if(value >= 0){
        //         this.age = value
        //     }
        // }
        // ts中设置getter方法的方式
        get Name() {
            console.log('get Name()执行了');
            return this.name;
        }
        set Name(value) {
            this.name = value;
        }
        get Age() {
            return this.age;
        }
        set Age(value) {
            if (value >= 0) {
                this.age = value;
            }
        }
    }
    const per = new Person('赵丹', 26);
    /*
        现在属性时在对象中设置的，属性可以任意的被修改
            属性可以任意被修改将会导致对象中的数据变得非常不安全
    */
    // per.name = '孙悟空';
    // per.age = 45;
    // per.setName('孙悟空')
    // per.setAge(-33)
    per.Name = '孙悟空';
    console.log(per.Name);
    class A {
        constructor(num) {
            this.num = num;
        }
    }
    class B extends A {
        test() {
            console.log(this.num);
        }
    }
    class C {
        // 可以直接将属性定义在构造函数中
        constructor(name, age) {
            this.name = name;
            this.age = age;
        }
    }
    const c = new C('xxx', 23);
    console.log(c);
})();
