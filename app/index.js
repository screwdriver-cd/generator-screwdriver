'use strict';

const gitLabel = require('git-label');
const oldLabels = require('./defaults/old-labels.json');
const newLabels = require('./defaults/new-labels.json');
const Yeoman = require('yeoman-generator');

module.exports = class extends Yeoman {
    prompting() {
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
                type: 'password',
                name: 'token',
                message: 'Github Token'
            }
        ];

        return this.prompt(prompts).then((props) => {
            this.props = props;
        });
    }

    writing() {
        [
            '.gitignore',
            '.npmignore',
            '.editorconfig',
            '.eslintrc.yaml',
            '.eslintignore',
            'index.js',
            'CONTRIBUTING.md',
            'LICENSE',
            'test/index.test.js',
            'test/.eslintrc.yaml',
            'screwdriver.yaml'
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
    }

    removeDefaultLabels() {
        const config = {
            api: 'https://api.github.com',
            repo: `screwdriver-cd/${this.props.name}`,
            token: this.props.token
        };

        // remove default labels from a repo
        gitLabel.remove(config, oldLabels);
    }

    addLabels() {
        const config = {
            api: 'https://api.github.com',
            repo: `screwdriver-cd/${this.props.name}`,
            token: this.props.token
        };

        // add specified labels to a repo
        gitLabel.add(config, newLabels);
    }

    install() {
        this.installDependencies();
    }
};
