import { loadFontGroup } from './utils/load-font'

const ptSerif = [
	{
		family: 'PT Serif',
		weight: 400,
	},
	{
		family: 'PT Serif',
		weight: 700,
	},
]

const roboto = [
	{
		family: 'Roboto',
		weight: 400,
	},
	{
		family: 'Roboto',
		weight: 700,
	},
]

loadFontGroup(ptSerif)
loadFontGroup(roboto)
