/**
 * Load an image
 * @param {string} url path to image
 */

function loadImage(url) {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.onload = () => resolve(img);
    img.onerror = () => reject(`error loading ${url}`);
    img.src = url;
  });
}

export default loadImage;
