/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = new Map();
  const o = [];
  strs.forEach((s) => {
    const tmpK = [...s].sort().join();
    const tmpV = res.get(tmpK);
    tmpV ? res.set(tmpK, [...tmpV, s]) : res.set(tmpK, [s]);
  });
  [...res.entries()].forEach((e) => o.push(e[1]));
  return o;
};
