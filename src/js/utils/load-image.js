function loadImage(url, cb) {
	const img = new Image()
	img.onload = () => cb(null, img)
	img.onerror = () => cb(`error loading image: ${url}`)
	img.src = url
}

export default loadImage
