let s="anagram"
let t = "nagarao"

function VaildAG(s, t) {
    let map = {}
    for (let i in s) {
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]]=1
        }
    }
    console.log(map)
}

console.log(VaildAG(s,t))

function ValidAnagram(s, t) {
    let count = 0
    for (let i in s) {
        

        if (s.length != t.length) {
            return false
        }
        for (let j in t) {
            if (s[i] == t[j]) {
                count++
            }
        }       
    }
    console.log(count)
     if (count > s.length) {
            return true
     } else {
         return false
        }

}
console.log(ValidAnagram(s,t));

// hum  2 loop run krege i loop s string k andr or j loop t string k andr or ek count variable bhi bnayae or 
// fr hum check krege ki if s[i] == t[j] to coount++ krdo or fr last m check krege ki agr count ki value lenght of any string 
// se jyada h to true retunr kr dege esle false or ek or conditiona check krege ki agr dono string ki legth equal h ya nhi h agr nhi h to false retunr kr dege 
