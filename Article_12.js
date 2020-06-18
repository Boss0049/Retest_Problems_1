let fristNumber = prompt("Input Number");
let min = Number(fristNumber);
let max = Number(fristNumber);
while (true) {
  let number = prompt("Input Number");
  if (number == "stop") {
    break;
  } else {
    if (min > Number(number)) {
      min = Number(number);
    } else if (max < Number(number)) {
      max = Number(number);
    }
  }
}

alert(`Min : ${min}, Max : ${max}`);
