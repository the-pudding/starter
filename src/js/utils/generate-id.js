/* global d3 */

function getReverseChronDate() {
  const m = new Date().getTime();
  const l = m.toString().length;
  const f = parseInt(
    d3
      .range(l)
      .map(() => 9)
      .join(''),
    10
  );
  return f - m;
}

export default function generateID({
  chron = false,
  letters = true,
  numbers = true,
  chars = 5,
}) {
  const alphabet = 'abcdefghijklmnopqrstuvwxyz';
  const digits = '0123456789';
  const pool = `${letters ? alphabet : ''}${numbers ? digits : ''}`;
  const date = chron ? getReverseChronDate() : '';
  const str = d3
    .range(chars)
    .map(() => pool[Math.floor(Math.random() * pool.length)])
    .join('');
  return `${date}${str}`;
}
