let age = 33;
if (age > 90){
    console.log('Old man');
}
else {
    console.log('young man');
}
let colors = ['red','blue','green']
let colorNumber =5;

switch(colorNumber){
    case 1:
        console.log(colors[0]);
        break
    case 2:
        console.log(colors[1]);
        break
    case 3:
    case 4:
        console.log(colors[2]);
        break
    default:
        console.log('no color')
}