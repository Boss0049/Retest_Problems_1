let num1 = Infinity;
let num2 = Infinity;
let num3 = Infinity;
while (true) {
  let minnum = prompt("enter a number");
  if (minnum == "stop") {
    break;
  } else if (+minnum < num1 && +minnum < num2 && +minnum < num3) {
    num1 = num2;
    num2 = num3;
    num3 = minnum;
  } else if (+minnum > num3 && +minnum < num2) {
    num1 = num2;
    num2 = minnum;
  } else if (+minnum > num2 && +minnum < num1) {
    num1 = minnum;
  }
  console.log(`${num1}+${num2}+${num3}`);
}
console.log(`${num1}+${num2}+${num3}`);
