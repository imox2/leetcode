/**
 * @param {string} s
 * @return {boolean}
 */
const isValid = s => { // eslint-disable-line
  const endCharsMap = {
    ')': '(',
    '}': '{',
    ']': '[',
  };
  const startCharsMap = {
    '(': ')',
    '{': '}',
    '[': ']',
  };
  const totalChars = s.length;
  const stack = [];
  for (i=0; i<totalChars; i++) {
    const character = s.charAt(i);
    if (startCharsMap[character]) {
      // push operation
      stack.push(character);
    } else if (stack.length>0 &&
        stack[stack.length-1]==endCharsMap[character]) {
      // pop
      stack.pop();
    } else {
      // wrong
      // push empty array to falsify and break
      stack.push('[]');
      break;
    }
  }

  return stack.length == 0;
};
