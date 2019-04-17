# The Pudding Starter Template

A starter template for projects.

**If creating a brand new project from scratch:** Follow setup [instructions](#setup).

**Else contributing to an existing project:** clone the repo andd run `npm install`).

_Please note: do not use or reproduce The Pudding logos or fonts without written permission._

## Setup

### Dependencies

- [node](http://nodejs.org)

### Features

- [Parcel](http://parceljs.org) for JS bundling
- [Stylus](http://stylus-lang.com/) for CSS pre-processing
- [Handlebars](http://handlebarsjs.com/) for HTML templating
- [ArchieML](http://archieml.org/) for micro-CMS (Google Docs -> JSON)
- [Feather](https://feathericons.com/) for preset icons
- Google Sheets -> JSON
- Minifies, auto-prefixes, and inlines CSS
- Inlines SVG
- Async font loading (using `font-display`)

### Usage

Use the [starter CLI](https://github.com/the-pudding/starter-cli).

### Usage (deprecated)
To create a new project, make a new directory (eg. `mkdir project-name`), `cd` into it, and run:

```
curl -Lk https://bit.ly/2J0L3MD > Makefile; make setup;
```

#### Documentation

See the generated [README](https://github.com/polygraph-cool/starter/blob/master/README.story.md#development) file in the new project directory for instructions.
