const api = require('../src/median-sorted-arrays');
const chai = require('chai');
const expect = chai.expect;
// mocha

describe('findMedianSortedArrays is correct', () => {
  it(`computes correct result when both arrays has elements has different
  number of elements`, async () => {
    const result = api.findMedianSortedArrays(nums1 = [1, 3], nums2 = [2]);
    expect(result).equal(2);
  });
  it(`computes correct result when both arrays has elements has 
  same of elements`, async () => {
    const result = api.findMedianSortedArrays(nums1 = [1, 2], nums2 = [3, 4]);
    expect(result).equal(2.5);
  });
  it(`computes correct result when both arrays has all elements 0`,
      async () => {
        const result = api.
            findMedianSortedArrays(nums1 = [0, 0], nums2 = [0, 0]);
        expect(result).equal(0);
      });
  it(`computes correct result when one array has element and
      other array has has no element`,
  async () => {
    const result = api.
        findMedianSortedArrays(nums1 = [], nums2 = [1]);
    expect(result).equal(1);
  });
});
