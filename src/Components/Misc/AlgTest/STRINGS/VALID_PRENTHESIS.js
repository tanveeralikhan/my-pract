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
