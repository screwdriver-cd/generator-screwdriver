# generator-screwdriver
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][status-image]][status-url] [![Open Issues][issues-image]][issues-url] [![Dependency Status][daviddm-image]][daviddm-url] ![License][license-image]

> Yeoman generator for building Screwdriver Node Modules

This Yeoman generator creates a new npm module pre-loaded with:
 - License
 - README with a variety of badges
 - Contributing doc
 - JSCS and JSHint configs
 - Wercker config with CD support
 - Labels for your Github issues and pull requests

## Usage

First, install [Yeoman](http://yeoman.io) and generator-screwdriver using [npm](https://www.npmjs.com/) (we assume you have pre-installed [node.js](https://nodejs.org/)).

```bash
npm install -g yo
npm install -g generator-screwdriver
```

Then generate your new project:

```bash
yo screwdriver
```

## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/generator-screwdriver.svg
[npm-url]: https://npmjs.org/package/generator-screwdriver
[downloads-image]: https://img.shields.io/npm/dt/generator-screwdriver.svg
[license-image]: https://img.shields.io/npm/l/generator-screwdriver.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/generator-screwdriver.svg
[issues-url]: https://github.com/screwdriver-cd/generator-screwdriver/issues
[status-image]: https://cd.screwdriver.cd/pipelines/1788286d20de6dfdcb8eb0335c00492bfd0dff40/badge
[status-url]: https://cd.screwdriver.cd/pipelines/1788286d20de6dfdcb8eb0335c00492bfd0dff40
[daviddm-image]: https://david-dm.org/screwdriver-cd/generator-screwdriver.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/screwdriver-cd/generator-screwdriver
