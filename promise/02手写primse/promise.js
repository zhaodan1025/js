// function Promise(executor) {
//     // 添加属性
//     this.PromiseState = 'pending'
//     this.PromiseResult = null
//     // 生命属性
//     this.callbacks = []

//     const that = this

//     function resolve(data) {
//         // 判断状态
//         if (that.PromiseState !== 'pending') return
//         // 1. 修改对象状态 (promiseState)
//         that.PromiseState = 'fulfilled'
//         // 2. 设置对象结果值(promiseResult)
//         that.PromiseResult = data
//         // 调用成功的回调函数
//         setTimeout(() => {
//             that.callbacks.forEach(item => {
//                 item.onResolved(data)
//             })
//         })
//     }
//     function reject(data) {
//         if (that.PromiseState !== 'pending') return
//         that.PromiseState = 'rejected'
//         that.PromiseResult = data
//         setTimeout(() => {
//             that.callbacks.forEach(item => {
//                 item.onRejected(data)
//             })
//         })
//     }
//     try {
//         // 同步调用 执行器函数
//         executor(resolve, reject)
//     } catch (e) {
//         reject(e)
//     }

// }

// // 添加 then 方法
// Promise.prototype.then = function (onResolved, onRejected) {
//     const that = this
//     if (typeof onRejected !== 'function') {
//         onRejected = reason => {
//             throw reason
//         }
//     }
//     if (typeof onResolved !== 'function') {

//         onResolved = value => value
//     }
//     return new Promise((resolve, reject) => {
//         function callback(type) {
//             try {
//                 let result = type(that.PromiseResult)
//                 if (result instanceof Promise) {
//                     result.then(v => {
//                         resolve(v)
//                     }, r => {
//                         reject(r)
//                     })
//                 }
//             } catch (e) {
//                 reject(e)
//             }
//         }
//         // 调用回调函数 PromiseState
//         if (this.PromiseState === 'fulfilled') {
//             setTimeout(() => {
//                 callback(onResolved)
//             })
//         }
//         if (this.PromiseState === 'rejected') {
//             setTimeout(() => {
//                 callback(onRejected)
//             })
//         }
//         // 判断pending
//         if (this.PromiseState === 'pending') {
//             // 保存回调函数
//             this.callbacks.push({
//                 onResolved: function () {
//                     callback(onResolved)
//                 },
//                 onRejected: function () {
//                     callback(onRejected)
//                 }
//             })
//         }
//     })
// }

// // 添加 catch 方法
// Promise.prototype.catch = function (onRejected) {
//     return this.then(undefined, onRejected)
// }

// // 添加 resolve 方法
// Promise.resolve = function (value) {
//     // 返回promise对象
//     return new Promise((resolve, reject) => {
//         if (value instanceof Promise) {
//             value.then(v => {
//                 resolve(v)
//             }, r => {
//                 reject(r)
//             })
//         } else {
//             resolve(value)
//         }
//     })
// }

// // 添加 reject 方法
// Promise.reject = function (reason) {
//     return new Promise((resolve, reject) => {
//         reject(reason)
//     })
// }

// // 添加 all 方法
// Promise.all = function (promises) {
//     return new Promise((resolve, reject) => {
//         let count = 0
//         let arr = []
//         // 遍历
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(v => {
//                 // 得知对象的状态是成功的
//                 // 每个promise对象都成功 才能执行 resolve（）
//                 count++
//                 // 将当前promise对象成功的结果存入到数组中
//                 // arr.push(v) // 该方法会导致数组顺序问题
//                 arr[i] = v
//                 if (count === promises.length) {
//                     resolve(arr)
//                 }
//             }, r => {
//                 reject(r)
//             })
//         }
//     })
// }

// // 添加 race 方法
// Promise.race = function (promises) {
//     return new Promise((resolve, reject) => {
//         for (let i = 0; i < promises.length; i++) {
//             promises[i].then(v => {
//                 resolve(v)
//             }, r => {
//                 reject(r)
//             })
//         }
//     })
// }


// --------------------------------------------------------
// calss写法
class Promise {
    // 构造方法
    constructor(executor) {
        // 添加属性
        this.PromiseState = 'pending'
        this.PromiseResult = null
        // 生命属性
        this.callbacks = []

        const that = this

        function resolve(data) {
            // 判断状态
            if (that.PromiseState !== 'pending') return
            // 1. 修改对象状态 (promiseState)
            that.PromiseState = 'fulfilled'
            // 2. 设置对象结果值(promiseResult)
            that.PromiseResult = data
            // 调用成功的回调函数
            setTimeout(() => {
                that.callbacks.forEach(item => {
                    item.onResolved(data)
                })
            })
        }
        function reject(data) {
            if (that.PromiseState !== 'pending') return
            that.PromiseState = 'rejected'
            that.PromiseResult = data
            setTimeout(() => {
                that.callbacks.forEach(item => {
                    item.onRejected(data)
                })
            })
        }
        try {
            // 同步调用 执行器函数
            executor(resolve, reject)
        } catch (e) {
            reject(e)
        }
    }
    // then 方法
    then(onResolved, onRejected) {
        const that = this
        if (typeof onRejected !== 'function') {
            onRejected = reason => {
                throw reason
            }
        }
        if (typeof onResolved !== 'function') {

            onResolved = value => value
        }
        return new Promise((resolve, reject) => {
            function callback(type) {
                try {
                    let result = type(that.PromiseResult)
                    if (result instanceof Promise) {
                        result.then(v => {
                            resolve(v)
                        }, r => {
                            reject(r)
                        })
                    }
                } catch (e) {
                    reject(e)
                }
            }
            // 调用回调函数 PromiseState
            if (this.PromiseState === 'fulfilled') {
                setTimeout(() => {
                    callback(onResolved)
                })
            }
            if (this.PromiseState === 'rejected') {
                setTimeout(() => {
                    callback(onRejected)
                })
            }
            // 判断pending
            if (this.PromiseState === 'pending') {
                // 保存回调函数
                this.callbacks.push({
                    onResolved: function () {
                        callback(onResolved)
                    },
                    onRejected: function () {
                        callback(onRejected)
                    }
                })
            }
        })
    }
    // catch 方法
    catch(onRejected){
        return this.then(undefined, onRejected)
    }
    // resolve 方法
    static resolve(value) {
        // 返回promise对象
        return new Promise((resolve, reject) => {
            if (value instanceof Promise) {
                value.then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            } else {
                resolve(value)
            }
        })
    }
    // reject 方法
    static reject(reason){
        return new Promise((resolve, reject)=>{
            reject(reason)
        })
    }
    // all 方法
    static all(promises) {
        return new Promise((resolve, reject) => {
            let count = 0
            let arr = []
            // 遍历
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    // 得知对象的状态是成功的
                    // 每个promise对象都成功 才能执行 resolve（）
                    count++
                    // 将当前promise对象成功的结果存入到数组中
                    // arr.push(v) // 该方法会导致数组顺序问题
                    arr[i] = v
                    if (count === promises.length) {
                        resolve(arr)
                    }
                }, r => {
                    reject(r)
                })
            }
        })
    }
    // race 方法
    static race(promises) {
        return new Promise((resolve, reject) => {
            for (let i = 0; i < promises.length; i++) {
                promises[i].then(v => {
                    resolve(v)
                }, r => {
                    reject(r)
                })
            }
        })
    }
}
