let nums = [3, 2, 3]

function MajotiryElement(n) {
    let map = {}
    let m = n.length / 2
    console.log(m);
    
    for (let i = 0; i < n.length; i++){
        if (map[n[i]]) {
            map[n[i]]++
        } else {
            map[n[i]]=1
        }
    }
    for (let key in map) {
        if (map[key] > m) {
            return key
        }
    }
}

console.log(MajotiryElement(nums));
