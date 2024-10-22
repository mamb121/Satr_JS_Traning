const myString ='I use JavaScript';
console.log(`the text is ${myString}`)
const regex = /JavaScript/
console.log(`the regex is ${regex}`)
const containsRegex = regex.test(myString)
console.log(`Use Test function in Text : ${containsRegex}`)
let replaceRegex = myString.replace(regex,'Python');
console.log(`Use replace function in Text : ${replaceRegex}`)
let searchRegex = myString.search(regex);
console.log(`Use search function in Text : ${searchRegex}`)
let matchRegex = myString.match(/a/g);
console.log(`Use match function in Text : ${matchRegex}`)

