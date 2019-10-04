/**
 * Finds unique values in an array of values
 * @param {array} arr - sequence of strings, numbers, booleans
 * @returns {array} array of unique values
 *
 * @example
 * import findUnique from './utils/unique';
 * const unique = findUnique([1,2,2,3]);
 * // [1,2,3]
 */

export default function findUnique(arr) {
  return [...new Set(arr)];
}
