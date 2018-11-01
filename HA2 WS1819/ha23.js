
// first exercise
var a = "#";
var b = a;
while(a.length <= 7) {
  console.log(a);
  a = b + a;
}

// second exercise
for(var i = 1; i <= 100; i++) {
  if((i % 3 == 0) && (i % 5 == 0))
    console.log("FizzBuzz");
  else if(i % 3 == 0)
    console.log("Fizz");
  else if(i % 5 == 0)
    console.log("Buzz");
  else console.log(i);
}

// third exercise
var size = prompt("Please enter size", "");
var white = " ";
var black = "#";
var board = "";
for(var i = 0; i < size; i++) {
  for(var j = 0; j < size; j++) {
    if((i+j) % 2 == 0)
      board = board + white;
    else 
      board = board + black;
  }
  board = board + "\n";
}
console.log(board);
