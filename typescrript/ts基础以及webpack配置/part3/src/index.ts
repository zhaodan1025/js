import { hi } from './m1';

function sum(a: number, b: number){
    return a + b
}

const obj1 = {name: '赵丹', age: 33}

console.log(obj1)
obj1.age = 18
console.log(obj1)
console.log(sum(123, 456))
console.log(hi)

console.log(Promise)