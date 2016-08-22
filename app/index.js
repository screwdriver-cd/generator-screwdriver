'use strict';
const gitLabel = require('git-label');
const oldLabels = require('./defaults/old-labels.json');
const newLabels = require('./defaults/new-labels.json');
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
            },
            {
                type: 'password',
                name: 'token',
                message: 'Github Token'
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

    removeDefaultLabels: function removeDefaultLabels() {
        const config = {
            api: 'https://api.github.com',
            repo: `screwdriver-cd/${this.props.name}`,
            token: this.props.token
        };

        // remove default labels from a repo
        gitLabel.remove(config, oldLabels);
    },

    addLabels: function addLabels() {
        const config = {
            api: 'https://api.github.com',
            repo: `screwdriver-cd/${this.props.name}`,
            token: this.props.token
        };

        // add specified labels to a repo
        gitLabel.add(config, newLabels);
    },

    install: function install() {
        this.installDependencies();
    }
});
