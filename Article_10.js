let min = prompt("Input Number");
while (true) {
  let number = prompt("Input Number");
  if (number == "stop") {
    break;
  } else if (min > number) {
    min = Number(number);
  }
}
alert(min);
