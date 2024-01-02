//factorial

export const factorialNum = (num) => {
  if (num === 0 || num === 1) {
    return 1;
  } else {
    return num * factorialNum(num - 1);
  }
};

console.log(factorialNum(3));

const myArr = [
  { key: 1, value: "Tanveer" },
  { key: 2, value: "Aaiza" },
  { key: 3, value: "Alishba" },
];

Array.prototype.customMap = function (cb) {
  let newArr = [];
  for (let i = 0; i < this.length; i++) {
    newArr.push(cb(this[i], i));
  }
  return newArr;
};

export const getMapArray = () => {
  return myArr.customMap((value) => {
    return { prop: value.key, name: value.value };
  });
};

console.log(getMapArray);
