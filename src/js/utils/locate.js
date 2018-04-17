/* USAGE:
locate((err, result) => {
  ...
})
*/

import request from 'superagent';
import testData from './locate-test';

const debug = false;
const IPSTACK_KEY = '19abf1356afaccae9f9e2213a3dbe4c0';
const MAX_TIME = 4000;

function getIP() {
	if (debug) return Promise.resolve(testData);
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
	if (debug) return Promise.resolve(testData);
	const url = `https://api.ipstack.com/${ip}?access_key=${IPSTACK_KEY}`;
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
