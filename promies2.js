//using promise with multi function
console.log('Start')
const newUser = new Promise((resolve,reject)=>{
    setTimeout(() => {
        const userInfo = {
            name : 'Khalid',
            age : 17
        }
        resolve(userInfo)
    },1000);
})
const addNewUser = userInfo => {
    let userAge = userInfo.age;
    let adultAge ;
    if (userAge >= 18)
    {
        adultAge = `${userInfo.name} is an Adult`
        return Promise.resolve(adultAge)
    } else {
        adultAge = `${userInfo.name} is NOT an Adult`
        return Promise.reject(new Error(adultAge))
    }
    //return Promise.resolve(adultAge)
}
newUser
    .then(addNewUser)
    .then(res =>{
        console.log('** User Info recevied **');
        console.log(res);
    })
    .catch(err =>{
        console.log(err.message)
    })

console.log('End') 