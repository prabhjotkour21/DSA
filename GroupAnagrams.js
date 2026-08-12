let str = ["eat", "tea", "tan", "ate", "nat", "bat"]

function groupAnagrams(str) {
    let map = {}
    for (let i = 0; i < str.length; i++){
        let s = str[i].split("").sort().join('')
        if (map[s]) {
            map[s].push(str[i])
        } else {
            map[s]=[str[i]]
        }
    }
    return Object.values(map)
}


console.log(groupAnagrams(str));
