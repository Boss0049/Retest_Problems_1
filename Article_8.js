let sum = 1;
let total = 0;
for (let i = 5; i <= 159; i += 2) {
  sum = (i - 4) * (i - 2) * i;
  total += sum;
  let a = i - 4;
  let b = i - 2;
  console.log(`${a} * ${b} * ${i}`);
}
console.log(total);
