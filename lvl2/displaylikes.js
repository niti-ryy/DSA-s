const displayLikes=(arr)=>{

    // switch(arguments.length){
    //     case 0:
    //         return 'no one likes this';
    //     case 1:
    //         return `${name1} likes this`;
    //     case 2:
    //         return `${name1} and ${name2} like this`;
    //     case 3:
    //         return `${name1}, ${name2} and ${name3} like this`;
    //     default:
    //         return `${name1}, ${name2} and ${arguments.length-2} others like this`;
    // }

    switch(arr.length){
        case 0:
            return "no one likes this";
        case 1:
            return `${arr[0]} likes this`;
        case 2:
            return `${arr[0]} and ${arr[1]} like this`;
        case 3:
            return `${arr[0]}, ${arr[1]} and ${arr[2]} like this`;
        default:
            return `${arr[0]}, ${arr[1]} and ${arr.length-2} others like this`;
    }
    
}

console.log(displayLikes(["a","b","c"])); // Jacob and Alex like this