// same([1,2,3], [4,1,9]) true
//same([1,2,3], [1,9]) false
// same ([1,2,1],[4,4,1]) false
// Write a function called same , which accepts two arrays . The function should returns true if every value in the array has it's corresponding value
// squared in the second array. The frequency of values must be the same

// 1st solution
export const same1 = (array1: number[], array2: number[]) => {
  if (array1.length !== array2.length) {
    return false;
  }
  for (let i = 0; i < array1.length; i++) {
    let index = array2.indexOf(array1[i] ** 2);
    if (index === -1) {
      return false;
    }
    array2.splice(index, 1);
  }
  return true;
};

// better solution

export const same2 = (arr1: number[], arr2: number[]) => {
  let frequency1: Record<number, number> = {},
    frequency2: Record<number, number> = {};
  for (let value of arr1) {
    frequency1[value] = frequency1[value] ? frequency1[value] + 1 : 1;
  }
  for (let value of arr2) {
    frequency2[value] = frequency2[value] ? frequency2[value] + 1 : 1;
  }

  for (let key in frequency1) {
    const valueExist = frequency2[Number(key) ** 2]; // this Number(key can be written as key only)
    if (!valueExist) {
      return false;
    }
    if (valueExist !== frequency1[key]) {
      return false;
    }
  }
  return true;
};
