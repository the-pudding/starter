const DEV_MODE = window.location.hostname.indexOf('localhost') > -1

// keeps track to not resend
const fired = {}

function check({ category, action, once }) {
	if (once) {
		const key = `${category.replace(/\W+/g, '')}${action.replace(/\W+/g, '')}`
		if (fired[key]) return false
		return fired[key] = true
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
				eventCategory: category,
				eventAction: action,
			})
		}
	}
}

export default { send }
