/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function (nums) {
  const numMap = new Map();
  nums.forEach((num) => {
    const k = num.toString(), v = numMap.get(k) || 0;
    numMap.set(k, v + 1);
  });
  return [...numMap.entries()].filter((k) => k[1] === 1)[0][0];
};
