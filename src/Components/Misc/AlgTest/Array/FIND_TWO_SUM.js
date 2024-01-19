// FIND TWO SUM

export const findTwoSum = () => {
  const nums = [2, 7, 11, 15];
  const target = 9;
  const numMap = new Map(); // Use a Map to store numbers and their indices

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i]; // Calculate the complement needed for the current number

    // Check if the complement exists in the Map
    if (numMap.has(complement)) {
      return [numMap.get(complement), i]; // Return the indices of complement and current number
    }

    numMap.set(nums[i], i); // Store the current number and its index in the Map
  }
};
