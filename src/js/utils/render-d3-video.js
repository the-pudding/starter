if (document.URL.includes('render-d3-video')) {
	window.currentTime = 0;
	performance.now = () => window.currentTime;
}
