export const differenceOftwoArrays = () => {
  const nums1 = [80, 5, -20, 33, 26, 29],
    nums2 = [-69, 0, -36, 52, -84, -34, -67, -100, 80];
  const maxLength = Math.max(...[nums1, nums2].map((val) => val.length));
  let nums1Arr1 = [],
    nums2Arr2 = [];

  for (let i = 0; i < maxLength; i++) {
    let val1 = nums1[i],
      val2 = nums2[i];
    let val1TypeisNumber = typeof val1 === "number",
      val2TypeIsNumber = typeof val2 === "number";
    if (
      val1TypeisNumber &&
      !nums1Arr1.includes(val1) &&
      !nums2.includes(val1)
    ) {
      nums1Arr1.push(val1);
    }
    if (
      val2TypeIsNumber &&
      !nums2Arr2.includes(val2) &&
      !nums1.includes(val2)
    ) {
      nums2Arr2.push(val2);
    }
  }

  return [nums1Arr1, nums2Arr2];
};
