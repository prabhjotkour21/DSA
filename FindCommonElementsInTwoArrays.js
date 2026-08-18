let n = [2,3,2]
let m = [1,2]

function IsCommonElement(n, m) {
    let mapN = {}
    let mapM = {}
    let a1 = 0
    let a2=0
    for (let i = 0; i < n.length; i++) {
        if (mapN[n[i]]) {
            mapN[n[i]]++
        } else {
            mapN[n[i]] = 1
        }
    }
    for (let i = 0; i < m.length; i++) {
    
        if (mapM[m[i]]) {
            mapM[m[i]]++
        } else {
            mapM[m[i]]=1
        }
    }
    for (let i = 0; i < m.length; i++) {
        if (mapN[m[i]]) {
            a1++
        }
    }
    
    for (let i = 0; i < n.length; i++){
        if (mapM[n[i]]) {
            a2++
        }
    }
   
    
     
    return [a2 , a1]

}

console.log(IsCommonElement(n ,m ));
