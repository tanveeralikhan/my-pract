// remove DUPLICATE from sorted array

export const removeDuplicate = () => {
  const nums = [1, 1, 1, 2, 3, 2, 2, 4, 4, 4, 4, 5, 5];
  nums.sort();
  let index = 0;
  for (const a of nums) {
    if (index === 0 || a !== nums[index - 1]) {
      nums[index++] = a;
    }
  }
  return index;
};
