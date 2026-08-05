let nums = [1,2,3,1,2,3]
let k = 2

function ContainDuplicateNumber(nums, k) {
    for (let i = 0; i < nums.length-1; i++){
        for (let j = i + 1; j < nums.length; j++){
            if (nums[i] == nums[j]) {
                if (j - i == k || j-i<= k) {
                    return true
                }
            }
        }
    }return false
}

console.log("Brute force logic :",ContainDuplicateNumber(nums,k));


function OptDuplicateNumber(nums, k) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]]!==undefined) {
            console.log(nums[map[i]])
            if (i - map[nums[i]] <= k) {
                return true
            }
        } else {
            map[nums[i]]
        }
    }return false

    let map = {}

    for (let i = 0; i < nums.length; i++) {

        if (map[nums[i]] !== undefined) {

            if (i - map[nums[i]] <= k) {
                return true
            }

        }

        map[nums[i]] = i
    }

    return false
}

console.log("Optimize logic :",OptDuplicateNumber(nums,k));
