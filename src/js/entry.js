import { select } from './utils/dom'
import debounce from 'lodash.debounce'
import isMobile from './utils/is-mobile'

const dev = window.location.hostname.indexOf('localhost') > -1

const logVersion = () => {
	const el = $.select('html')
	const v = el.getAttribute('data-version') 
	console.log(`version: ${v}`)
}

const addMobileClass = () => {
	const el = $.select('html')
	if (isMobile().any()) $.addClass(el, 'is-mobile')
}

const handleResize = () => {

}

const init = () => {
	logVersion()
	addMobileClass()
	window.addEventListener('resize', debounce(handleResize, 150))
}

init()
