export const isAnagram = () => {
  let str1 = "anagram";
  let str2 = "nagaram";
  let isAnagram = true;
  if (str1.length !== str2.length) {
    isAnagram = false;
  } else {
    for (let index = 0; index < str1.length; index++) {
      if (!str1.includes(str2[index])) {
        isAnagram = false;
      }
    }
  }
  return isAnagram;
};

// Group Anagram

export const groupAnagrams = () => {
  let strs = ["eat", "tea", "tan", "ate", "nat", "bat"];
  const map = new Map();
  for (const str of strs) {
    const k = str.split("").sort().join("");
    map.set(k, (map.get(k) ?? []).concat([str]));
  }
  return [...map.values()];
};
