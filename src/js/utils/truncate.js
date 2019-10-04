/**
 * Truncate string with options for clean break and ellipses
 * @param {string} text - string to trim
 * @param {number} [chars=100] - number of characters to cut after
 * @param {boolean} [clean=true] - break on space or not
 * @param {boolean} [ellipses=false] - adds ...
 *
 * @returns {string} truncated text
 *
 * @example
 * import truncate from './utils/truncate';
 * const result = truncate({ text: "shorten this string maybe", chars: 15 });
 */

function truncate({ text, chars = 100, clean = true, ellipses = false }) {
  const over = text.length > chars;
  const a = text.substring(0, chars);
  const end = clean ? a.lastIndexOf(' ') : a.length;
  const b = over ? a.substring(0, end) : text;
  const e = over && ellipses ? '...' : '';
  return `${b}${e}`;
}

export default truncate;
