export const isAlphanumeric = (char: any) => {
  const code = char.charCodeAt(0);
  if (
    !(code > 47 && code < 58) && // 0-9
    !(code > 64 && code < 91) && // A-Z
    !(code > 96 && code < 123) // a-z
  ) {
    return false;
  }
  return true;
};
