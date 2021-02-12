const findMedianSortedArrays = (nums1, nums2) => {
  nums1.push(...nums2);
  nums1.sort((a, b) => a - b);
  let median;
  if (nums1.length%2==0) {
    // even
    const midpoint = Math.floor(nums1.length/2) - 1;
    median = (nums1[midpoint] + nums1[midpoint + 1])/2;
  } else {
    const midpoint = Math.floor(nums1.length/2);
    median = nums1[midpoint];
  }
  return median;
};


const api = {
  findMedianSortedArrays,
};
module.exports = api;
