// Longest SUBSTRING

export const longestSubstring = () => {
  let s = "bbbb";
  const ss = new Set();
  let i = 0;
  let ans = 0;
  for (let j = 0; j < s.length; ++j) {
    while (ss.has(s[j])) {
      ss.delete(s[i++]);
    }
    ss.add(s[j]);
    ans = Math.max(ans, j - i + 1);
  }
  return ans;
};
