/**
 * @param {string} S
 * @param {string} T
 * @return {boolean}
 */
var ops = (str) => {
  let res = [];
  [...str].forEach((s) => {
    if (s === "#") res.pop();
    else {
      res.push(s);
    }
  });
  return res.join();
};

var backspaceCompare = function (S, T) {
  return ops(S) === ops(T);
};
