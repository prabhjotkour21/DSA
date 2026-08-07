let s = "paper"
let t = "title"

function Check(s, t) {
    

    let mapst = {}
    let mapts = {}
    for (let i = 0; i < s.length; i++) {
        if (!mapst[s[i]]) {
        
            mapst[s[i]] = t[i]
           
        }
    }
    for (let i = 0; i < t.length; i++) {
        if (!mapts[t[i]]) {
            
        
            mapts[t[i]] = s[i]
           
        }
    }
    for (let i = 0; i < s.length; i++) {
        if (mapst[s[i]]) {
            if (mapst[s[i]] !== t[i]) {
                return false
            
            } else if (mapts[t[i]] !== s[i]) {
                return false
            }
        } else {
            mapst[s[i]] = t[i]
        }
    }return true
}

console.log(Check(s,t));



// {
//     e: a,
//     g: d,
//     g: d,    
// }