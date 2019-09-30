* [Development](#development)
  * [HTML](#html)
    * [Sticky Header](#sticky-header)
    * [Metadata](#metadata)
    * [Analytics](#analytics)
    * [Copy](#copy)
    * [SVG Icons](#svg-icons)
  * [JavaScript](#javascript)
    * [Installing Libraries](#installing-libraries)
    * [Helper Functions](#helper-functions)
    * [Slider](#slider)
    * [Google Sheet](#google-sheet)
  * [CSS](#css)
  * [Fonts](#fonts)
  * [Assets](#assets)
* [Deploy](#deploy)
  * [Github Pages](#github-pages)
  * [S3](#s3)
  * [Launch Checklist](#launch-checklist)
 * [Future Proofing](#future-proofing)

# Development

Run `npm start` to fire up the project server. `control + c` to stop.

Any changes to the `src/` folder will trigger live reload.

## HTML

**Where it goes:** `src/html/partials/story/`.

The main HTML file is `src/html/index.hbs`. Generally speaking, You should mostly just include new partials in there and not modify too much of it since there are a bunch of presets.

Partials are not automatically included. You must add them to `index.hbs`. If you created a new file `content.hbs` it would be referenced as `{{> story/content }}`.

#### Sticky Header

Change `base/header` in `index.hbs`:

- `{{> base/header 'sticky' }}`
- `{{> base/header 'sticky-dark' }}`

To use the menu but without it being sticky, simply changed `position fixed` to `position absolute` in `header.styl`.

To add in the patreon message and list, uncomment `{{> base/patrons }}` in `sticky.hbs`. Running `npm run doc` will update to latest patrons.

#### Metadata

Fill out `data/meta.json`

##### Analytics

For The Pudding analytics use `UA-90567923-1`.

#### Copy

Using a Google Doc for copy is recommended. We use [ArchieML](http://archieml.org) as a micro CMS.

**Setup Google doc**

- Create a Google Doc
- Click `Share` button -> advanced -> Change... -> to "Anyone with this link"
- In the address bar, grab the ID - eg. ...com/document/d/**1IiA5a5iCjbjOYvZVgPcjGzMy5PyfCzpPF-LnQdCdFI0**/edit
- paste in the ID above into `config.json`

Running `npm run doc` at any point (even in new tab while server is running) will pull down the latest, and output a file `data/doc.json`.

You can now reference the JSON in your HTML, namespaced by `doc` (eg. `<p>{{doc.explanation}}</p>`).

You can also do the same with a [Google Sheet](#google-sheet).

#### SVG Icons

There is a directory called `svg` in the root of project, it contains a bunch of [icons](https://feathericons.com/). To include them in the HTML, simply do this:

`<img inline src='arrow-left.svg'>`

This way you can drop in svg icons anywhere in your HTML code whilst keeping it uncluttered.

## JavaScript

**Where it goes:** `src/js/`

Take a look at `main.js`. This is the kickoff file, the only one included and run automatically.

Then take a look at `graphic.js`, it has some basic skeleton stuff setup for you. This is imported and called from `main.js` once on load, and subsequently on a debounced resize event. I recommend putting your code in here. If you want to create more files, I recommending doing that in `graphic.js`, but remember they won't be executed until you import them.

[D3](https://d3js.org/) is included globally by default. For any other libraries, it is recommend that you use `npm` to install and import them. You can also do it the vanilla way by including them in the `src/assets` folder and putting a script tag in the HTML.

The JavaScript is transpiled from ES6, and uses Parcel to bundle into a single file. That means each file creates its own closure, so a "global" variable is scoped to a file unless you declare it as `window.variable = ....`.

#### Installing Libraries

**NPM way**:
`npm install [name] --save`.
Usage: (see library docs, but usually) `import [library] from '[library]'`

**Old school**:
Put JS file in the `src/assets/scripts` directory.
Usage: reference in the `index.hbs` file `<script src='assets/scripts/[name].js'></script>`

#### Helper Functions

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

To use these, at the top of your `.js` file, include
`import functionName from './utils/useful-thing.js'`

If there is only one exported function, you can use it in your file with just `functionName()`. Otherwise, you'll need `functionName.specificFunction()`.

#### Slider

NoUISlider is included by default, with some preset pudding styles. To include it, simply include the library in your JS file `import noUiSlider from 'nouislider'`. Then in `src/css/config.styl`, uncomment `no-ui-slider.styl`.

#### Google Sheet

You can pull down a Google Sheet to JSON to include in your JS, or use for templating HTML. Make the sheet sharable, then fill out `config.json` with the details. By default it will be the file in `data/sheet.json` which you could use for HTML. You can have it save anywhere by supplying a custom filepath (eg. `src/js/example.json` or `src/assets/data/example.json`).

## CSS

**Where it goes:** `src/css/story/`.

There is a file for you to start off with, `story.styl`. You can create as many files as you want in this directory, they are automatically included. *Note: You must restart the server when you create a new stylus file.*

Checkout some of the auto-included files in `src/css/utils/` (`variables.styl`, `helpers.styl`, `presets.styl`). You can modify these, especially `variables.styl`.

## Fonts

Fonts are loaded async and use the `font-display swap` CSS setting.

- **Tiempos Text** (default `body` font)
- **Tiempos Headline** (disabled by default)
- **National**
- **National Narrow**
- **Publico Text** (disabled by default)
- **Atlas Grotesk** (disabled by default)

Available font-weights (bold means it is loaded by default):

- Tiempos Text: **500**, **700**
- Tiempos Headline: 500
- National: **500**, **700**
- National Narrow: 200, **500**, **700**, 900
- Publico: 400, 700
- Atlas: 400, 500, 600

Variable names in stylus (use these for `font-family` since they contain proper fallbacks):

- **Tiempos Text**: `$serif`
- **Tiempos Headline** `$serif-display`
- **National** `$sans`
- **National Narrow** `$sans-display`

## Assets

Put everything (images, audio, data, etc) in `src/assets/`.

When deployed, assets paths will remain relative. _However_, you'll notice that in `index.hbs` there is a line like `<script src='{{basepath}}assets/scripts/d3.v5.9.1.min.js'></script>`. `basepath` here switches from nothing in local development, to `https://pudding.cool/` in production. We have a common assets folder for stuff like (which also occurs with fonts). If you need to use this project for a non-Pudding one, make sure to update the `data.basepath` variable in `scripts/html.js`.

# Deploy

Run `npm run deploy`

This generates a single html file with inlined css, a single js file, and a folder with assets in the `dist` folder. It also will automatically optimize jpg and png files in the folders `assets/social` and `assets/images`.

## Github Pages

Run `make github` (make sure you've enabled github pages in your repo settings to pull from `docs`).

## S3

Requirements:

- [awscli](https://aws.amazon.com/cli/)
- [configure aws](http://docs.aws.amazon.com/cli/latest/reference/configure/index.html)
- [configure cloud](http://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-invalidation.html)

In `Makefile`, replace `year/month/name` with your own (eg. `2017/01/nba`). Uncomment code.

Run `make pudding` to deploy and bust cache. If you only made changes to html/css/js, you can run `make aws-htmljs` then `make aws-cache` (it will be much quicker than re-uploading all your assets).

## Launch Checklist

- clean data: reduce filesize bloat by making sure you aren't loading unnecessary columns and rows.
- remove console logs: aesthetics :smile:
- enable anayltics: put `UA-90567923-1` in `data/meta.json`
- fill out metadata: `data/meta.json`
- create two social images:
  - Facebook: 1200 x 628 (`src/assets/social/social-facebook.jpg`)
  - Twitter: 1024 x 576 (`src/assets/social/social-twitter.jpg`)
- Before launching, test the final pudding link in [Facebook Debugger](https://developers.facebook.com/tools/debug/sharing) to ensure all og tags are working properly.
- Create Twitter asset:
  - Motion works well on Twitter, so when possible use a scrolling video of the story (.MP4)
  - Tweets should always include some sort of visual asset
  - For one image: 1024 x 576 px
  - if you're sharing multiple images in a post, adjust them to twitter's thumbnail formats — previewed thumbnails have a different aspect ratio (1:1) other than the standard twitter social cards (2:1)
  - Add description of photo or video for accessibility purposes
  - Make sure to include the link
  - Include author/contributor Twitter handle in initial story post
  - Use of emojis is encouraged! 🤠
- Create Instagram Story Asset
  - Portrait aspect ratio (1080 x 1920)
  - Text can be added in Instagram
  - These tend to be more insightful/personal than an initial post
  - Make sure to indicate that the link is in our bio
  - Feel free to experiment here!
  - You can add polls and questions to ask the audience (in stickers)
  - You can tag people here (especially if they are talking about us)
- Create Instagram Feed Asset
  - Square Images (1080 x 1080) or Videos
  - Make sure to change the link & bio description for new story
  - Emojis are encouraged
  - Hashtags are encouraged. Feel free to use #data #dataviz #ddj #datajournalism #chart #charts
  - Include other hashtags that may be relevant to the specific story
  - Tag people in the image if they are relevant
  - Keep in mind that you can only add one caption (even if there is a carousel of images)
  - The images in the carousel all have to be the same aspect ratio
  - No need to tag authors here
- Post to Patreon (Author posts)
- Post to FotP (Author posts)
- Add data to open data repo (with necessary metadata, scripts when possible)
- Record Process video and post to FotP/Patreon (optional)
- Make sure repo is on the-pudding
- Update s3
- Update homepage
- Release assets - author can tap the promotion team to post assets, but otherwise expected that authors post.





# Future Proofing
Here are some best practices to follow to increase the likelihood that the story doesn't break in the near future.

- When possible, host assets locally. Put things like images and audio in your project rather than loading from a third party.
- Don't rely on externally hosted scripts. If you are using a library, use `npm` or self-host in favor of externally hosted scripts.
