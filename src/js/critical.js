// import loadCSS from './utils/load-css'
import { loadFontGroup } from './utils/load-font'

// comment out fonts you wont be using
const whitney = [
	{
		family: 'Whitney',
		weight: 400,
		style: 'normal',
		parts: ['Whitney SSm A', 'Whitney SSm B'],
	},
	{
		family: 'Whitney',
		weight: 700,
		style: 'normal',
		parts: ['Whitney SSm A', 'Whitney SSm B'],
	},
	{
		family: 'Whitney',
		weight: 400,
		style: 'italic',
		parts: ['Whitney SSm A', 'Whitney SSm B'],
	},
]

const mercury = [
	{
		family: 'Mercury',
		weight: 400,
		style: 'normal',
		parts: ['Mercury SSm A', 'Mercury SSm B'],
	},
	{
		family: 'Mercury',
		weight: 500,
		style: 'normal',
		parts: ['Mercury SSm A', 'Mercury SSm B'],
	},
]

whitney.forEach(loadFontGroup)
mercury.forEach(loadFontGroup)
