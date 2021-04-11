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
  s1 = s1.split('')
  s2 = s2.split('')

  let a = 0;

  if (s1.length === 0 || s2.length === 0) return a;

for (let i = 0; i < s1.length; i++) {
  for (let k = 0; k < s2.length; k++) {
    if (s1[i] === s2[k]) {
     a++;
     s1.splice(i, 1);
     s2.splice(k, 1);
     i--;
     break;
    }
   }
  }          
 return a;
}

module.exports = getCommonCharacterCount;
