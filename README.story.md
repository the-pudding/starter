# Development

Run `gulp` to fire up the project server.

Any changes to the `src/` folder will trigger live reload.

## JavaScript

**Where it goes:** `src/js/`

Take a look at `entry.js`. This is the kickoff file, the only one included and run automatically.

Then take a look at `graphic.js`, it has some basic skeleton stuff setup for you. This is imported and called from `entry.js` once on load, and subsequently on a debounced resize event. I recommend putting your code in here. If you want to create more files, I recommending doing that in `graphic.js`, but remember they won't be executed until you import them.

[D3 Jetpack](https://github.com/gka/d3-jetpack/) is included globally by default. For any other libraries, it is recommend that you use `npm` to install and import them. You can also do it the vanilla way by including them in the `src/assets` folder and putting a script tag in the HTML.

The JavaScript is transpiled from ES6, and uses Webpack to bundle into a single file. That means each file creates its own closure, so a "global" variable is scoped to a file unless you declare it as `window.variable = ....`.

#### JavaScript Utilties

In the folder `src/js/utils` there a are a bunch of handy helper JS functions.

* `dom.js`: Super minimial wrapper on basic vanilla dom selection for convenience and cross-browser.
* `is-mobile.js`: Device sniffing to detect if on mobile hardware.
* `load-image.js`: Async image loading to detect when image completely loaded.
* `locate.js`: Estimate user location via ip address.
* `tracker.js`: Fire simple GA tracking on events.
* `url-parameter.js`: Get and set the paremeters of the URL in address bar.

#### The Pudding's Favorite Libraries

* [d3-annotation](http://d3-annotation.susielu.com/)
* [lodash](https://lodash.com/)
* [moveto](https://github.com/hsnaydd/moveTo)
* [jump.js](http://callmecavs.com/jump.js/)
* [nouislider](https://refreshless.com/nouislider/)
* [geolib](https://github.com/manuelbieh/geolib)
* [scrollama](https://github.com/russellgoldenberg/scrollama)
* [ScrollWatch](https://edull24.github.io/ScrollWatch/)

## CSS

**Where it goes:** `src/css/story/`.

There is a file for you to start off with, `story.styl`. You can create as many files as you want in this directory, they are automatically included.

Checkout some of the auto-included files in `src/css/utils/` (`variables.styl`, `helpers.styl`, `presets.styl`). You can modify these, especially `variables.styl`.

## HTML

**Where it goes:** `src/html/partials/story/`.

The main HTML file ins `src/html/index.hbs`. Generally speaking, You should mostly just include new partials in there and not modify too much of it since there are a bunch of presets.

Partials are not automatically included. You must add them to `index.hbs`. If you created a new file `content.hbs` it would be referenced as `{{> story/content }}`.

### Metadata

Fill out `template-data/info.json`

### Copy

Using a Google Doc for copy is recommended. We use [ArchieML](http://archieml.org) as a micro CMS.

**Setup Google Doc**

* Create a Google Doc
* Click `Share` button -> advanced -> Change... -> to "Anyone with this link"
* In the address bar, grab the ID - eg. ...com/document/d/ **1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0**/edit
* In the file `config.js` in root of project, paste in the ID

Running `gulp fetch-google` at any point (even in new tab while server is running) will pull down the latest, and output a file `template-data/copy.json`.

You can now reference the JSON in your HTML, namespaced by `copy` (eg. `<h1>{{copy.title}}</h1>`).

### SVG Icons

There is a directory called `svg` in the root of project, it contains a bunch of [icons](https://feathericons.com/). To include them in the HTML, simply do this:

`<div>@@include('arrow-left.svg')</div>`

This way you can drop in svg icons anywhere in your HTML code whilst keeping it uncluttered.

## Deploy

Run `gulp dist`

This generates a single html file with inlined css, a single js file, and a folder with assets in the `dist` folder.

**Update Github Pages version (during development)**
Run `make github` (make sure you've enabled github pages in your repo settings to pull from `docs`).

**Update The Pudding version (launch)**

Requirements:

* [awscli](https://aws.amazon.com/cli/)
* [configure aws](http://docs.aws.amazon.com/cli/latest/reference/configure/index.html)
* [configure cloud](http://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-invalidation.html).

In `Makefile`, replace `year/month/name` with your own (eg. `2017/01/nba`). Uncomment code.

Run `make live` to deploy and bust cache.
