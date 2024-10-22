let ages = [25,30,32];
let [firstAge] = ages // let [firstAge,SecondAge] = ages
console.log(firstAge)// console.log(firstAge,SecondAge)

// defaluteValue
let colors = ['red','green']
let [firstColor,secondColor,thirdColor = 'blue']=colors;
console.log(firstColor,secondColor,thirdColor)

let [,secondColorA,thirdColorA = 'blue']=colors;
console.log(secondColorA,thirdColorA)
let [,,firstColorA = 'blue']=colors;
console.log(firstColorA)

let numbers = [1,2,[3,4]]
let [f,s,[fval,sval]] = numbers;
console.log(f,s,fval,sval)

//swap
let aFirst = 5 ,aSecond=7;
[aFirst  ,aSecond] = [ aSecond, aFirst]
console.log(aFirst,aSecond)

let student = {
    name :'Ali',
    age : 25
}

let {name:yourName , age :yourAge} = student;
console.log(yourName,yourAge)
//name = 'Saleh',age =22
//(name, age ) = student;
//console.log(name,age)


//عمل Destructuring على Nested Objects
let person = {
    name:{
        firstName :'Ali',
        lastName :'Nasser'
    },
    age : 35
}

let {name:{lastName:yourLastName}} = person
console.log(yourLastName)

//يمكن نستخدم المسافات والرموز والعلامات في اسماء الخصائص في الجافا سيكربت بعمل اسم الخاصية بين علامة تنصيص

let car ={
    name : 'corola',
    'car color':'blue'
}
//ولتمثيلها نستخدمها كأنها key value 
console.log(car.name,car['car color'])

// الثلاث نقاط تعمل عملية تجميع عند فك الكائن
let myNumbers = [1,2,3,4,5];
let [first ,second, ...others] = myNumbers
console.log(first,second,others)
console.log(first,second,others[0])

// Spread Operator 
firstList = [1,2,3]
secondList = [4,5]
thirdList = [...firstList,...secondList]
console.log(thirdList)

//rest Declaration
//الفرق بين Spread Operator و Rest Declaration
console.log('//الفرق بين Spread Operator و Rest Declaration')
function sum(a,b,...others){ // Rest Declaration تجميع المدخلات الزائدة
    console.log(others) // 
    console.log(...others) // Spread Operator تفكيك المتغير أذر
    return a+b
}
console.log(sum(1,2,6,80,75))

///عمل Rest Declaration لعناصر Object
let man = {
    name : 'ali',
    age : 25,
    gender : true
}

let {name,nickname= 'unknown'} = man
console.log(name,nickname)

let acolors = ['White', 'Blue', 'Silver']
let [acolor] = acolors
console.log(acolor) 
