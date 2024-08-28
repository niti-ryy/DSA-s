// const countOccurences=(str,char)=>{
//     let result=0
    
//     for(let i=0;i<str.length;i++){
//         if(str[i]===char){
//             result++
//         }
//     }
//     return result
// }

const countOccurences2=(str,char)=>{
   return (str.split(char).length-1)
}



console.log(countOccurences2("Hello World","l")) // Output: 3

