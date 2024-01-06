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
