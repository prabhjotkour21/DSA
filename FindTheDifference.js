let n = "abcd"
let m = "abcde"

function IsDifference(n, m) {
    let mapN = {}
    let mapM = {}
    let arr = ""
    for (let i = 0; i < n.length; i++) {
        if (mapN[n[i]]) {
            mapN[n[i]]++
        } else {
            mapN[n[i]] = 1
        }
    }
    for (let i = 0; i < m.length; i++) {
    
        if (mapM[m[i]]) {
            mapM[m[i]]++
        } else {
            mapM[m[i]] = 1
        }
    }
    for (let i = 0; i < m.length; i++) {
        if (!mapN[m[i]] || mapM[m[i]] > mapN[m[i]]) {
           
                
            return  m[i]
                
            
        }
    }
    return arr
}
console.log(IsDifference(n,m));
