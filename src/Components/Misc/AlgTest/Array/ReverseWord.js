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
