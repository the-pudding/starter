import * as d3 from 'd3'
import 'promis'

function cleanTk(d) {
	return {
		...d,
	}
}

function loadTk(cb) {
	d3.csv('assets/tk.csv', cleanTk, cb)
}

function init() {
	return new Promise((resolve, reject) => {
		d3.queue()
			.defer(loadTk)
			.awaitAll((err, result) => {
				if (err) reject(err)
				else resolve(result)
			})
	})
}

export default init
