for(let i=1;i<=5;i++){
    console.log(i);
}
console.log('--------')
for(let i=5;i>=1;i--){
    console.log(i);
}
console.log('--------')
let colors = ['red','yellow','blue','green'];
for(let i=0;i < colors.length;i++){
    console.log(colors[i]);
}
console.log('--------')
for(let color of colors){
    console.log(color);
}
console.log('--------')
let name ='Mohammed'
for(let char of name){
    console.log(char);
}
console.log('--------')
let i = 0;
while(i < colors.length){
    console.log(colors[i])
     i++
}
console.log('--------')
i = 0;
do{
    console.log(colors[i])
     i++
}while(i < colors.length)
console.log('--------')
let Numbers = [1,2,3,4,5,0,6,7];
for(let i=0;i < Numbers.length;i++){
    if(Numbers[i]==0){
        break
    }
    console.log(Numbers[i]);
}
console.log('--------')
for(let i=0;i < Numbers.length;i++){
    if(Numbers[i]==0){
        continue
    }
    console.log(Numbers[i]);
}