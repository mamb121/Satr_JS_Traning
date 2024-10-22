// using CALLBACK
/* console.log('Start')
function userInfo(name,callback){
    setTimeout(() => {
        console.log('** User Info recevied **');
        callback(name);
    },1000);
}
let userName = userInfo('Khalid',name => {
    console.log(`Your name is ${name}`);
})
console.log('End') */

//using promise
console.log('Start')
const newUser = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const userInfo = {
            name : 'Khalid',
            age : 19
        }
        resolve(userInfo)
    },1000);
})
newUser.then(res =>{
        console.log('** User Info recevied **');
        console.log(res);
    }
)

console.log('End') 