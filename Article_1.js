let inputValueA = +prompt("Input Number A");
let inputValueB = +prompt("Input Number B");

if (inputValueA % inputValueB == 0) {
  inputValueA /= inputValueB;
  inputValueB /= inputValueB;
} else {
  for (let i = 1; i < inputValueB; i++) {
    if (inputValueA % i == 0 && inputValueB % i == 0) {
      inputValueA /= i;
      inputValueB /= i;
    }
  }
}
alert(`${inputValueA}/${inputValueB}`);

// while (true) {
//   if (totalA % totalB != 0) {
//     break;
//   } else if (totalB == 1) {
//     break;
//   }
//   totalA = totalA / totalB;
//   totalB = totalB / totalB;
// }
// alert(`${totalA}/${totalB}`);
