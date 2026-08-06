let nums1 = [4,9,5]
let nums2 =  [9,4,9,8,4]
 
function IntersectionOfTwoArrays(nums1, nums2) {
    let map = {}
    for (let i = 0; i < nums1.length; i++){
        if (map[nums1[i]]) {
            continue
        } else {
            map[nums1[i]]=1
        }
    }
    for (let j = 0; j < nums2.length; j++){
        if (map[nums2[j]] < 2) {
            if (map[nums2[j]]) {
            map[nums2[j]]++
        }
        }
        
    }
    let bag=[]
    for (let key in map) {
        if (map[key] == 2) {
            bag.push(Number(+key))
            console.log(key);
            
            // return map[key]
        }
    }
    return bag
}


console.log(IntersectionOfTwoArrays(nums1,nums2));
