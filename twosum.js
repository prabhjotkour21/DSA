"use strict";

let nums = [1, 2, 3, 4]

let target = 7
let n=nums.length
console.log(n)

for (let i=0;i<=n-1;i++){
    for (let j=i+1;j<n;j++){
        if(nums[i]+nums[j]==target){
            console.log(i ,j)
            return 
        }
    }
}console.log("Not Found")
            return

// let map={}

// for (i = 0 to i < n){
//     curr = nums[i]
//     x=target - curr
//     if (map[j] + curr == target) {
//         return map[j],curr
//     } else {
        
//     }
// }




