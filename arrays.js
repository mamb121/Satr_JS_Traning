const colors = ['red','green','blue']
const secondaryColors = ['orange','yellow','blue']
colors.forEach(function(val){
    console.log(val)
}) 

const ages = [12,23,12]
const haseAdult = ages.some(function(val){
    return val >= 18
}) 
console.log(haseAdult)
const allIsAdult = ages.every(function(val){
    return val >= 18
}) 
console.log(allIsAdult)
console.log(ages.includes(23))
console.log(ages.includes(23,2))

function getAgeAdult(element){
    return element >=18
}

function getEven(element){
    return element % 2 === 0
}


console.log('--------------findIndex--------------');
let adult = ages.findIndex(getAgeAdult);
console.log(adult);
console.log('--------------find--------------');
adult = ages.find(getAgeAdult);
console.log(adult);
console.log('--------------filter--------------');
adult = ages.filter(getEven);
console.log(adult);
console.log('--------------concat--------------')
let allColors = colors.concat(secondaryColors,'black','white');
console.log(allColors);
console.log('--------------slice--------------');
console.log(allColors.slice(1));
console.log(allColors.slice(1,3));
console.log(allColors.slice(-4,-3));
console.log('--------------splice--------------');
allColors.splice(4);
console.log(allColors);
allColors.splice(2,1);
console.log(allColors);
allColors.splice(2,1,'gray');
console.log(allColors);
allColors.splice(2,0,'silver');
console.log(allColors);
console.log('--------------join--------------');
console.log(allColors.join());
console.log(allColors.join('-'));
console.log('--------------sort--------------');
console.log(allColors.sort());
console.log(ages.sort());
console.log('--------------reverse--------------');
console.log(allColors.reverse());
console.log('--------------map--------------');
let sqaredNumbers = ages.map((val) => val * val)
let events = ages.map(getEven)
console.log(sqaredNumbers);
console.log(events);
console.log('--------------splet--------------');
let cars = 'toyota nissan mazda'
console.log(cars.split(' '))
console.log(cars.split(' ',2))
console.log('--------------reduce--------------');
const numbers = [2,4,1,3,5]
const list = numbers.reduce(function(accumulator,currentValue,index,array){
    console.log(`index:${index}`);
    console.log(`current value:${currentValue}`);
    console.log(`accumulator:${accumulator}`);
});
const total = numbers.reduce(function(accumulator,currentValue,index,array){
    return accumulator + currentValue
});
console.log(`total:${total}`);

const total100 = numbers.reduce(function(accumulator,currentValue,index,array){
    return accumulator + currentValue
},100);
console.log(`total100:${total100}`);
const numbers1 = [4, 2, 9, 8];
const hasOdd = numbers1.some(number => number % 2 !== 0)
console.log(hasOdd)

const fruits = ['Apple', 'Lemon', 'Mango', 'Apple', 'Orange'];
const index = fruits.lastIndexOf('Apple', -1)
console.log(index)

const numbers2 = [13, 20, 18, 9];
const el = numbers2.find(number => number % 2 === 0)
console.log(el)
