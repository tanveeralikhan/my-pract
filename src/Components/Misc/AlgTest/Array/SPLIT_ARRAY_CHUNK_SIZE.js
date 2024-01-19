/* function chunkArrayInGroups(arr, size) {
  var myArray = [];
  for (var i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
}
console.log(chunkArrayInGroups(["a", "b", "c", "d"], 2)); */

export const chunkArrayInGroups = () => {
  const arr = ["a", "b", "c", "d", "e"];
  let size = 2;
  var myArray = [];
  for (var i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i + size));
  }
  return myArray;
};
