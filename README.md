# starter

A starter template for projects.

* Write in ES6
* Stylus for CSS pre-processor
* Bundles, minifies JS with Webpack
* Bundles, minifies, auto-prefixes CSS
* Inlines CSS and JS to a single html file

## Dependencies
[node](http://nodejs.org)

## Setup
Create a new project directory then:

```
curl -Lk http://bit.ly/2bgptna > Makefile; make;

```

## Usage

#### Development
`npm run start` and open `localhost:4000` in your browser.

Any changes to the **src** folder will trigger live reload.

Put JS in **src/js/entry.js** and CSS in **src/css/story/story.styl**.


#### Deploy
`npm run dist`

Generates a single html file and assets in the **dist** folder.

