//Write a function isEven() which takes a single numeric argument and returns true if the number is even, and false otherwise
function isEven(num) {
    if(num % 2 === 0) {
    return "True"
}
return "False"
}

//Write a factorial function()
function factorial(num) {
    //Define a result variable
    var result = 1;
    //Calculate factorial and store value in result
    for (var i = 1; i <= num; i++) {
        result = result * i;
    }
    return result;
}


//Write function kebabToSnake() which converts strings containing kebab type to snake 
function kebabToSnake(str) {
    var newStr = str.replace(/-/g , "_");
    return newStr;
}