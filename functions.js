let Numbers =[1,2,3,4,5,6]
function PrintNumbers(){
    for(number in Numbers){
        console.log(number)
    };
};

//PrintNumbers();

function PrintNumberTo(to){
    for(let i=1;i<= to;i++){
        console.log(i);
    };
    console.log('-------');
};
/*
PrintNumberTo(1);
PrintNumberTo(2);
PrintNumberTo(3);
PrintNumberTo(4);
*/
function add(FirstNumber,SecondNumber){
    console.log(FirstNumber + SecondNumber)
}
/*
add(1,3);
add(5,4);
add(6,7);
add(9,2);
*/
function addReturn(FirstNumber,SecondNumber){
    return(FirstNumber + SecondNumber)
}
let result = addReturn(100,30);
console.log(result);
console.log('-------');
function PrintNuTo(to){
    if(typeof(to) != 'number')
    {
        return;
    }
    for(let i=1;i<= to;i++){
        console.log(i);
    };
    console.log('-------');

};
PrintNuTo('test')
//PrintNuTo(4)
const square = function(number) {
    console.log(number * number)
  }
  square(2)
  function printYourName(name) {
    return "Your name is " + name
}
let functionOutput = printYourName("Reem")
console.log(functionOutput)
