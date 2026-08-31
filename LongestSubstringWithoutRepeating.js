let s = "abc"
function LongestSubstringWithoutRepeating(s) {
    let left = 0
    let bag=new Set()
    let max=0
    for (let right = 0; right < s.length; right++){
        
        while (bag.has(s[right])) {
            bag.delete(s[left])
            left++
        }
        bag.add(s[right])
        let curlength=right-left+1

         if (curlength > max) {
        max=curlength
         }
    }
   
     return max
    


    
//    let max=0
//     for (let i = 0; i < s.length; i++){
//         let bag=""
//         for (let j = i; j < s.length; j++){
//             if (bag.includes(s[j])) {
//                 break
//             } else {
//                 bag=bag+s[j]
//             }
           
            
//         }
//         if (bag.length > max) {
//             max=bag.length
//         }
//         // console.log(bag);
        
//     }
     return max
}

console.log(LongestSubstringWithoutRepeating(s));
