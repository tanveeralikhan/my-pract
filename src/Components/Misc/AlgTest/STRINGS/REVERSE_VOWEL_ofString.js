export const reverseVowel = () => {
  let s = "hello";
  let vowelStr = "";
  let vowel = "aeiou";
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i]) || vowel.includes(s[i].toLowerCase())) {
      vowelStr += s[i];
    }
  }
  let leng = vowelStr.length;
  let strArr = s.split("");
  for (let i = 0; i < s.length; i++) {
    if (vowel.includes(s[i]) || vowel.includes(s[i].toLowerCase())) {
      strArr[i] = vowelStr[leng - 1];
      leng--;
    }
  }
  return strArr.join("");
};
