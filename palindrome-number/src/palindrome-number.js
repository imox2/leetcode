const isPalindrome = (x) => {
  let copyX = x;
  let sum = 0;
  let isValidPalindrome = false;
  if (x>=0) {
    while (copyX!=0) {
      const rem = copyX % 10;
      sum = sum * 10 + rem;
      copyX = Math.floor(copyX / 10);
    }
    isValidPalindrome = sum == x;
  }
  return isValidPalindrome;
};


const api = {
  isPalindrome,
};
module.exports = api;
