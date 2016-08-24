// device sniffing for mobile

const isMobile = {
	android: () => navigator.userAgent.match(/Android/i),

	blackberry: () => navigator.userAgent.match(/BlackBerry/i),

	ios: () => navigator.userAgent.match(/iPhone|iPad|iPod/i),

	opera: () => navigator.userAgent.match(/Opera Mini/i),

	windows: () => navigator.userAgent.match(/IEMobile/i),

	any: () => (
		isMobile.android() ||
		isMobile.blackberry() ||
		isMobile.ios() ||
		isMobile.opera() ||
		isMobile.windows()
	),
}

export default isMobile
