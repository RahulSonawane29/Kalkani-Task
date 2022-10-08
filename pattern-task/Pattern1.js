// Please enter your lucky number : 5

let n = 5;
let string = "";
// Pyramid
for (let i = 1; i <= n; i++) {
  for (let k = 0; k < i; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
// Reverse Pyramid
for (let i = 1; i <= n - 1; i++) {
  for (let k = 0; k < n - i; k++) {
    string += String.fromCharCode(k + 65);
  }
  string += "\n";
}
console.log(string);
