const DEV_MODE = window.location.hostname.indexOf('localhost') > -1

// keeps track to not resend
const fired = {}

function check({ category, action, once }) {
	if (once) {
		const cat = category.toString().replace(/\W+/g, '')
		const act = action.toString().replace(/\W+/g, '')
		const key = `${cat}${act}`
		if (fired[key]) return false

		fired[key] = true
		return true
	}
	return true
}

function send({ category, action, once }) {
	const add = check({ category, action, once })

	if (add) {
		if (DEV_MODE) console.log({ category, action, once })
		else if (window.ga) {
			ga('send', {
				hitType: 'event',
				eventCategory: category.toString(),
				eventAction: action.toString(),
			})
		}
	}
}

export default { send }
