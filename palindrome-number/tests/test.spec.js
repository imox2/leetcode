const api = require('../src/palindrome-number');
const chai = require('chai');
const expect = chai.expect;
// mocha

describe('palindrome-number is correct', () => {
  it('returns true for valid palindrome 121', async () => {
    const isValid = api.isPalindrome(121);
    expect(isValid).equal(true);
  });
  it('returns false for valid palindrome 234', async () => {
    const isValid = api.isPalindrome(234);
    expect(isValid).equal(false);
  });
  it('returns false for negative numbers', async () => {
    const isValid = api.isPalindrome(-121);
    expect(isValid).equal(false);
  });
});
