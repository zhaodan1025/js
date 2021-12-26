var arr = [29, 45, 51, 19, 68, 72, 97]

for(var i = 0; i< arr.length-1; i++){
    for(let j = 0; j< arr.length-1; j++){
        if(arr[j] > arr[j+1]){
            let temp = arr[j]
            arr[j] = arr[j+1]
            arr[j+1] = temp
        }
    }
}

console.log(arr)