let n = [0,0,0,0]

function MostFrequentEvenElement(n) {
    let map ={}
    let count = 0
    let ans = -1
    

    for (let i = 0; i < n.length; i++) {
        if (n[i] % 2 == 0) {
            if (map[n[i]]) {
            
                map[n[i]]++
            } else {
                map[n[i]] = 1
            }
            
        }
        
    }

    for (let key in map) {
        let num=Number(key)
        if (map[key] > count) {
            count = map[key]
            ans=key    
        }
        
    }
    return ans
    
}

console.log(MostFrequentEvenElement(n));
