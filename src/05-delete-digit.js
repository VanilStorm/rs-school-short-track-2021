/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  const array = Array.from(String(n), Number);
  array.splice(array.indexOf(Math.min(...array)), 1);
  return Number(array.join(''));
}

module.exports = deleteDigit;
