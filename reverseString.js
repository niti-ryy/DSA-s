// const reverseString =(str)=>{
//     let result = str.split("").reverse().join("")
//     return result;
// }


const reverseString =(str)=>{
    let result = ""
    for(let i=str.length-1;i>=0;i--){
        result+=str[i]
    }
    return result
}
console.log(reverseString("apple"))