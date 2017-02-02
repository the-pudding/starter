import debounce from 'lodash.debounce'
import * as $ from './utils/dom'
import isMobile from './utils/is-mobile'

const DEV_MODE = window.location.hostname.indexOf('localhost') > -1

const bodyEl = $.select('body')
let previousWidth = 0

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
	addMobileClass()
	window.addEventListener('resize', debounce(handleResize, 150))
}

init()
