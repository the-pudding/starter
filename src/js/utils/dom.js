// DOM helper functions

// private
const selectionToArray = (selection) => {
	const len = selection.length
	const result = []
	for (var i = 0; i < len; i++) {
		result.push(selection[i])
	}
	return result
}

// public
const select = (selector) =>
	document.querySelector(selector)

const selectAll = (selector) =>
	selectionToArray(document.querySelectorAll(selector))

const find = (el, selector) =>
	selectionToArray(el.querySelectorAll(selector))

const removeClass = (el, className) =>
	el.classList.remove(className)

const addClass = (el, className) =>
	el.classList.add(className)

const hasClass = (el, className) =>
	el.classList.contains(className)

const jumpTo = (el) => {
	if (document.body.scrollTop) document.body.scrollTop = el.offsetTop + 1
	else document.documentElement.scrollTop = el.offsetTop + 1
}

export {
	select,
	selectAll,
	find,
	removeClass,
	addClass,
	hasClass,
	jumpTo,
}
