let num = +prompt("Input");
let x = 0,
  y = 1;
for (let i = 2; i < num; i += 2) {
  x = x + y;
  y = x + y;
}
if (num % 2 != 0) {
  alert(x);
} else {
  alert(y);
}
