/* global before, describe, it */
'use strict';
let path = require('path');
let assert = require('yeoman-assert');
let helpers = require('yeoman-test');

describe('generator-screwdriver:app', function () {
    before(function () {
        return helpers.run(path.join(__dirname, '../app'))
            .withPrompts({
                name: 'foo-bar',
                display: 'Foo Bar',
                author: 'Robot Man',
                email: 'robot@example.com',
                description: 'Long name for a module',
                wercker: '12345678901234567890123456789012'
            })
            .toPromise();
    });

    it('creates files', function () {
        assert.file([
            '.gitignore',
            '.jscsrc',
            'index.js',
            'LICENSE',
            'CONTRIBUTING.md',
            'package.json',
            'README.md',
            'wercker.yml',
            'test/index.test.js',
        ]);
    });
});
