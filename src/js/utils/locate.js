/* USAGE:
locate(key, (err, result) => {
  ...
})
*/

import request from 'superagent';
import testData from './locate-test';

const debug = false;
const MAX_TIME = 4000;
let key = null;

function getIP() {
	if (debug) return Promise.resolve(testData);
	const url = 'https://api.ipify.org?format=json';
	return new Promise((resolve, reject) => {
		request.get(url).end((err, res) => {
			if (err) reject(err);
			else if (res && res.status >= 200 && res.status < 400)
				resolve(JSON.parse(res.text));
			else reject(err);
		});
	});
}

function getGeocode({ ip }) {
	if (debug) return Promise.resolve(testData);
	const url = `https://api.ipstack.com/${ip}?access_key=${key}`;
	return new Promise((resolve, reject) => {
		request.get(url).end((err, res) => {
			if (err) reject(err);
			else if (res && res.status >= 200 && res.status < 400) {
				const j = JSON.parse(res.text);
				if (j.error) reject(j.error);
				else resolve(j);
			} else reject(err);
		});
	});
}

/**
 * Get users approx. location according to IP address
 * @param {function} cb callback funtion
 */

function init(k, cb) {
	if (k) {
		key = k;
		const timeout = setTimeout(() => cb('timeout'), MAX_TIME);

		getIP()
			.then(getGeocode)
			.then(response => {
				clearTimeout(timeout);
				cb(null, response);
			})
			.catch(err => cb(err));
	} else cb('error: must pass ipstack key');
}

export default init;
