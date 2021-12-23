/*
    util.promisify方法
    将错误优先的promise返回成一个promise对象
*/
const util = require('util')
const fs = require('fs')
let mineReadFile = util.promisify(fs.readFile)

mineReadFile('./content.txt').then(value=>{
    console.log(value.toString())
},reason=>{
    console.log(reason)
})