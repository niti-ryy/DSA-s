const palindrome = (str) => {
    let result;
    let reverse = str.split("").reverse().join("");

    switch (true) {
        case (str === ""):
            result = "empty"; // Handle the empty string case
            break;
        case (str === reverse):
            result = "yes"; // It's a palindrome
            break;
        case (str !== reverse):
            result = "wrong"; // It's not a palindrome
            break;
        default:
            result = "unknown"; // In case something unexpected happens
    }

    return result;
}

console.log(palindrome("aaaa")); // Output: yes
console.log(palindrome("abcd")); // Output: wrong
console.log(palindrome(""));     // Output: empty
