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
Run `gulp prod`

Generates a single html file and assets in the **dist/prod** folder.

#### Fonts
Our serif font is [Mercury](https://typography.com/fonts/mercury-text/styles/screensmart/) and our sans-serif is [Whitney](https://typography.com/fonts/whitney/styles/screensmart/). We have two weights, *400* and *700*, and normal and italic.

Simply add the class `tk-mercury` or `tk-whitney` to any element. It will apply that font to all children. Apply one to the `body` tag to set your default font for the page.

It is recommended to use html markup (`em` and `strong`) to apply weighting and styling. The proper css is already applied.
