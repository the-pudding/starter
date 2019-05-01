const rimraf = require('rimraf');
const replace = require('replace-in-file');

// basepath
replace.sync({
  files: './scripts/html.js',
  from: 'https://pudding.cool/',
  to: '',
});

// meta
replace.sync({
  files: './data/meta.json',
  from: /https:\/\/pudding\.cool/g,
  to: 'https://site.com',
});

replace.sync({
  files: './data/meta.json',
  from: /The Pudding/g,
  to: '',
});

replace.sync({
  files: './data/meta.json',
  from: '@puddingviz',
  to: '',
});

// remove footer
replace.sync({
  files: './src/html/index.hbs',
  from: '{{> base/footer }}',
  to: '',
});

// remove header
replace.sync({
  files: './src/html/index.hbs',
  from: "{{> base/header 'sticky' }}",
  to: '',
});

// main.js
replace.sync({
  files: './src/js/main.js',
  from: "import footer from './footer';",
  to: "// import footer from './footer';",
});

replace.sync({
  files: './src/js/main.js',
  from: 'setupStickyHeader();',
  to: '// setupStickyHeader();',
});

replace.sync({
  files: './src/js/main.js',
  from: 'footer.init();',
  to: '// footer.init();',
});

// variables.styl
replace.sync({
  files: './src/css/base/variables.styl',
  from: '$sans = $national, $sans-fb',
  to: '$sans = $sans-fb',
});

replace.sync({
  files: './src/css/base/variables.styl',
  from: '$sans-display = $national-narrow, $sans-fb',
  to: '$sans-display = $sans-fb',
});

replace.sync({
  files: './src/css/base/variables.styl',
  from: '$serif = $tiempos, $serif-fb',
  to: '$serif = $serif-fb',
});

replace.sync({
  files: './src/css/base/variables.styl',
  from: '$serif-display = $tiempos-hed, $serif-fb',
  to: '$serif-display = $serif-fb',
});

// remove fonts from assets
rimraf('./src/assets/fonts', process.exit);
