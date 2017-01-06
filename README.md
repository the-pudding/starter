# starter

A starter template for projects.

* Write in ES6 (preset with d3)
* Stylus for CSS pre-processor
* Bundles, minifies JS with Webpack
* Bundles, minifies, auto-prefixes CSS
* Inlines CSS
* Async font loading (using FOUT)

## Dependencies
[node](http://nodejs.org)

## Setup
Create a new project directory and `cd` into it, then:

```
curl -Lk http://bit.ly/2bgptna > Makefile; make;
```

## Usage

#### Development
`gulp`

Any changes to the **src** folder will trigger live reload.

Put JS in **src/js/entry.js** and CSS in **src/css/story/story.styl**.

#### Deploy
<!-- * [custom d3 bundle](https://gist.github.com/russellgoldenberg/83b3a0973d8a04f208d72f2eb9f14dc1) -->

Run `gulp prod`

Generates a single html file and assets in the **dist/prod** folder.