// you can create object by use one const and add key:value inside it like  
const car ={
    name: 'camry',
    color: 'white',
    currentSpeed:0,
    move: function(speed){
        this.currentSpeed = speed;
    },
    stop: function(){
        this.currentSpeed = 0;
    },
}
console.log(car.name)
let printCarName = function(){
    console.log("Hello " + this.name)
}
printCarName();
printCarName.call(car);

let printCarNameColorSpeed = function(color,speed){
    console.log("Hello " + this.name + "color is " + this.color + " and speed" + speed + " Km per hour")
}
printCarNameColorSpeed.call(car,'red',5);
printCarNameColorSpeed.apply(car,['red',5]);

let printCarNameB = function(newName){
    console.log("Hello " + newName)
}
let newFunc = printCarNameB.bind(car);
newFunc("xa")