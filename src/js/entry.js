import debounce from 'lodash.debounce'
import * as $ from './utils/dom'
import isMobile from './utils/is-mobile'
import graphic from './graphic'

const dev = window.location.hostname.indexOf('localhost') > -1
const containerEl = $.select('.container')
let previousWidth = 0

const logVersion = () => {
	const el = $.select('html')
	const v = el.getAttribute('data-version') 
	console.log(`version: ${v.slice(5, v.length)}`)
}

const addMobileClass = () => {
	const el = $.select('html')
	if (isMobile.any()) $.addClass(el, 'is-mobile')
}

const handleResize = () => {
	const width = containerEl.offsetWidth
	if (previousWidth !== width) {
		// resize here
		previousWidth = width
	}
}

const init = () => {
	logVersion()
	addMobileClass()
	window.addEventListener('resize', debounce(handleResize, 150))
	graphic.init()
}

init()
