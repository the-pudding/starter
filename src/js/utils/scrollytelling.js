function init() {
	let indexPrev = -1;
	let index = 0;
	let progressPrev = 0;
	let progress = 0;
	let yPos = 0;
	let yPosPrev = 0;

	let numSteps = 0;
	let offset = 0;
	let vh = 0;

	let ticking = false;
	let stateEnter = false;
	let stateExit = true;

	let direction = null;
	let bboxGraphic = null;

	let graphicEl = null;
	let textEl = null;
	let stepEl = null;

	let isDisabled = false;

	const callback = {};
	const notification = {};

	// DOM HELPERS
	function select(selector) {
		return document.querySelector(selector);
	}

	function selectAll(selector, parent = document) {
		return [...parent.querySelectorAll(selector)];
	}

	// NOTIFY CALLBACKS
	function notifyStep() {
		const element = stepEl[index];
		notification.step = { index, direction, element };
		if (typeof callback.step && typeof callback.step === 'function') {
			callback.step(notification.step);
			notification.step = null;
		}
	}

	function notifyProgress() {
		const element = stepEl[index];
		notification.progress = { index, progress, direction, element };
		if (typeof callback.progress === 'function') {
			callback.progress(notification.progress);
			notification.progress = null;
		}
	}

	function notifyEnter() {
		notification.enter = { direction };
		if (typeof callback.enter === 'function') {
			callback.enter(notification.enter);
			notification.enter = null;
		}
	}

	function notifyExit() {
		notification.exit = { direction };
		if (typeof callback.exit === 'function') {
			callback.exit(notification.exit);
			notification.exit = null;
		}
	}

	// HELPER FUNCTIONS
	function findStep({ complete, off }) {
		const i = Math.floor(complete * numSteps);
		// look at the steps before and after as well to find right one
		const matches = [i - 1, i, i + 1].filter(
			d =>
				d >= 0 &&
				d < numSteps &&
				stepEl[d].getBoundingClientRect().top - off < 0,
		);
		return matches.pop() || 0;
	}

	// CHECKERS
	// check if we need to trigger graphic to update
	function checkStep({ bbox, off }) {
		// total progress complete
		const bottom = bbox.bottom - off;
		const complete = 1 - bottom / bbox.height;
		// update step index
		index = findStep({ complete, off });
		if (index !== indexPrev) {
			indexPrev = index;
			notifyStep();
		}

		// update progress
		const bboxStep = stepEl[index].getBoundingClientRect();
		progress = Math.max(0, 1 - bboxStep.bottom / bboxStep.height);
		if (progress !== progressPrev) {
			progressPrev = progress;
			notifyProgress();
		}
	}

	function checkEnter() {
		if (!stateEnter) {
			stateEnter = true;
			stateExit = false;
			notifyEnter();
		}
	}

	function checkExit() {
		if (!stateExit) {
			stateExit = true;
			stateEnter = false;
			notifyExit();
		}
	}

	function updateDirection() {
		// update direction
		direction = yPos < yPosPrev ? 'up' : 'down';
		yPosPrev = yPos;
	}

	// UPDATE
	function update() {
		const bbox = textEl.getBoundingClientRect();
		updateDirection();

		const off = vh * offset;
		if (bbox.top < off && bbox.bottom > off) checkStep({ bbox, off });

		if (bbox.top < 0 && bbox.bottom > bboxGraphic.height) checkEnter();
		else checkExit();
		ticking = false;
	}

	// EVENTS
	function requestTick() {
		if (!ticking) window.requestAnimationFrame(update);
		ticking = true;
	}

	function handleScroll() {
		yPos = window.scrollY;
		if (!ticking) requestTick();
	}

	function handleResize() {
		vh = window.innerHeight;
		bboxGraphic = graphicEl ? graphicEl.getBoundingClientRect() : null;
	}

	function handleEnable(enable) {
		if (enable && isDisabled) {
			window.addEventListener('scroll', handleScroll, true);
		} else if (!enable) {
			window.removeEventListener('scroll', handleScroll, true);
		}

		isDisabled = !enable;
	}

	const scrolly = {};

	scrolly.setup = params => {
		graphicEl = select(params.graphic);
		textEl = select(params.text);
		stepEl = selectAll(params.step);
		offset = 1 - params.offset;
		numSteps = stepEl.length;
		window.addEventListener('scroll', handleScroll, true);
		handleResize();
		handleScroll();
		update();
		return scrolly;
	};

	scrolly.resize = () => {
		handleResize();
		return scrolly;
	};

	scrolly.enable = () => {
		handleEnable(true);
		return scrolly;
	};

	scrolly.disable = () => {
		handleEnable(false);
		return scrolly;
	};

	scrolly.onStep = cb => {
		callback.step = cb;
		if (notification.step) {
			callback.step(notification.step);
			notification.step = null;
		}
		return scrolly;
	};

	scrolly.onProgress = cb => {
		callback.progress = cb;
		if (notification.progress) {
			callback.progress(notification.progress);
			notification.progress = null;
		}
		return scrolly;
	};

	scrolly.onEnter = cb => {
		callback.enter = cb;
		if (notification.enter) {
			callback.enter(notification.enter);
			notification.enter = null;
		}
		return scrolly;
	};

	scrolly.onExit = cb => {
		callback.exit = cb;
		if (notification.exit) {
			callback.exit(notification.exit);
			notification.exit = null;
		}
		return scrolly;
	};

	return scrolly;
}

export default init;
