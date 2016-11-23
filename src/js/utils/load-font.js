import 'promis'
import FontFaceObserver from 'fontfaceobserver'
import { addClass } from './dom'

const htmlEl = document.documentElement
const TIMEOUT = 5000

function addFont({ family, weight }) {
	const name = family.toLowerCase().replace(/ /g, '-')
	const className = `loaded-${name}-${weight}`
	addClass(htmlEl, className)
}

function handleError(err) {
	console.error(err)
}

function loadFont(fonts) {
	fonts.forEach(font => {
		const { family, weight } = font
		const fontObserver = new FontFaceObserver(family, { weight })
		fontObserver
			.load(null, TIMEOUT)
			.then(() => addFont(font))
			.catch(handleError)
	})
}

export default loadFont
