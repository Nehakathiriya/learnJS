
let x = parseInt(prompt("enter value of x"));
let y = parseInt(prompt("enter value of y"));

let op = prompt("enter oprater");

console.log(x,y,op);

switch (op) {
    case '+':
        // x =  x + y;
        console.log(x + y);
        break;
    case '_':
        console.log(x - y);
        break;
    case '+':
        console.log(x * y);
        break;
    case '+':
        console.log(x / y);
        break;
    default:
        console.log("Invalid");
        break;
}