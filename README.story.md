# Development

Run `gulp` to fire up the project server.

Any changes to the `src/` folder will trigger live reload.

#### Device testing

To view local dev link on a mobile device connected to same network, update the option to `online: true` in `gulp-tasks/browser-sync.js`. Then after you run `gulp`, grab the url from the terminal and you're good to go.

## HTML

**Where it goes:** `src/html/partials/story/`.

The main HTML file is `src/html/index.hbs`. Generally speaking, You should mostly just include new partials in there and not modify too much of it since there are a bunch of presets.

Partials are not automatically included. You must add them to `index.hbs`. If you created a new file `content.hbs` it would be referenced as `{{> story/content }}`.

#### Sticky header with menu

Change `base/header` in `index.hbs`:

- `{{> base/header 'sticky' }}`
- `{{> base/header 'sticky-dark' }}`

#### Metadata

Fill out `template-data/meta.json`

##### Analytics

For The Pudding analytics use `UA-90567923-1`.

#### Copy

Using a Google Doc for copy is recommended. We use [ArchieML](http://archieml.org) as a micro CMS.

**Setup Google doc**

- Create a Google Doc
- Click `Share` button -> advanced -> Change... -> to "Anyone with this link"
- In the address bar, grab the ID - eg. ...com/document/d/**1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0**/edit
- In the file `config.json` in root of project, paste in the ID

Running `gulp fetch-google` at any point (even in new tab while server is running) will pull down the latest, and output a file `template-data/copy.json`.

You can now reference the JSON in your HTML, namespaced by `copy` (eg. `<p>{{copy.explanation}}</p>`).

#### SVG icons

There is a directory called `svg` in the root of project, it contains a bunch of [icons](https://feathericons.com/). To include them in the HTML, simply do this:

`<div>@@include('arrow-left.svg')</div>`

This way you can drop in svg icons anywhere in your HTML code whilst keeping it uncluttered.

## JavaScript

**Where it goes:** `src/js/`

Take a look at `entry.js`. This is the kickoff file, the only one included and run automatically.

Then take a look at `graphic.js`, it has some basic skeleton stuff setup for you. This is imported and called from `entry.js` once on load, and subsequently on a debounced resize event. I recommend putting your code in here. If you want to create more files, I recommending doing that in `graphic.js`, but remember they won't be executed until you import them.

[D3 Jetpack](https://github.com/gka/d3-jetpack/) is included globally by default. For any other libraries, it is recommend that you use `npm` to install and import them. You can also do it the vanilla way by including them in the `src/assets` folder and putting a script tag in the HTML.

The JavaScript is transpiled from ES6, and uses Webpack to bundle into a single file. That means each file creates its own closure, so a "global" variable is scoped to a file unless you declare it as `window.variable = ....`.

#### Installing libraries

**NPM way**:
`npm install [name] --save`.
Usage: (see library docs, but usually) `import [library] from '[library]'`

**Old school**
Put JS file in the `src/assets/scripts` directory.
Usage: reference in the `index.hbs` file `<script src='assets/scripts/[name].js'></script>`

#### JavaScript utilties

In the folder `src/js/utils` there a are a bunch of handy helper JS functions.

- `dom.js`: Super minimial wrapper on basic vanilla dom selection for convenience and cross-browser.
- `is-mobile.js`: Device sniffing to detect if on mobile hardware.
- `load-image.js`: Async image loading to detect when image completely loaded.
- `locate.js`: Estimate user location via ip address.
- `truncate.js`: Truncate string with options to break on space and add ellipses.
- `url-parameter.js`: Get and set the paremeters of the URL in address bar.
- `lookup-state-name.js`: Get state name from state abbrevation.
- `lookup-state-abbr.js`: Get state abbrevation from state name.
- `tracker.js`: Fire simple GA tracking on events.

#### The Pudding's favorite libraries

- [d3-annotation](http://d3-annotation.susielu.com/)
- [lodash](https://lodash.com/)
- [moveto](https://github.com/hsnaydd/moveTo)
- [jump.js](http://callmecavs.com/jump.js/)
- [nouislider](https://refreshless.com/nouislider/)
- [geolib](https://github.com/manuelbieh/geolib)
- [scrollama](https://github.com/russellgoldenberg/scrollama)
- [ScrollWatch](https://edull24.github.io/ScrollWatch/)

NoUISlider is included by default, with some preset pudding styles. To include it, simply include the library in your JS file `import noUiSlider from 'nouislider'`. Then in `src/css/config.styl`, uncomment `no-ui-slider.styl`.

## CSS

**Where it goes:** `src/css/story/`.

There is a file for you to start off with, `story.styl`. You can create as many files as you want in this directory, they are automatically included.

Checkout some of the auto-included files in `src/css/utils/` (`variables.styl`, `helpers.styl`, `presets.styl`). You can modify these, especially `variables.styl`.

## Fonts

Fonts are loaded async and use the [FOUT](https://www.zachleat.com/web/comprehensive-webfonts/#fout-class) practice. We have three font families:

- **Canela** (class name: `tk-canela`)
- **Publico** (class name: `tk-publico`)
- **Atlas Grotesk** (class name: `tk-atlas`)

Simply include the class on the element, and all children will inherit it. Publico is included on the body tag by default.

Example:

```html
<div class='example'>
	<p class='tk-atlas'>test</p>
</div>
```

Use the **font-weight** CSS property. Available weights:

- Canela: 300, 700
- Publico: 400, 700
- Atlas: 400, 500, 600

## Assets

**Where it goes:** `src/assets/`

I reccommend creating separate directories for images, data, etc. Assets can always be referenced relative to `assets` directory. For example:

- `<img src='assets/img/test.jpg'>`
- `d3.csv('assets/data/test.csv')`

When deployed, assets paths will remain relative. _However_, you'll notice that in `index.hbs` there is a line that like `<script src='{{basepath}}assets/scripts/d3.v4.12.0+jetpack.min.js'></script>`. `basepath` here switches from nothing in local development, to `https://pudding.cool/` in production. We have a common assets folder for stuff like (which also occurs with fonts). If you need to use this project for a non-pudding one, make sure to update the `basepath` variable in `gulp-tasks/html.js`.

## Deploy

Run `gulp dist`

This generates a single html file with inlined css, a single js file, and a folder with assets in the `dist` folder.

**Update Github pages version (during development)**

Run `make github` (make sure you've enabled github pages in your repo settings to pull from `docs`).

**Update The Pudding version (launch)**

Requirements:

- [awscli](https://aws.amazon.com/cli/)
- [configure aws](http://docs.aws.amazon.com/cli/latest/reference/configure/index.html)
- [configure cloud](http://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-invalidation.html).

In `Makefile`, replace `year/month/name` with your own (eg. `2017/01/nba`). Uncomment code.

Run `make pudding` to deploy and bust cache. If you only made changes to html/css/js, you can run `make aws-htmljs` then `make aws-cache` (it will be much quicker than re-uploading all your assets).

## Pre-launch checklist

- optimize images: make sure they aren't unncessarily large in dimensions (should be no more than 2x their final rendered dimensions), should also crunched with something like [imageoptim](https://imageoptim.com/online).
- clean data: reduce filesize bloat by making sure you aren't loading unnecessary columns and rows.
- remove console logs: aesthetics :smile:
- enable anayltics: put `UA-90567923-1` in `template-data/meta.json`
- fill out metadata: `template-data/meta.json`
- create two social images:
  * Facebook: 1200 x 628 (`src/assets/social/social-facebook.jpg`)
  * Twitter: 1024 x 576 (`src/assets/social/social-twitter.jpg`)
