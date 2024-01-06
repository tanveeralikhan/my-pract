//MAJORITY ELEMENT

export const majorityElement = () => {
  const nums = [3, 3, 4];
  const obj = {};
  for (let val of nums) {
    obj[val] ? (obj[val] = obj[val] + 1) : (obj[val] = 1);
  }
  const max = Math.max(...Object.values(obj));
  const highestValue = Object.keys(obj).filter((key) => obj[key] === max);
  console.log(highestValue);
};
