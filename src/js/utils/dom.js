// DOM helper functions

// private
function selectionToArray(selection) {
	const len = selection.length
	const result = []
	for (var i = 0; i < len; i++) {
		result.push(selection[i])
	}
	return result
}

// public
function select(selector) {
	document.querySelector(selector)
}

function selectAll(selector, parent = document) {
	selectionToArray(parent.querySelectorAll(selector))
}

function find(el, selector) {
	selectionToArray(el.querySelectorAll(selector))
}

function removeClass(el, className) {
	el.classList ?
	el.classList.remove(className) :
	el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')

function addClass(el, className) {
	el.classList ?
	el.classList.add(className) :
	el.className += ' ' + className
}

function hasClass(el, className) {
	el.classList ?
	el.classList.contains(className) :
	new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
}

function jumpTo(el) {
	document.body.scrollTop ?
	document.body.scrollTop = el.offsetTop + 1 :
	document.documentElement.scrollTop = el.offsetTop + 1
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
