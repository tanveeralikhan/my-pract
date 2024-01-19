/* export const isPrime = (num) => {
  //const num = 100;
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
};

(() => {
  for (var i = 0; i < 100; i++) {
    if (isPrime(i)) console.log(i);
  }
})(); */

function isPrime(num) {
  if (num < 2) return false;
  for (var i = 2; i < num; i++) {
    if (num % i == 0) return false;
  }
  return true;
}

for (var i = 0; i < 100; i++) {
  if (isPrime(i)) console.log(i);
}
