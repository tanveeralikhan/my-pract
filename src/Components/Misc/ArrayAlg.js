// MERGE sorted Array
export var merge = function (nums1, m, nums2, n) {
  nums1.length = m;
  nums2.length = n;
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
};

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

//ARRAY SHIFTING  or ROTATING
export const rotateArray = () => {
  const nums = [-1, -100, 3, 99];
  const k = 2;
  const a = nums.slice(-k);
  const b = nums.slice(0, k);
  const newArr = [...a, ...b];
  return newArr;
};

// REVERSE WORD
export const reverseWord = () => {
  const arr = "  hello world  ".split(" ");
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] != " " && arr[i] != "") {
      newArr.push(arr[i]);
    }
  }
  return newArr.reverse().join(" ");
};

// LOGEST COMMON PREFIX
export const longPrefix = () => {
  const strs = ["flower", "flow", "flight"];
  const shortestWord = Math.min(...strs.map((value) => value.length));
  const finalWord = [];
  for (let i = 0; i < shortestWord; i++) {
    const cha = strs[0][i];
    if (strs.every((word) => word[i] === cha)) {
      finalWord.push(cha);
    } else break;
  }
  return finalWord.join("");
};

/////Last word Length
export const lastWordLength = () => {
  const s = "luffy is still joyboy";
  const arr = s.split(" ");
  let strLen = "";
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i].length > 0) {
      strLen = arr[i.length];
      break;
    }
  }
  console.log(strLen);
};
