const reverse = (n) => {
  let reverseN = 0;
  const sign = n < 0;
  n = Math.abs(n);
  while (n) {
    reverseN = reverseN*10 + (n % 10);
    n = Math.floor(n/10);
  }
  return reverseN > 0x7FFFFFFF ? 0 : sign ? -reverseN : reverseN;
};


const api = {
  reverse,
};
module.exports = api;
