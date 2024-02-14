function* generateFun(i) {
  yield i;
  yield i + 10;
}

const getGen = generateFun(10);
console.log(getGen.next().value); //10
console.log(getGen.next().value); //20
