// Input: nums = [1,2,3,4]

// Output: false

// Input: nums = [1,2,3,1]

// Output: true

let nums = [1, 2, 3, 1];
// function containsDuplicate(nums) {
//     for (let i = 0; i < nums.length; i++){
//         for (let j = i + 1; j < nums.length; j++){
//             if (nums[i] ==nums[j]) {
//                 return "true"
//             }
//         }
//     }return "false"
    
// }


// console.log(containsDuplicate(nums));

function containsDuplicate(nums) {
    let map = {};

    for (let i = 0; i < nums.length; i++) {

        if (map[nums[i]]) {
            map[nums[i]]++;
        } else {
            map[nums[i]] = 1;
        }

    }
    console.log(map.value)
    for (let key in map) {
        if (map[key] > 1) {
            console.log(map[key])
            return true;
        }
    }
  
    return false;
    
}


console.log(containsDuplicate(nums));

// let map = {
//     1:
// }
// for (i = 0 to i < n){
//     if (map[i] == nums[i]) {
//         map[i].value
//     } else {
//         map[i]=nums[i]
//     }
// }
// for (j = 0; j < map.length; j++){
//     if (map[j].value > 1) {
//         return false
//     }
// }
// return true

let map = {}

for (let i = 0; i < nums.length; i++){
    map[nums[i]]=i
}


// console.log(map);
