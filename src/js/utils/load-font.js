import 'promis'
import FontFaceObserver from 'fontfaceobserver'
import { addClass } from './dom'

const htmlEl = document.documentElement
const TIMEOUT = 5000

function addFont({ family }) {
	const name = family.toLowerCase().replace(/ /g, '-')
	const className = `loaded-${name}`
	addClass(htmlEl, className)
}

function handleError(err) {
	console.error(err)
}

function loadFont(font) {
	const { family, weight } = font
	const fontObserver = new FontFaceObserver(family, { weight })
	fontObserver
		.load(null, TIMEOUT)
		.then(() => addFont(font))
		.catch(handleError)
}

function loadFontGroup(font) {
	const { family, weight, style, parts } = font

	const promises = parts.map((part) => {
		const fontObserver = new FontFaceObserver(part, { weight, style })
		return fontObserver
			.load(null, TIMEOUT)
	})

	Promise.all(promises)
		.then(() => addFont({ family, weight }))
		.catch(handleError)
}

export { loadFont, loadFontGroup }
