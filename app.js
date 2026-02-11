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

// 2.Flatten a nested array.
// Output: [1, 2, 3, 4, 5]


// const arr = [1, [2, 3], [4, [5]]];
// const newarr=[]
// const flattern=(arr)=>{
// arr.map(element => {
//     if(Array.isArray(element)){
//         flattern(element)
//     }else{
//         newarr.push(element)
//     }

// })
// }
// flattern(arr)
// console.log(newarr)



// =========================================================================================================

// 3. Remove duplicate elements from an array.
// Output:[1, 2, 3, 4, 5]

// const arr = [1, 2, 2, 3, 4, 4, 5];
// for(let i=0; i<arr.length; i++){
//     for(let j=i+1; j<arr.length; j++){
//         if(arr[i]==arr[j]){
//             for(let k=j; k<arr.length; k++){
//                 arr[k]=arr[k+1]
//             }
//             arr.length--
//             j--
//         }
//     }
// }
// console.log(arr)







// ===========================================================================================================

// 4. Find the maximum value in an array.

// const arr = [3, 5, 7, 2, 8];
// // Output:8

// let max=arr[0]
// for(let i=0; i<arr.length; i++){
//     if(arr[i]>max){
//         max=arr[i]
//     }
// }
// console.log(max)

// ============================================================================================================

// 5. Sum all elements in an array.

//  const arr = [1, 2, 3, 4];
// // Output:10
// let sum=0
// for(let i=0; i<arr.length; i++){
//     sum+=arr[i]
// }
// console.log(sum)


// ================================================================================================================

// 6. Merge two arrays.

//  const a = [1, 2];
// const b = [3, 4];
// // Output:[1, 2, 3, 4]
// let c=[]
// for(let i=0; i<a.length; i++){
//     c.push(a[i])
// }
// for(let j=0; j<b.length; j++){
//     c.push(b[j])
// }
// console.log(c)


// =============================================================================================================

//  Rotate array to the right by 2 steps.

//  const arr = [1, 2, 3, 4, 5];
// //  Output: [4, 5, 1, 2, 3]
// let n=arr.length
// let newarr=[]
// let k=2
// for(let i=n-k; i<n; i++){
// newarr.push(arr[i])
// }
// for(let j=0; j<n-k; j++){
//     newarr.push(arr[j])
// }
// console.log(newarr)


// =============================================================================================================

// //  Check if all elements are even.

// const arr = [2, 4, 6, 8];
// // Output:true
//    let flag;
// for(let i=0; i<arr.length; i++){
//     if(arr[i]%2==0){
//         flag=true
//     }else{
//         flag=false
//     }
// }
// console.log(flag)


// =============================================================================================================

// 9. Count occurrences of a value.

// const arr = [1, 2, 2, 3, 2];
// let value=2
// let count=0
// // Output for value = 2:3
// for(let i=0; i<arr.length; i++){
//   if(arr[i]==value){
// count++
//   }
   
// }
// console.log(value+":"+count)

// ===============================================================================================================

// 10. Find the index of the second occurrence of a value.

// const arr = [5, 1, 5, 2, 5];
// // Output for value = 5: 2
// let count=0
// for(let i=0; i<arr.length; i++){
//     if(arr[i]==5){
//         count++
//         if(count==2){
//             console.log("5:"+i)
//             break;
//         }
//     }
// }



// ================================================================================================================

// 11. Filter even numbers.

// const arr = [1, 2, 3, 4, 5];
// // Output:[2, 4]
// for(let i=arr.length-1; i>=0; i--){
//     if(arr[i]%2==0){
//      arr.splice(i,1)
//     }
// }

// console.log(arr)


