/* global d3 */

function loadA(file) {
  return new Promise((resolve, reject) => {
    d3.csv(`assets/data/${file}`)
      .then(result => {
        // clean here
        resolve(result);
      })
      .catch(reject);
  });
}

export default function loadData() {
  const loads = [loadA('filename.csv')];
  return Promise.all(loads);
}
