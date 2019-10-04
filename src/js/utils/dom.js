// DOM helper functions

// public
function select(selector) {
  return document.querySelector(selector);
}

function selectAll(selector, parent = document) {
  return [...parent.querySelectorAll(selector)];
}

function find(el, selector) {
  return [...el.querySelectorAll(selector)];
}

function removeClass(el, className) {
  if (el.classList) el.classList.remove(className);
  else
    el.className = el.className.replace(
      new RegExp(`(^|\\b)${className.split(' ').join('|')}(\\b|$)`, 'gi'),
      ' '
    );
}

function addClass(el, className) {
  if (el.classList) el.classList.add(className);
  else el.className = `${el.className} ${className}`;
}

function hasClass(el, className) {
  if (el.classList) return el.classList.contains(className);
  return new RegExp(`(^| )${className}( |$)`, 'gi').test(el.className);
}

function jumpTo(el, offset) {
  offset = offset || 0;
  const top = el.getBoundingClientRect().top + offset;
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  const destY = scrollTop + top;
  window.scrollTo(0, destY);
}

export { select, selectAll, find, removeClass, addClass, hasClass, jumpTo };
