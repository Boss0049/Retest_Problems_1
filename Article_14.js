let sum = 0;
let count = 0;
while (true) {
  let number = prompt("Input Number");
  if (number == "stop") {
    break;
  } else {
    sum += Number(number);
    count++;
  }
}
alert(sum / count);
