let jewels = "z"
let stones = "ZZ"

function JewelsandStones(jewels, stones) {
    let j = jewels
    let s = stones
    let js = {}
    let count=0
    for (let i = 0; i < j.length; i++){
        if (js[j[i]]) {
            js[j[i]]++
        } else {
            js[j[i]]=true
        }
    }
    for (let i = 0; i < s.length; i++){
        if (js[s[i]]) {
            count++
            js[s[i]]++
        } 
    }
    return count
    
}


console.log(JewelsandStones(jewels,stones));
