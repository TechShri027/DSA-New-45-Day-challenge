// 1. Reverse an array.
// Output: [5, 4, 3, 2, 1]

//  const arr = [1, 2, 3, 4, 5];

// let reverse=[]
// for(let i=arr.length-1; i>=0; i--){
//    reverse.push(arr[i])
// }
// console.log(reverse)


// ----------------------------------------------------------------------------------------------------------------


// 1. Reverse an array.
// Output: [5, 4, 3, 2, 1]    but in same array

// const arr=[1,2,3,4,5]
// for(let i=0; i<arr.length/2; i++){
//     let temp=arr[i]
//     arr[i]=arr[arr.length-1-i]
//     arr[arr.length-1-i]=temp
// }
// console.log(arr)


// ----------------------------------------------------------------------------------------------------------------

// Flatten a nested array.
// Output: [1, 2, 3, 4, 5]


const arr = [1, [2, 3], [4, [5]]];
const newarr=[]
const flattern=(arr)=>{
arr.map(element => {
    if(Array.isArray(element)){
        flattern(element)
    }else{
        newarr.push(element)
    }

})
}
flattern(arr)
console.log(newarr)


