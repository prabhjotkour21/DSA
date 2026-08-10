let s ="tree"

function frequencySort(s) {
    let map = {}
    for (let i = 0; i < s.length; i++){
        if (map[s[i]]) {
            map[s[i]]++
        } else {
            map[s[i]]=1
        }
    }
    let arr = Object.entries(map)
   
    
    let str=""
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length-1; j++) { 
            if (arr[j][1] < arr[j+1][1]) {
                let temp = arr[j]
                arr[j] = arr[j+1]
                arr[j + 1] = temp
            
            }
        }
    }
    for (let i = 0; i < arr.length; i++){
        
        
        for (let j = 0; j < arr[i][1]; j++){
           
            
            str +=arr[i][0]
        }
       
    }
    
    


    
    return str
}

console.log(frequencySort(s));
