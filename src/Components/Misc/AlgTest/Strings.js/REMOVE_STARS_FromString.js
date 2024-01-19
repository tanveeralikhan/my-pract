const removeStart = () => {
  let s = "leet**cod*e";
  let i = 0;
  let stk = [];
  while (i < s.length) {
    if (s.charAt(i) === "*") {
      if (stk.length > 0) {
        stk.pop(s.charAt(i));
      }
    } else {
      stk.push(s.charAt(i));
    }
    i++;
  }

  return stk.join("");
};
