function arrayToList(array) {
    var temp = null;
    for(var i = array.length - 1; i >= 0; i--) {
        temp = {value: array[i], rest: temp}; 
    }
    return temp;
}
function listToArray(list) {
    var array = [];
    for(let node = list; node; node = node.rest) {
        array.push(node.value);
    }
    return array;
}

function prepend(element, list) {
    list = { 
        value : element,
        rest : list
    };
    return list;
}
function nth(list, index) {
    if(!list) return undefined;
    else if(index == 0) return list.value;
    else return nth(list.rest, index-1);
}

/* TESTS */ 

console.log(arrayToList([10,20]));
console.log(listToArray(arrayToList([10,20,30])));
console.log(prepend(10, prepend(20,null)));
console.log(nth(arrayToList([10,20,30]),1));
