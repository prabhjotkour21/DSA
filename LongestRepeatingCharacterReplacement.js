let s = "AABABBA"
let k = 1
function longestRepeatingCharReplaceMent(s, k) {
    let maxfeq = 0
    let left = 0
    let maxlen = 0
    let map = {}
    for (let right = 0; right < s.length; right++){
        let char = s[right]
        if (map[char]) {
            map[char]++
        } else {
            map[char]=1
        }
        // maximum freq
         maxfeq=Math.max(maxfeq,map[char])

        
        // window invaild 
        // console.log(maxfeq);
        
        while ((right - left + 1) - maxfeq > k) {
            let leftChar = s[left]
            map[leftChar]--
            left++
        }

        // maximum length
        maxlen=Math.max(maxlen,right-left+1)
    }
    
    return maxlen
}

console.log(longestRepeatingCharReplaceMent(s,k));
