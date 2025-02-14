/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let longestArr = [];
  let currentArr = [];

  for (let i = 0; i < s.length; i++) {
    if (currentArr.includes(s[i])) {
      if (currentArr.length > longestArr.length) {
        longestArr = [...currentArr];
      }
      let index = currentArr.indexOf(s[i]);
      currentArr = currentArr.slice(index + 1);
    }

    currentArr.push(s[i]);
  }

  if (currentArr.length > longestArr.length) {
    longestArr = [...currentArr];
  }

  return longestArr.length;
};
