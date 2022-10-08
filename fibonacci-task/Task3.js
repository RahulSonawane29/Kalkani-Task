// User Input : 10

var a = 0;
var b = 1;
var limit = 10;

var sum = a + b;

while (sum < limit) {
  console.log(sum);
  a = b;
  b = sum;
  sum = a + b;
}
