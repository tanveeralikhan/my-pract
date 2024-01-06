// REMOVE ELEMENT

export const removeElement = () => {
  const nums = [1, 1, 1, 2, 3, 2, 2, 4, 4, 4, 4, 5, 5];
  const val = 2;
  let k = 0;
  for (const x of nums) {
    if (x !== val) {
      nums[k++] = x;
    }
  }
  return nums;
};
