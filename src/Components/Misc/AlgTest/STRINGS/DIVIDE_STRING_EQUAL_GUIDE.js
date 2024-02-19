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
        if (i < str.length - 1) {
          for (const [key, value] of Object.entries(obj1)) {
            console.log(key, value);
            const compareValue = Object.entries(obj2).find(
              ([obj2key, obj2value]) => {
                if (obj2key === key) {
                  return obj2value;
                }
              }
            );
            if (compareValue) {
              console.log(
                `obj1 key ${key} has value ${value} is equal to the value ${compareValue} in obj2`
              );
            } else {
              console.log(
                `obj1 key ${key} has value ${value} is not in in obj2`
              );
            }
          }
        }
      }
    }
    console.log(str1, str2, obj1, obj2);
    return { str1, str2, obj1, obj2 };
  } catch (e) {
    console.log(e);
  }
};
