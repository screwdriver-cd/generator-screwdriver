# generator-screwdriver
[![Version][npm-image]][npm-url] ![Downloads][downloads-image] [![Build Status][status-image]][status-url] [![Open Issues][issues-image]][issues-url] [![Dependency Status][daviddm-image]][daviddm-url] ![License][license-image]

> Yeoman generator for building Screwdriver Node Modules

This Yeoman generator creates a new npm module pre-loaded with:
 - License
 - README with a variety of badges
 - CONTRIBUTING doc
 - JSCS and JSHint configs
 - Screwdriver config
 - package.json
 - Labels for Github issues and pull requests

## Prerequisites

- [Node.js](https://nodejs.org/) >= v8.0.0 (with NPM)

## Usage

1. Create a Github repository.

2. Install [Yeoman](http://yeoman.io) and generator-screwdriver using [npm](https://www.npmjs.com/).

```bash
$ npm install -g yo
$ npm install -g generator-screwdriver
```

3. Get a Github token.
- Go to the create [Github Personal Access Tokens](https://github.com/settings/tokens/new) page
- Fill in "Token description" with "Screwdriver-token"
- Select scopes "repo" and "admin:org"
- Click Generate token

4. Clone your repository and generate your new project.

```bash
$ git clone git@github.com:$REPO.git
$ cd $REPO
$ yo screwdriver
```

5. Create Git commit and push to master.

6. Publish the npm package and add git tags.

```bash
$ npm publish
$ git tag v0.0.1 && git push origin --tags
```


## License

Code licensed under the BSD 3-Clause license. See LICENSE file for terms.

[npm-image]: https://img.shields.io/npm/v/generator-screwdriver.svg
[npm-url]: https://npmjs.org/package/generator-screwdriver
[downloads-image]: https://img.shields.io/npm/dt/generator-screwdriver.svg
[license-image]: https://img.shields.io/npm/l/generator-screwdriver.svg
[issues-image]: https://img.shields.io/github/issues/screwdriver-cd/screwdriver.svg
[issues-url]: https://github.com/screwdriver-cd/screwdriver/issues
[status-image]: https://cd.screwdriver.cd/pipelines/11/badge
[status-url]: https://cd.screwdriver.cd/pipelines/11
[daviddm-image]: https://david-dm.org/screwdriver-cd/generator-screwdriver.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/screwdriver-cd/generator-screwdriver
