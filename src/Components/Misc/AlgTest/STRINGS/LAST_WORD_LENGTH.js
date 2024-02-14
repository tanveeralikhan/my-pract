export const lastWordLength = () => {
  const s = "luffy is still joyboy";
  const arr = s.split(" ");
  let strLen = "";
  for (let i = arr.length - 1; i > -1; i--) {
    if (arr[i].length > 0) {
      strLen = arr[i.length];
      break;
    }
  }
  console.log(strLen);
};
