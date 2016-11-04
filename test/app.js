'use strict';

const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-screwdriver:app', function () {
    this.timeout(3000);

    before(() => helpers.run(path.join(__dirname, '../app'))
            .withPrompts({
                name: 'foo-bar',
                display: 'Foo Bar',
                author: 'Robot Man',
                email: 'robot@example.com',
                description: 'Long name for a module'
            })
            .toPromise()
    );

    it('creates files', () => {
        assert.file([
            '.gitignore',
            '.npmignore',
            '.eslintrc.yaml',
            '.eslintignore',
            'index.js',
            'LICENSE',
            'CONTRIBUTING.md',
            'package.json',
            'README.md',
            'test/index.test.js',
            'test/.eslintrc.yaml',
            'screwdriver.yaml'
        ]);
    });
});
