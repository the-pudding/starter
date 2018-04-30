# The Pudding Starter Template

A starter template for projects.

**If creating a brand new project from scratch:** Follow setup instructions for the [basic](#basic):bread: (plain HTML/JS/CSS) or [enhanced](#enhanced):fire: (node + gulp + awesome sauce) version.

**Else contributing to an existing project:** clone the repo (enhanced version: + run `npm install`).

_Please note: do not use or reproduce The Pudding logos or fonts without written permission._

# Setup

## Enhanced

#### Dependencies

* [node](http://nodejs.org)
* [gulp](http://gulpjs.com)

#### Features

* Transpiles ES6 with [Babel](http://babeljs.io)
* [Stylus](http://stylus-lang.com/) for CSS pre-processor
* [Handlebars](http://handlebarsjs.com/) for HTML templating
* Google Docs -> JSON (with [ArchieML](http://archieml.org/)) integration for a micro CMS
* Bundles and minifies JavaScript with [Webpack](http://webpack.js.org)
* Bundles, minifies, auto-prefixes, and inlines CSS
* Async font loading (using FOUT)
* Preloaded [icon set](https://feathericons.com/)

#### Setup

To create a new project, make a new directory (eg. `mkdir project-name`), `cd` into it, and run:

```
curl -Lk http://bit.ly/2bgptna > Makefile; make enhanced;
```

#### Documentation

See the generated [README](https://github.com/polygraph-cool/starter/blob/master/README.story.md#development) file in the new project directory for instructions.

## Basic

#### Setup

To create a new project, make a new directory (eg. `mkdir project-name`), `cd` into it, and run:

```
curl -Lk http://bit.ly/2bgptna > Makefile; make boilerplate;
```
