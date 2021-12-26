/*
    函数节流：一个函数执行一次后，只有在大于设定的执行周期才会执行第二次
*/

// 节流函数
function throttle(fn, delay){
    let lastTime = 0
    return function(){
        let nowTime = Date.now()
        if(nowTime - lastTime > delay){
            fn.call(this)
            lastTime = nowTime
        }
    }
}

/*
    防抖函数：一个需要频繁触发的函数，在规定时间内，只能让最后一个生效，前面的不会生效
*/

// 防抖函数
function debounce(fn, delay){
    let timer = null
    return function(){
        clearTimeout(timer)
        timer = setTimeout(() => {
            fn()
        }, delay);
    }
}