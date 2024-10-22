class Car {
    static numberOfCars = 0;
    #currentSpeed; // private
    #privateField;
    constructor (name,color,currentSpeed){
        this.name = name;
        this.color = color;
        this.#currentSpeed = currentSpeed;
        Car.incrementNumberOfCars();
    }

    move(speed){
        this.#currentSpeed = speed;
        return `The ${this.name} is  moving at speed of ${this.#currentSpeed} km per hour`
    }
    stop(){
        this.#currentSpeed = 0;
        return `The ${this.name} stopped`
    }
    static incrementNumberOfCars(){
        Car.numberOfCars ++
    }
}
const carA = new Car('camry','white',0);
const carB= new Car('corella','black',0);
console.log(carA)
console.log(carB)
console.log(carA.move(50))
console.log(carB.move(70))
console.log(carA.stop())
console.log(carB.stop())
console.log(Car.numberOfCars);

console.log(Car);
