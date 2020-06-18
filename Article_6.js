let sum = 1;
let total = 0;
for (let i = 2; i <= 88; i++) {
  sum = (i - 1) * i;
  total += sum;
}
console.log(total);
