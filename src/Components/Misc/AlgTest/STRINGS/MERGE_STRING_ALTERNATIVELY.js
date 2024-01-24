export const mergeStringAlternate = () => {
  let str1 = "ab";
  let str2 = "pqrs";
  let newString = "";
  let strLengthSum = str1.length + str2.length;
  let str1Counter = 0;
  let str2Counter = 0;
  for (let i = 0; i < strLengthSum; i++) {
    if (i % 2 == 0 && str1[str1Counter]) {
      newString += str1[str1Counter++];
    } else if (i % 2 == 1 && str2[str2Counter]) {
      newString += str2[str2Counter++];
    } else if (!str1[str1Counter]) {
      newString += str2[str2Counter++];
    } else if (str2[str2Counter]) {
      newString += str1[str1Counter++];
    }
  }
  return newString;
};
