/**
 * Truncate string with options for clean break and ellipses
 * @param {string} text to trim
 * @param {number} [chars=100] number of characters to cut at
 * @param {boolean} [clean=true] break on space?
 * @param {boolean} [ellipses=false] add ...

 * @returns {string} truncated text
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
