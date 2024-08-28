const titleCase =(str)=>{
    let words=str.split(" ")
    let result=words.map((ele)=>{
        ele=ele.charAt(0).toUpperCase()+ele.slice(1)
        return ele
    })
    return result.join(" ")
}

console.log(titleCase("a case of wolf"))