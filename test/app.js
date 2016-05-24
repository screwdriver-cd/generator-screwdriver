'use strict';
const path = require('path');
const assert = require('yeoman-assert');
const helpers = require('yeoman-test');

describe('generator-screwdriver:app', () => {
    before(() => helpers.run(path.join(__dirname, '../app'))
            .withPrompts({
                name: 'foo-bar',
                display: 'Foo Bar',
                author: 'Robot Man',
                email: 'robot@example.com',
                description: 'Long name for a module',
                wercker: '12345678901234567890123456789012'
            })
            .toPromise()
    );

    it('creates files', () => {
        assert.file([
            '.gitignore',
            '.eslintrc.yaml',
            '.eslintignore',
            'index.js',
            'LICENSE',
            'CONTRIBUTING.md',
            'package.json',
            'README.md',
            'wercker.yml',
            'test/index.test.js'
        ]);
    });
});
