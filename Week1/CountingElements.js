/**
 * @param {number[]} arr
 * @return {number}
 */
var countElements = function (arr) {
  const elementMap = new Map();
  let counter = 0;
  arr.forEach((e) => {
    const tmp = elementMap.get(e) || 0;
    elementMap.set(e, tmp + 1);
  });
  [...elementMap.keys()].forEach((k) => {
    const pairA = elementMap.get(k) || 0,
      pairB = elementMap.get(k + 1) || 0;
    if (pairB > 0) {
      counter += pairA;
    }
  });
  return counter;
};
