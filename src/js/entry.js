import debounce from 'lodash.debounce'
import * as $ from './utils/dom'
import isMobile from './utils/is-mobile'

const DEV_MODE = window.location.hostname.indexOf('localhost') > -1

const bodyEl = $.select('body')
let previousWidth = 0

function logVersion() {
	const el = $.select('html')
	const v = el.getAttribute('data-version') 
	console.log(`version: ${v.slice(5, v.length)}`)
}

function addMobileClass() {
	const el = $.select('html')
	if (isMobile.any()) $.addClass(el, 'is-mobile')
}

function handleResize() {
	const width = bodyEl.offsetWidth
	if (previousWidth !== width) {
		// resize here
		previousWidth = width
	}
}

function init() {
	logVersion()
	addMobileClass()
	window.addEventListener('resize', debounce(handleResize, 150))
}

init()
