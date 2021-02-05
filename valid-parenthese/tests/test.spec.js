const api = require('../src/valid-parenthese');
const chai = require('chai');
const expect = chai.expect;
// mocha

describe('valid-parenthese is correct', () => {
  it('returns true for valid parenthese ()', async () => {
    const isValid = api.isValid('()');
    expect(isValid).equal(true);
  });
  it('returns false for valid parenthese ())', async () => {
    const isValid = api.isValid('())');
    expect(isValid).equal(false);
  });
});
