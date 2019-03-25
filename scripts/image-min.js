const imagemin = require('imagemin');
const imageminMozjpeg = require('imagemin-mozjpeg');
const imageminPngquant = require('imagemin-pngquant');

async function run(dir) {
  const input = [`dist/assets/${dir}/*.{jpg,png}`];
  const output = `${dir}`;
  await imagemin(input, output, {
    plugins: [
      imageminMozjpeg({
        quality: 80
      }),
      imageminPngquant()
    ]
  });
}

run('social').then(() => run('images'));
