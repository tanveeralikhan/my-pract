// IS SUBSEQUENCE

export const isSubsequence = () => {
  const s = "abc";
  const t = "ahbgdc";
  let i = 0;
  let j = 0;
  while (i < s.length && j < t.length) {
    if (s[i] !== t[j]) {
      j++;
    } else {
      i++;
      j++;
    }
  }
  return s === i.length;
};
