function reverseArray(array) {
    var newarr = [];
    for(let i=array.length; i > 0; i--) {
        newarr = "\"" + array.shift() + "\" " + newarr;
    }
    return newarr;
}

function reverseArrayInPlace(array) {
    for(let i=0; i < Math.floor(array.length/2); i++) {
        let x=array[i];
        array[i] = array[array.length - 1 - i];
        array[array.length - 1 - i] = x;
        
    }
    return array;
}

console.log(reverseArray(["A","B","C"]));

var arrayValue = [1, 3, 6, 7, 8, 10,11];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);

var arrayValue2 = [1,2,3];
reverseArrayInPlace(arrayValue2);
console.log(arrayValue2);

var arrayValue3 = [1,2,3,4,5];
reverseArrayInPlace(arrayValue3);
console.log(arrayValue3);