/* global d3 */
/* usage
	import loadData from './load-data'
	
	loadData('file.csv').then(result => {
		console.log(result);
	}).catch(console.error);

	loadData(['file1.csv', 'file2.json]).then(result => {
		console.log(result);
	}).catch(console.error);
*/

function loadFile(file) {
  return new Promise((resolve, reject) => {
    const ext = file.split('.').pop();
    if (ext === 'csv')
      d3.csv(`assets/data/${file}`)
        .then(resolve)
        .catch(reject);
    else if (ext === 'json')
      d3.json(`assets/data/${file}`)
        .then(resolve)
        .catch(reject);
    else reject(new Error(`unsupported file type for: ${file}`));
  });
}

export default function loadData(files) {
  if (typeof files === 'string') return loadFile(files);
  const loads = files.map(loadFile);
  return Promise.all(loads);
}
