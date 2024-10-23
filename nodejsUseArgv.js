function sum (num1 ,num2){
    return num1 * 1 + num2 * 1
}
function sub (num1 ,num2){
    return num1 * 1 - num2 * 1
}

let op =process.argv[2];
let num1 =process.argv[3];
let num2 =process.argv[4];

if(op=='sum'){
    console.log(sum(num1,num2))
}else if (op=='sub'){
    console.log(sub(num1,num2))
}