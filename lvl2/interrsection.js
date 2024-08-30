const arrintersection=(a,b)=>{
    let result =[]
    let maxArr
    let minArr
    if(a.length>b.length){
        maxArr=a,minArr=b
    }else{
        maxArr=b,minArr=a
    }

    for(let i=0;i<maxArr.length;i++){
        if(minArr.includes(maxArr[i])){
            result.push(maxArr[i])
        }
    }
    return result
}

// const arrIntersection = (a, b) => {
//     const map = new Map();
//     a.forEach(item => map.set(item, true));
//     return b.filter(item => map.has(item));
//   };


//   const arrIntersectiion = (a, b) => {
//     const setA = new Set(a);
//     const setB = new Set(b);
//     return [...setA].filter(item => setB.has(item));
//   };

// const arrIntersection=(a, b) => {
//     let aa =new Set(a)
//     let bb =new Set(b)
//     console.log(aa.intersection(bb))
//     // let result=[...aa.intersection(bb)]
//     return result
// }

// console.log(arrIntersection([1, 2, 3, 4, 5], [4, 5, 6, 7, 8])); // [4, 5]

const odds = new Set([1, 3, 5, 7, 9]);
const squares = new Set([1, 4, 9]);
console.log(odds.intersection(squares)); // Set(2) { 1, 9 }
