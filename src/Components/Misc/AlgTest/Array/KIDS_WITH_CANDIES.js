export const getKidsWithCandies = () => {
  let candies = [2, 3, 5, 1, 3],
    extraCandies = 3;

  var maxCandies = Math.max(...candies);
  let outputArr = [];

  for (let i = 0; i < candies.length; i++) {
    let aCandy = candies[i];
    if (aCandy && aCandy !== null && aCandy + extraCandies >= maxCandies) {
      outputArr.push(true);
    } else {
      outputArr.push(false);
    }
  }

  return outputArr;
};
