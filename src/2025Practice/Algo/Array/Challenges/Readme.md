### Frequency Counter - sameFrequency

# Write a function called sameFrequency. Given two positive integers, find out if the two numbers have the same frequency of digits.

Your solution MUST have the following complexities:

Time: O(N)

## Sample Input:

- sameFrequency(182,281) // true
- sameFrequency(34,14) // false
- sameFrequency(3589578, 5879385) // true
- sameFrequency(22,222) // false

### Frequency Counter / Multiple Pointers - areThereDuplicates

## Implement a function called, areThereDuplicates which accepts a variable number of arguments, and checks whether there are any duplicates among the arguments passed in. You can solve this using the frequency counter pattern OR the multiple pointers pattern.

Examples:

- areThereDuplicates(1, 2, 3) // false
- areThereDuplicates(1, 2, 2) // true
- areThereDuplicates('a', 'b', 'c', 'a') // true
  Restrictions:

Time - O(n)

Space - O(n)

Bonus:

Time - O(n log n)

### Frequency Counter - constructNote

## Write a function called constructNote, which accepts two strings, a message and some letters. The function should return true if the message can be built with the letters that you are given, or it should return false.

Assume that there are only lowercase letters and no space or special characters in both the message and the letters.

Bonus Constraints:

If M is the length of message and N is the length of letters:

Time Complexity: O(M+N)

Space Complexity: O(N)

Examples:

- constructNote('aa', 'abc') // false
- constructNote('abc', 'dcba') // true
- constructNote('aabbcc', 'bcabcaddff') // true

## Solutions

### sameFrequency Solution

```function sameFrequency(num1, num2) {
  let strNum1 = num1.toString();
  let strNum2 = num2.toString();
  if (strNum1.length !== strNum2.length) return false;

  let countNum1 = {};
  let countNum2 = {};

  for (let i = 0; i < strNum1.length; i++) {
    countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
  }

  for (let j = 0; j < strNum1.length; j++) {
    countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
  }

  for (let key in countNum1) {
    if (countNum1[key] !== countNum2[key]) return false;
  }

  return true;
}
```

### areThereDuplicates Solution (Frequency Counter)

```function areThereDuplicates() {
  let collection = {}
  for (let val in arguments) {
    collection[arguments[val]] = (collection[arguments[val]] || 0) + 1
  }
  for (let key in collection) {
    if (collection[key] > 1) return true
  }
  return false;
}
```

### areThereDuplicates Solution (Multiple Pointers)

```function areThereDuplicates(...args) {
  args.sort((a, b) => {
    if (a < b) return -1;
    if (a > b) return 1;
    return 0;
  });

  let start = 0;
  let next = 1;
  while (next < args.length) {
    if (args[start] === args[next]) {
      return true;
    }
    start++;
    next++;
  }
  return false;
}
```

### areThereDuplicates One Liner Solution

```function areThereDuplicates() {
  return new Set(arguments).size !== arguments.length;
}
```

### constructNote Solution

```function constructNote(message, letters) {
  var frequency = {};
  var frequencyM = {};

  for (let i = 0; i < letters.length; i++) {
    frequency[letters[i]] = ++frequency[letters[i]] || 1;
  }

  for (let i = 0; i < message.length; i++) {
    frequencyM[message[i]] = ++frequencyM[message[i]] || 1;
  }

  for (let k in frequencyM) {
    if (!frequency[k]) return false;
    if (frequencyM[k] > frequency[k]) return false;
  }

  return true;
}
```

### findAllDuplicates Solution

```function findAllDuplicates(nums) {
  let ans = [];
  var s = new Set();
  for (let i = 0; i < nums.length; i++) {
    s.has(nums[i]) ? ans.push(nums[i]) : s.add(nums[i])
  }
  return ans;
}
```
