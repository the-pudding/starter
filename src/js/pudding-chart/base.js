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

		const chart = {
			// called once at start
			init() {
				console.log('init');
				chart.resize();
				chart.render();
			},
			// on resize, update new dimensions
			resize() {
				console.log('resize');
				return chart;
			},
			// update scales and render chart
			render() {
				console.log('render');
				return chart;
			},
			// get / set data
			data(val) {
				if (!arguments.length) return data;
				data = val;
				$sel.datum(data);
				chart.render();
				return chart;
			}
		};
		chart.init();

		return chart;
	}

	return this.nodes().map(createChart);
};
