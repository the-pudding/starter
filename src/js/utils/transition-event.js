function whichTransitionEvent() {
	const el = document.createElement('fake');

	const transitions = {
		transition: 'transitionend',
		OTransition: 'oTransitionEnd',
		MozTransition: 'transitionend',
		WebkitTransition: 'webkitTransitionEnd'
	};

	for (const t in transitions) {
		if (el.style[t] !== undefined) return transitions[t];
	}

	return null;
}

const transitionEvent = whichTransitionEvent();
export default transitionEvent;
