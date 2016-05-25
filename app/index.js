'use strict';
const yeoman = require('yeoman-generator');

module.exports = yeoman.Base.extend({
    prompting: function prompting() {
        const prompts = [
            {
                type: 'input',
                name: 'name',
                message: 'Name (usually Git Repo name)',
                validate: function validate(name) {
                    return /^[a-z0-9-]+$/.test(name);
                }
            },
            {
                type: 'input',
                name: 'display',
                message: 'Display Name (for the README)'
            },
            {
                type: 'input',
                name: 'description',
                message: 'Description'
            },
            {
                type: 'input',
                name: 'author',
                message: 'Your Name',
                default: this.user.git.name()
            },
            {
                type: 'input',
                name: 'email',
                message: 'Email Address',
                default: this.user.git.email()
            },
            {
                type: 'input',
                name: 'wercker',
                message: 'Wercker Share Key',
                validate: function validate(key) {
                    return key.length === 32;
                }
            }
        ];

        return this.prompt(prompts).then((props) => {
            this.props = props;
        });
    },

    writing: function writing() {
        [
            '.gitignore',
            '.eslintrc.yaml',
            '.eslintignore',
            'index.js',
            'CONTRIBUTING.md',
            'LICENSE',
            'wercker.yml',
            'test/index.test.js'
        ].forEach((template) => {
            const from = /^\./.test(template) ? template.substr(1) : template;
            const to = template;

            this.fs.copy(
                this.templatePath(from),
                this.destinationPath(to)
            );
        });

        [
            'package.json',
            'README.md'
        ].forEach((template) => {
            this.fs.copyTpl(
                this.templatePath(template),
                this.destinationPath(template),
                this.props
            );
        });
    },

    install: function install() {
        this.installDependencies();
    }
});
