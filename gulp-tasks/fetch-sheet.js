const gulp = require('gulp');
const request = require('request');
const fs = require('fs');
const dsv = require('d3-dsv');

const configPath = `${process.cwd()}/config.json`;
const config = JSON.parse(fs.readFileSync(configPath, 'utf8'));
const { sheet } = config.google;

const makeRequest = (opt, cb) => {
	const base = 'https://docs.google.com/spreadsheets/u/1/d';
	const url = `${base}/${opt.id}/export?format=csv&id=${opt.id}&gid=${opt.gid}`;
	request(url, (error, response, body) => {
		const data = dsv.csvParse(body);
		const str = JSON.stringify(data);
		const basePath = `${process.cwd()}`;
		const file = `${basePath}/${opt.filepath || 'template-data/sheet.json'}`;
		fs.writeFile(file, str, err => {
			if (err) console.error(err);
			cb();
		});
	});
};

gulp.task('fetch-sheet', cb => {
	let i = 0;
	const next = () => {
		const d = sheet[i]
		if (d.id) makeRequest(d, () => {
			i += 1
			if (i < sheet.length) next();
			else cb();
		});
	}

	next();
});
