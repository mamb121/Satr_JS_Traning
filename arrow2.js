function sum (a,b){
    return a + b
}
function sub (a,b){
    return a - b
}
function op (a,b,fn){
    return `Result is = [${fn(a,b)}]`
}

console.log(op(4,5,sum))
console.log(op(4,5,sub))
console.log(op(4,5,(a,b)=>a*b))