const gulp = require('gulp');
const archieml = require('archieml');
const request = require('request');
const fs = require('fs');

const configPath = `${process.cwd()}/config.json`;
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const { doc } = config.google;

const makeRequest = (opt, cb) => {
	const url = `https://docs.google.com/document/d/${opt.id}/export?format=txt`;
	request(url, (error, response, body) => {
		const parsed = archieml.load(body);
		const str = JSON.stringify(parsed);
		const basePath = process.cwd();
		const file = `${basePath}/${opt.filepath || 'template-data/doc.json'}`;
		fs.writeFile(file, str, err => {
			if (err) console.error(err);
			cb();
		});
	});
};

gulp.task('fetch-doc', cb => {
	let i = 0;
	const next = () => {
		const d = doc[i]
		if (d.id) makeRequest(d, () => {
			i += 1
			if (i < doc.length) next();
			else cb();
		});
	}

	next();
});
