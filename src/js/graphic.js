/* global d3 */
import locate from './utils/locate';
function resize() {}

function init() {
  console.log('Make something awesome!');
	locate().then(console.log).catch(console.log)
}

export default { init, resize };
