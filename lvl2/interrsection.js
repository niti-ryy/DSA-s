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

const arrIntersection = (a, b) => {
    const map = new Map();
    a.forEach(item => map.set(item, true));
    return b.filter(item => map.has(item));
  };


  const arrIntersectiion = (a, b) => {
    const setA = new Set(a);
    const setB = new Set(b);
    return [...setA].filter(item => setB.has(item));
  };