export const divideString = () => {
  try {
    let str = "banana";
    if (str.length % 2 !== 0) {
      throw "String is odd";
    }
    let str1 = "",
      str2 = "",
      obj1 = {},
      obj2 = {};

    let strArr = str.split("");
    for (let i = 0; i < str.length; i++) {
      if (i < str.length / 2) {
        str1 += strArr[i];
        obj1[strArr[i]] = obj1[strArr[i]] ? obj1[strArr[i]] + 1 : 1;
      } else {
        str2 += strArr[i];
        obj2[strArr[i]] = obj2[strArr[i]] ? obj2[strArr[i]] + 1 : 1;
      }
    }
    console.log(str1, str2, obj1, obj2);
    return { str1, str2, obj1, obj2 };
  } catch (e) {
    console.log(e);
  }
};
