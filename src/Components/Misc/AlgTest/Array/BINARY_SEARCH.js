/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function () {
  let nums = [-1, 0, 3, 5, 9, 12],
    target = 9;
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    const guess = nums[mid];

    if (guess === target) {
      return mid;
    }

    if (guess > target) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }
  return -1;
};
