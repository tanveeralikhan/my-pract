// Remove DUPLICATE with only TWO occourences.

export const removeDuplicates = () => {
  const nums = [1, 1, 1, 2, 3, 2, 2, 4, 4, 4, 4, 5, 5];
  let index = 0;
  for (const i of nums) {
    if (index < 2 || i !== nums[index - 2]) {
      nums[index++] = i;
    }
  }
  return index;
};
