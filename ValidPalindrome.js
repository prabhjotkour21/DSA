// let s = "A man, a plan, a canal: Panama"
// let s = "race a car"
let s =" "
function isPalindrome(s) {
    // let str = s.toLowerCase().replace(/[^a-z0-9]/g, "");
    let str=""
    let upper = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
    let lower = "abcdefghijklmnopqrstuvwxyz"
    for (let i = 0; i < s.length; i++){
        let code = s.charCodeAt(i)
        if (code >= 65 && code <= 90) {
            str+=String.fromCharCode(code+32)
        }
        else {
            str+=s[i]
        }
    }
    console.log(str)
    let char = `/[^a-z0-9]/g, ""`
    let x =""
    for (let j = 0; j < str.length; j++) {

        if (str[j].includes(char)) {
            continue
        } else {
           x +=    str[j]
        }
    }
    console.log(x);
    
    // console.log(str);
    // for (let i in str) {
    //     if()
    // }
    
}
isPalindrome(s)

function isPalindromeLogic(s) {

    let str = s.toLowerCase().replace(/[^a-z0-9]/g, "")

    let l = 0
    let r = str.length - 1
    while (l < r) {
        if (str[l] == str[r]) {
            l++
            r--
        } else {
            return false
        }
    }
    return true
    // for (let i = 0; i < str.length; i++){
    //     for (let j = str.length-1; j > 0; j--){
    //         if (str[i] != str[j]) {
    //             return false
    //         }
    //     }
    // }
    // return true
    
}

console.log(isPalindromeLogic(s));



