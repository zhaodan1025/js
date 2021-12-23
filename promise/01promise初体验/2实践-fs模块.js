// 
const fs = require('fs')

// cb形式
// fs.readFile('./content.txt', (err, data)=>{
//     if(err) throw err
//     console.log(data.toString())
// })

// promsie形式
let p = new Promise((resolve, reject)=>{
    fs.readFile('./content.txt', (err, data)=>{
        if(err)reject(err)
        resolve(data)
    })
})

p.then((value)=>{
    console.log(value.toString())
},(reason)=>{
    console.log(reason)
})