// DOM helper functions

// private
function selectionToArray(selection) {
	const len = selection.length
	const result = []
	for (let i = 0; i < len; i += 1) {
		result.push(selection[i])
	}
	return result
}

// public
function select(selector) {
	return document.querySelector(selector)
}

function selectAll(selector, parent = document) {
	return selectionToArray(parent.querySelectorAll(selector))
}

function find(el, selector) {
	return selectionToArray(el.querySelectorAll(selector))
}

function removeClass(el, className) {
	if (el.classList) el.classList.remove(className)
	else el.className = el.className.replace(new RegExp('(^|\\b)' + className.split(' ').join('|') + '(\\b|$)', 'gi'), ' ')
}

function addClass(el, className) {
	if (el.classList) el.classList.add(className)
	else el.className = `${el.className} ${className}`
}

function hasClass(el, className) {
	if(el.classList) return el.classList.contains(className)
	return new RegExp('(^| )' + className + '( |$)', 'gi').test(el.className)
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
