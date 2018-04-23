/*
 USAGE (example: line chart)
 1. c+p this template to a new file (line.js)
 2. change puddingChartName to puddingChartLine
 3. in graphic file: import './pudding-chart/line'
 4a. const charts = d3.selectAll('.thing').data(data).puddingChartLine();
 4b. const chart = d3.select('.thing').datum(data).puddingChartLine();
*/

d3.selection.prototype.puddingChartName = function init(options) {
	function createChart(el) {
		const $sel = d3.select(el);
		let data = $sel.datum();
		// dimension stuff
		const outerW = 0;
		const outerH = 0;
		const innerW = 0;
		const innerH = 0;
		const marginTop = 0;
		const marginBottom = 0;
		const marginLeft = 0;
		const marginRight = 0;

		const Chart = {
			// called once at start
			init() {
				console.log('init');
				Chart.resize();
				Chart.render();
			},
			// on resize, update new dimensions
			resize() {
				console.log('resize');
				return Chart;
			},
			// update scales and render chart
			render() {
				console.log('render');
				return Chart;
			},
			// get / set data
			data(val) {
				if (!arguments.length) return data;
				data = val;
				$sel.datum(data);
				Chart.render();
				return Chart;
			}
		};
		Chart.init();

		return Chart;
	}

	return this.nodes().map(createChart);
};
