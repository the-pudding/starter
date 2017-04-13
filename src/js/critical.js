import { loadFontGroup } from './utils/load-font'

const canela = [
	{ family: 'Canela Web', weight: 300 },
	{ family: 'Canela Web', weight: 700 },
]

const publico = [
	{ family: 'Publico Text Web', weight: 400 },
	{ family: 'Publico Text Web', weight: 700 },
]

const atlas = [
	{ family: 'Atlas Grotesk Web', weight: 300 },
	{ family: 'Atlas Grotesk Web', weight: 400 },
	{ family: 'Atlas Grotesk Web', weight: 500 },
]

loadFontGroup(canela)
loadFontGroup(publico)
loadFontGroup(atlas)
