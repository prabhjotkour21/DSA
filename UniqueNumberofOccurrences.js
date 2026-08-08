let arr = [1, 2, 2, 1, 3]

function uniqueOccurrences(arr) {
    let map = {}
    let prevmap={}
    for (let i = 0; i < arr.length; i++){
        if (map[arr[i]]) {
            map[arr[i]]++
        } else {
             map[arr[i]]=1
        }
    }
    let n=0
    for (let key in map) {
        console.log(key);
        console.log(map[key]);
        console.log();
        let i = map[key]
        if (prevmap[i]) {
            return false
        } else {
            prevmap[i]=1
        }       
    }
    return true
}
console.log(uniqueOccurrences (arr));
