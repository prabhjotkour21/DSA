
let r = "a"
let m = "aab"

function RansomNote(r ,m) {
    let map = {}
    for (let i in r) {
        if (map[r[i]]) {
            map[r[i]]++
        } else {
            map[r[i]]=1
        }
    }
    for (let j in m) {
        if (map[m[j]]) {
            map[m[j]]--
        }
    }
     console.log(map)
    for (let key in map) {
        if (map[key] > 0) {
            return false
        }
    }
   
    return true
    
}


console.log(RansomNote(r,m));
