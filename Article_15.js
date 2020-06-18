let inputValue = prompt("input value");
let sum = "";
for (let i = 1; i <= inputValue.length; i++) {
  lastWord = inputValue.slice(inputValue.length - i, inputValue.length - i + 1);
  if (test != "-") {
    sum += lastWord;
  } else {
    sum *= -1;
  }
}
alert(Number(sum));
