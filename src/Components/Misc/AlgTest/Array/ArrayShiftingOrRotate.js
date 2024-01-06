//ARRAY SHIFTING  or ROTATING
export const rotateArray = () => {
  const nums = [-1, -100, 3, 99];
  const k = 2;
  const a = nums.slice(-k);
  const b = nums.slice(0, k);
  const newArr = [...a, ...b];
  return newArr;
};
