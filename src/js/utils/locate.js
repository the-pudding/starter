/* USAGE:
locate((err, result) => {
  ...
})
*/

import request from 'superagent';

const test = {
	ip: '24.194.26.74',
	country_code: 'US',
	country_name: 'United States',
	region_code: 'MA',
	region_name: 'Massachusetts',
	city: 'Great Barrington',
	zip_code: '01230',
	time_zone: 'America/New_York',
	latitude: 42.1617,
	longitude: -73.3277,
	metro_code: 532
};
const debug = false;
const MAX_TIME = 4000;

function getIP() {
	if (debug) return Promise.resolve(test);
	const url = 'https://api.ipify.org?format=json';
	return new Promise((resolve, reject) => {
		request.get(url).end((err, res) => {
			if (err) reject(err);
			else if (res && res.status >= 200 && res.status < 400)
				resolve(JSON.parse(res.text));
			else reject();
		});
	});
}

function getGeocode({ ip }) {
	if (debug) return Promise.resolve(test);
	const url = `https://freegeoip.net/json/${ip}`;
	return new Promise((resolve, reject) => {
		request.get(url).end((err, res) => {
			if (err) reject(err);
			else if (res && res.status >= 200 && res.status < 400)
				resolve(JSON.parse(res.text));
			else reject();
		});
	});
}

/**
 * Get users approx. location according to IP address
 * @param {function} cb callback funtion
 */

function init(cb) {
	const timeout = setTimeout(() => cb('timeout'), MAX_TIME);

	getIP()
		.then(getGeocode)
		.then(response => {
			clearTimeout(timeout);
			cb(null, response);
		})
		.catch(err => cb(err));
}

export default init;
