class Animal {
    constructor(name,color){
        this.name = name
        this.color = color
        this.speed = 0
    }
    run(speed){
        this.speed = speed
        return `${this.name} runs with speed ${this.speed}`
    }
    makeSound(){
        return 'sound ...'
    }
}

class Cat extends Animal {
    makeSound(){
        return 'mew ...'
    }
}

class Fox extends Animal {
    makeSound(){
        return 'bark ...'
    }
}

let catA = new Cat('caty','red')
console.log(catA)
console.log(catA.makeSound())