/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
  const str1 = s1.split('');
  const str2 = s2.split('');
  let a = 0;
  if (str1.length === 0 || str2.length === 0) return a;
  for (let i = 0; i < str1.length; i++) {
    for (let k = 0; k < str2.length; k++) {
      if (str1[i] === str2[k]) {
        a++;
        str1.splice(i, 1);
        str2.splice(k, 1);
        i--;
        break;
      }
    }
  }
  return a;
}

module.exports = getCommonCharacterCount;
