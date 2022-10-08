// User Input : 5

var a = 0;
var b = 1;
var c = 5;

var sum = a + b;

while (sum <= c) {
  console.log(sum);
  a = b;
  b = sum;
  sum = a + b;
}
