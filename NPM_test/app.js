const bitwise = require('bitwise');
const byte = bitwise.byte.read(42);
console.log(byte);

const bits = bitwise.bits.and([0,1,0,1],[1,0,1,0]);
console.log(bits);

const fs = require('fs');
//let xs= fs.readFileSync('./testReadFile.txt','utf-8');
//console.log(xs);
let xs= fs.readFile('./testReadFile.txt','utf-8',(err,data)=>
{
    if(err){
        console.log('error');
    }else{
        console.log(data);
    }

});
