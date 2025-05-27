export const checkAnagram = (str1: string, str2: string) => {
  let frequency1: Record<string, number> = {},
    frequency2: Record<string, number> = {};

  for (let value of str1) {
    frequency1[value] = frequency1[value] ? frequency1[value] + 1 : 1;
  }
  for (let value of str1) {
    frequency2[value] = frequency2[value] ? frequency2[value] + 1 : 1;
  }

  for (let key in frequency1) {
    const isValue = frequency2[key];
    if (!isValue) return false;
    if (isValue !== frequency1[key]) return false;
  }
  return true;
};
