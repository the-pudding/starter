const gulp = require('gulp')
const archieml = require('archieml')
const request = require('request')
const fs = require('fs')
const configPath = `${process.cwd()}/config.json`
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
const google = config.google

const url = `https://docs.google.com/document/d/${google.id}/export?format=txt`

const makeRequest = (cb) => {
	request(url, function(error, response, body) {
		const parsed = archieml.load(body)
		const str = JSON.stringify(parsed)
		const basePath = `${process.cwd()}/template-data`
		const file = `${basePath}/${(google.filename || 'copy')}.json`

		fs.writeFile(file, str, (err) => {
			if (err) console.error(err)
			cb()
		})
	})
}

gulp.task('fetch-google', (cb) => {
	if (google.id) makeRequest(cb)
	else {
		console.error('No google doc')
		cb()
	}
})
