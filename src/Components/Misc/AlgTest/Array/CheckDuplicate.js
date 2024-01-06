// if DUPLICATE exists
export const ifDuplicateExist = () => {
  const nums = [1, 1, 1, 2, 3, 2, 2, 4, 4, 4, 4, 5, 5];
  let obj = {};
  for (let value of nums) {
    obj[value] ? (obj[value] = obj[value] + 1) : (obj[value] = 1);
  }
  const isDuplicate = Object.values(obj).every((value) => value < 2);
  return !isDuplicate;
};
