export const countUnique = (array: number[]) => {
  if (array.length === 0) return 0;
  let index = 0;
  for (let i = 0; i < array.length; i++) {
    if (array[index] !== array[i]) {
      index++;
      array[index] = array[i];
    }
  }
  return index + 1;
};
