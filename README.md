# starter

A starter template for projects. Features include:

* Transpiles ES6 with [Babel](http://babeljs.io)
* [Stylus](http://stylus-lang.com/) for CSS pre-processor
* Bundles and minifies JavaScript with [FuseBox](http://fuse-box.org)
* Bundles, minifies, auto-prefixes, and inlines CSS
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
Run `gulp dist`

This generates a single html file with inlined css, a single js file, and a folder with assets in the **dist** folder.

To deploy new dev version on github run `make github`

To deploy live to s3, you must install [awscli](https://aws.amazon.com/cli/) and [configure](http://docs.aws.amazon.com/cli/latest/reference/configure/index.html) your settings. Then run the following, replacing  `year/month/name` with your own (eg. `2017/01/nba`):

`aws s3 sync dist s3://pudding.cool/year/month/name --delete`

To force cloudfront to fetch latest html file (replacing `id-here` with the cloudfront distro id, and `year/month/name` with your project filepath):

`aws cloudfront create-invalidation --distribution-id id-here --paths /year/month/name/`

*Note*: For cloudfront you must add [extra configuration](http://docs.aws.amazon.com/cli/latest/reference/cloudfront/create-invalidation.html)

#### Fonts
Our serif font is [Mercury](https://typography.com/fonts/mercury-text/styles/screensmart/) and our sans-serif is [Whitney](https://typography.com/fonts/whitney/styles/screensmart/). We have two weights, *400* and *700*, and normal and italic.

It is recommended to use html markup (`em` and `strong`) to apply weighting and styling. The proper css is already applied.
