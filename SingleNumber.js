let nums = [4,1,2,1,2]

function IsSingleNumber(nums) {
    let map = {}
    for (let i = 0; i < nums.length; i++){
        if (map[nums[i]]) {
            map[nums[i]]++
        } else {
            map[nums[i]]=1
        }
    }
    for (let key in map) {
        if (map[key] ==1) {
            return key
        }
    }return 0
}

console.log(IsSingleNumber(nums));


