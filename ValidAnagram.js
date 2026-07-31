// let s="anagram"
// let t = "nagarao"
// let s = "aa"
// let t = "ab"

let s = "listen"
let t = "silent"


function ValidAnagram(s, t) {
    let map = {}
    if (s.length != t.length) {
        return false
    }
    for (let i in s) {
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]]=1
        }
    }
    for (let j in t) {
        if (map[t[j]]) {
            map[t[j]]--
        } else {
            map[t[j]]=1
        }
    }
    for (let key in map) {
        if (map[key]!= 0) {
            return false
        }
    }
    return true
}
console.log(ValidAnagram(s,t));

// hum  2 loop run krege i loop s string k andr or j loop t string k andr or ek count variable bhi bnayae or 
// fr hum check krege ki if s[i] == t[j] to coount++ krdo or fr last m check krege ki agr count ki value lenght of any string 
// se jyada h to true retunr kr dege esle false or ek or conditiona check krege ki agr dono string ki legth equal h ya nhi h agr nhi h to false retunr kr dege 
