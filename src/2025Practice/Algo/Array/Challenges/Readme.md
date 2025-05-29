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
