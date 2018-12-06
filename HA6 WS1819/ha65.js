let array = [1, 2, 3, 4, 5];
let reducer = (accumulator, currentValue) => accumulator * currentValue;
let reducedArray = array.reduce(reducer);
let reducedArray2 = array.reduce((accumulator, currentValue) => accumulator + currentValue);
console.log(reducedArray);
console.log(array.reduce(reducer, 10));
console.log(reducedArray2);

let fruits = ['Apple', 'Banana'];
fruits = fruits.map(x => x.toUpperCase());
console.log(fruits);

fruits.forEach(x => console.log("I like " + x.toLowerCase() + "s"));

console.log(fruits.filter(x => x.charAt(x.length - 1).toLowerCase() ==='a')); //mit "e" wird nur APPLE gezeigt

console.log(fruits.every(x => x == x.toUpperCase()));

console.log(fruits.some(x => x == x.toLowerCase()));

console.log(array.find(x => x > 3)); //erste zahl, die kriterium erfuellt

console.log(fruits.sort((a, b) => a < b ? 1 : -1));