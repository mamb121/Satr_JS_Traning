/*
let ca = Math.ceil(9.4)
let cb = Math.ceil(9.5)
let cc = Math.ceil(9.6)
console.log(ca)
console.log(cb) 
console.log(cc) 
let ra = Math.round(9.4)
let rb = Math.round(9.5)
let rc = Math.round(9.6)
console.log(ra)
console.log(rb)
console.log(rc)
let fa = Math.floor(9.4)
let fb = Math.floor(9.5)
let fc = Math.floor(9.6)
console.log(fa)
console.log(fb)
console.log(fc)
let abs = Math.abs(-2)
console.log(abs)
let max = Math.max(...[2,4,5,4,6])
console.log(max)
let min = Math.min(...[2,4,5,4,6])
console.log(min)
let str = '1.45'
console.log(parseFloat(str)+1)
*/

function square(Number){
    if (isNaN(Number)){
        return 'Invaled Input'
    }
    else {
        return Number * Number
    }
}

console.log(square('test'))
console.log(square(4))

const age = 14
console.log(age.toString(2))
console.log(age.toString(8))
console.log(age.toString(10))
console.log(age.toString(16))
console.log(0xe)
console.log(0o16)
console.log(0b1110)