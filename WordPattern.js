let p = "aaa"
let s = "aa aa aa aa"


function isWorldPattern(p, s) {
   
    let mapps = {}
    let mapsp = {}
    let arr = s.split(' ')
    if (p.length !== arr.length) {
        return false
    }
    for (let i = 0; i < p.length; i++) {
        if (!p[i] in mapps) {
           mapps[p[i]]=arr[i]
       }
    }

    for (let i = 0; i < arr.length; i++){
        if (!arr[i] in mapsp) {
            mapsp[arr[i]]=p[i]
        }
    }

    for (let i = 0; i < p.length; i++){
        if (mapps[p[i]]) {
            if (mapps[p[i]] !== arr[i]) {
                return false
            } else if (mapsp[arr[i]] !== p[i]) {
                return false
            }
        } else {
            mapps[p[i]]= arr[i]
        }
    }
    return true
    
    
}

console.log(isWorldPattern(p,s))