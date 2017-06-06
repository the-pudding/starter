// D3 is included by globally by default
import debounce from 'lodash.debounce'
import { select, addClass } from './utils/dom'
import isMobile from './utils/is-mobile'
import graphic from './graphic'

const bodyEl = select('body')
let previousWidth = 0

function resize() {
	const width = bodyEl.offsetWidth
	if (previousWidth !== width) {
		previousWidth = width
		graphic.resize()
	}
}

function init() {
	// add mobile class to body tag
	if (isMobile.any()) addClass(bodyEl, 'is-mobile')
	// setup resize event
	window.addEventListener('resize', debounce(resize, 150))
	// kick off graphic code
	graphic.init()
}

init()
