/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function (n) {
  const numSet = new Set();
  while (n !== 1) {
    let tmp = 0;
    while (n) {
      tmp += Math.pow(n % 10, 2);
      n = Math.floor(n / 10);
    }
    n = tmp;
    if (numSet.has(n)) break;
    else numSet.add(n);
  }
  return n === 1;
};
