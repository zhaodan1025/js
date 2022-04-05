// object 表示一个js对象
let aa:object;
aa = {};
aa = function(){};

// {} 用来指定对象中可以包含哪些属性
// 语法： {属性名：属性值，属性名：属性值}
// 在属性名后面加上？，表示属性值是可选的
let bb: {name: string, age?: number};

bb = {name: '赵丹'};

// [propName: string]:any 表示任意类型的属性
let cc: {name: string, [propName: string]:any}
cc = {name: '赵丹', a: 1, b: 2}

/*
    设置函数结构的类型声明：
        语法：（形参：类型，形参：类型...） => 返回值
*/
let dd:(a:number,b:number)=>number;
dd = function(n1, n2):number{
    return n1 + n2;
}

/*
    数组的类型声明：
        类型[]
        Array<类型>
*/

// string[] 表示字符串数组
let ee: string[];
ee = ['a', 'b', 'c'];

// number[] 表示数值数组
let ff: number[];

let gg: Array<number>;
gg = [1, 2, 3];

/*
    元组，就是固定长度的数组
    语法： [类型，类型，类型]
*/

let h: [string, string]
h = ['hello', 'abc']

/*
    enum 枚举
*/  
enum Gender{
    Male = 0,
    Female = 1
}
let i: {name: string, gender: Gender};
i = {
    name: '赵丹', 
    gender: Gender.Male
}

// console.log(i.gender === Gender.Male);

// &表示同时
let j: {name: string} & {age: number};
j = {name: '赵丹', age: 26}

// 类型的别名
type myType = 1 | 2 | 3 | 4 | 5;
let k: myType;
let l: myType;
let m: myType;

k = 5;