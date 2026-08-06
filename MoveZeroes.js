let arr = [0, 1, 0, 3, 12]

function IsMoveZeroes(arr) {
    let n=0
    for (let i = 0; i < arr.length; i++){
        if (arr[i] == 0) {
           continue
        } else {
            console.log(arr[n])
            arr[n] = arr[i]
            n++
       }
    }
    for (let j = n; j < arr.length; j++){
        arr[j]=0
    }
    
   return arr
    
}
console.log(IsMoveZeroes(arr));
