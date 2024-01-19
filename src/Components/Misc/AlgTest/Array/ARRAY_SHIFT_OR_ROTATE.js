//ARRAY SHIFTING  or ROTATING
export const rotateArray = () => {
  const nums = [-1, -100, 3, 99];
  const k = 2;
  const a = nums.slice(-k);
  const b = nums.slice(0, k);
  const newArr = [...a, ...b];
  return newArr;
};

// Perfect solution
export const rotate = (nums, k) => {
  var leftItem = nums.slice(0, nums.length - k);
  var rightItem = nums.slice(nums.length - k);

  for (var i = 0; i < rightItem.length; i++) {
    nums[i] = rightItem[i];
  }

  for (var i = 0; i < leftItem.length; i++) {
    nums[rightItem.length + i] = leftItem[i];
  }
  return nums;
};

export const otherSolution = (nums, k) => {
  let last;
  for (let i = 0; i < k; i++) {
    last = nums[nums.length - 1];
    nums.splice(-1, 1);
    nums.unshift(last);
  }
  return nums;
};
