let s = "egg"
let t = "add"
let  map={}
for (let i = 0; i < s.length; i++){
    if (!map[s[i]]) {
        map[s[i]]=1
    }
}

console.log(map);
