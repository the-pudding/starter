import 'promis'
import FontFaceObserver from 'fontfaceobserver'
import { select, addClass } from './dom'

window.fontsLoaded = []

const createStylesheet = () => {
	const style = document.createElement('style')
	document.head.appendChild(style)
	return style.sheet
}

const addFontRule = ({ font, sheet }) => {
	// console.log(font)
	const { weight, family } = font
	const name = family.toLowerCase().replace(/ /g, '-')
	const suffix = weight.toString().charAt(0)
	const className = `tk-${name}-${suffix}`
	const rule = `
		.${className} {
			font-family: '${family}';
			font-weight: ${weight};
		}
	`.trim()
	
	window.fontsLoaded.push(className)
	sheet.insertRule(rule, 0)
}

const handleError = err => console.error(err)

const loadFont = fonts => {
	const sheet = createStylesheet()
	const el = document.documentElement
	const timeout = 8000

	fonts.forEach(font => {
		const { family, weight } = font
		const fontObserver = new FontFaceObserver(family, { weight })
		fontObserver
			.load(null, timeout)
			.then(() => addFontRule({ font, sheet }))
			.catch(handleError)
	})
}

export default loadFont
