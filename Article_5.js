let sum = 0;
for (let i = 1; i <= 18954; i++) {
  if (i % 2 == 0) {
    sum -= i;
  } else {
    sum += i;
  }
}
alert(sum);
