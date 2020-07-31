/* USAGE:
locate().then(data => {

}).catch(err => {

});
*/

import testData from './locate-test';

const MAX_TIME = 4000;

function lookup() {
	const local = window.location.href.includes('localhost');
	if (local) return Promise.resolve(testData);
  const url = `https://ipinfo.io?token=6f0f9c88db028a`;
  return new Promise((resolve, reject) => {
    fetch(url).then((response) => {
      if (response.ok) response.json().then(resolve).catch(reject);
      else reject(new Error(response.status));
    });
  });
}

function init() {
  return new Promise((resolve, reject) => {
    const timeout = setTimeout(() => reject(new Error('timeout')), MAX_TIME);
    lookup()
      .then((data) => {
        clearTimeout(timeout);
        resolve(data);
      })
      .catch(reject);
  });
}

export default init;
