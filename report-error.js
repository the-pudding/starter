const notify = require('gulp-notify')
const gutil = require('gulp-util')

module.exports = function(error) {
	const lineNumber = (error.lineNumber) ? 'LINE ' + error.lineNumber + ' -- ' : '';

	notify({
		title: 'Task failed [' + error.plugin + ']',
		message: lineNumber + 'See terminal.',
		sound: 'Sosumi'
	}).write(error);

	gutil.beep();

	let report = '';
	let chalk = gutil.colors.white.bgRed;

	report += chalk('TASK:') + ' [' + error.plugin + ']\n';
	report += chalk('PROB:') + ' ' + error.message + '\n';

	if (error.lineNumber) { report += chalk('LINE:') + ' ' + error.lineNumber + '\n'; }

	if (error.fileName)   { report += chalk('FILE:') + ' ' + error.fileName + '\n'; }

	console.error(report);

	this.emit('end');
}
