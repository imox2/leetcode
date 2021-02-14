const findMedianSortedArrays = (nums1 = [], nums2 = []) => {
  let i1 = 0;
  let i2 = 0;
  const len1 = nums1.length;
  const len2 = nums2.length;
  const len = len1 + len2;
  if (len == 0) {
    return null;
  }

  const merged = [];

  while (i1<len1 && i2<len2) {
    if (nums1[i1]<=nums2[i2]) {
      merged.push(nums1[i1]);
      i1++;
    } else {
      merged.push(nums2[i2]);
      i2++;
    }
  }

  while (i1<len1) {
    merged.push(nums1[i1]);
    i1++;
  }

  while (i2<len2) {
    merged.push(nums2[i2]);
    i2++;
  }

  const isOdd = len % 2 != 0;
  const median = isOdd ? merged[(len -1)/2] :
  (merged[len/2] + merged[len/2 -1])/2;
  return median;
};


const api = {
  findMedianSortedArrays,
};
module.exports = api;
