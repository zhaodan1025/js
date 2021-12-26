let arr = [1, 1, 2, 4, 5, 6, 6, 7, 4, 3, 3]

// function uniq(arr){
//     for(let i = 0; i< arr.length; i++){
//         for(let j = i+1; j<arr.length; j++){
//             if(arr[i] === arr[j]){
//                 arr.splice(j,1)
//                 j--
//             }
//         }
//     }
//     return arr
// }

// function uniq(arr){
//     let res = []
//     for(let i = 0; i< arr.length; i++){
//         if(!res.includes(arr[i])){
//             res.push(arr[i])
//         }
//     }
//     return res
// }

// function uniq(arr){
//     let res = []
//     for(let i = 0; i< arr.length; i++){
//         if(res.indexOf(arr[i]) === -1){
//             res.push(arr[i])
//         }
//     }
//     return res
// }

function uniq(arr){
    let res = Array.from(new Set(arr))
    return res
}

console.log(uniq(arr))