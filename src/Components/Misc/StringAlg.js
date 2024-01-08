// Longest SUBSTRING

export const longestSubstring = () => {
  let s = "bbbb";
  const ss = new Set();
  let i = 0;
  //ans = 0;
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

// VALID PARENTHESIS
export const isValidParentheses = () => {
  let s = "[{()}]";
  let stack = [];
  let length = s.length;
  for (let i = 0; i < length; i++) {
    let exp = s[i];
    if (exp === "(" || exp === "{" || exp === "[") {
      stack.push(exp);
      continue;
    }

    let checking;
    switch (exp) {
      case ")":
        checking = stack.pop();
        if (!checking || checking === "{" || checking === "[") return false;
        break;

      case "}":
        checking = stack.pop();
        if (!checking || checking === "[" || checking === "(") return false;
        break;

      case "]":
        checking = stack.pop();
        if (!checking || checking === "{" || checking === "(") return false;
        break;
    }
  }
  return stack.length === 0;
};
