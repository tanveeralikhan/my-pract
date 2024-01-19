//factorial

/* export const factorialNum = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialNum(num - 1);
  }
};

console.log(factorialNum(3)); */

const myArr = [
  { key: 1, value: "Tanveer" },
  { key: 2, value: "Aaiza" },
  { key: 3, value: "Alishba" },
  { key: 3, value: "Nilofar" },
];

Array.prototype.myMap = function (callBack) {
  let tempArr = [];
  for (let index = 0; index < this.length; index++) {
    tempArr.push(callBack(this[index], index, this));
  }
  return tempArr;
};

Array.prototype.customFilter = function (callBack) {
  let tempArr = [];
  for (let index = 0; index < this.length; index++) {
    if (callBack(this[index], index, this)) {
      tempArr.push(callBack(this[index]));
    }
  }
  return tempArr;
};
// acc, curr, index, arr --- initial val
Array.prototype.customReduce = function (callBack, initial) {
  let acc = initial;
  for (let index = 0; index < this.length; index++) {
    acc = acc ? callBack(acc, this[index], index, this) : this[index];
  }
  return acc;
};
let numArr = [1, 2, 3, 4, 5];

const getArr = numArr.customReduce((accu, curr, index, arr) => accu + curr, 0);
console.log(getArr);

Array.prototype.customMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i));
  }
  return newArr;
};

const getMapArray = () => {
  return myArr.customMap((value) => {
    return { prop: value.key, name: value.value };
  });
};

//console.log(getMapArray);
