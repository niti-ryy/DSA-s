
//lean to use Switch case rather than if else

function calculator(a,b,operator) {
    let result

    switch(operator){
        case "+":
            result = a + b;
            break;
        case "-":
            result = a - b;
            break;
        case "*":
            result = a * b;
            break;
        case "/":
            result = a / b;
            break
        default:
            throw new Error("Invalid operator. Please use +, -, *, or /");

    }
    return result;
}