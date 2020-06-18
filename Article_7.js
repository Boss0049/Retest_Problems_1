let sum = 1;
let total = 0;
for (let i = 3; i <= 89; i++) {
  sum = (i - 2) * (i - 1) * i;
  total += sum;
}
console.log(total);
