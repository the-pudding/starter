import debounce from 'lodash.debounce'
import { select, addClass } from './utils/dom'
import isMobile from './utils/is-mobile'

const bodyEl = select('body')
let previousWidth = 0

function handleResize() {
	const width = bodyEl.offsetWidth
	if (previousWidth !== width) {
		previousWidth = width
		// resize here
	}
}

function init() {
	// add mobile class to body tag
	if (isMobile.any()) addClass(bodyEl, 'is-mobile')
	// setup resize event
	window.addEventListener('resize', debounce(handleResize, 150))
}

init()
