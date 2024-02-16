export const nextGreaterElement = () => {
  const nums1 = [4,1,2], nums2 = [1,3,4,2];
 let finalArray=[];
    for(let i=0;i<nums1.length;i++){
         let indexNums1=nums2.indexOf(nums1[i])+1;
        console.log(indexNums1);
        for(let j=indexNums1;j<nums2.length;j++){
        	if(nums2[j]>nums1[i]){
          	finalArray.push(nums2[j]);
            break;
          }
        }
        if(!finalArray[i]){
        	finalArray.push(-1);
        }
    }
    console.log(finalArray)
};
