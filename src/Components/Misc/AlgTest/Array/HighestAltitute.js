export const gain = (gain) => {
  //const gainArr = [-5, 1, 5, 0, -7];
  let rest = [0];
  for (i = 0; i < gain.length; i++) {
    rest.push(rest[i] + gain[i]);
  }
  return Math.max(...rest);
};
