export const uniqueueOccourences = () => {
  let obj = {};
  for (let val of arr) {
    obj[val] ? (obj[val] = obj[val] + 1) : (obj[val] = 1);
  }
  let occurrencesArr = [...Object.values(obj)];
  let uniqueueArr = [...new Set(occurrencesArr)];
  return occurrencesArr.length == uniqueueArr.length;
};
