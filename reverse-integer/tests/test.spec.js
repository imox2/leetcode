const api = require('../src/reverse-integer');
const chai = require('chai');
const expect = chai.expect;
// mocha

describe('reverse-integer is correct', () => {
  it('reverses for valid +ve input 123', async () => {
    const reversed = api.reverse(123);
    expect(reversed).equal(321);
  });
  it('reverses for valid -ve input -123', async () => {
    const reversed = api.reverse(-123);
    expect(reversed).equal(-321);
  });
  it('reverses for valid +ve input 120 ending in zero', async () => {
    const reversed = api.reverse(120);
    expect(reversed).equal(21);
  });
  it('reverses for valid input 0', async () => {
    const reversed = api.reverse(0);
    expect(reversed).equal(0);
  });
});
