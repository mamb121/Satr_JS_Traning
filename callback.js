// using CALLBACK
console.log('Start')
function userInfo(name,callback){
    setTimeout(() => {
        console.log('** User Info recevied **');
        callback(name);
    },1000);
}
let userName = userInfo('Khalid',name => {
    console.log(`Your name is ${name}`);
})
console.log('End') 