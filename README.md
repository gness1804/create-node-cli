# @gness1804/create-node-cli

> A scaffolding tool to create production-ready Node CLIs.

## Why

This is a handy tool to create new Node.js CLIs. It allows a user to quickly create a production-ready Node.js app with a standard file structure. It seeks to strike a balance between being opinionated on some important issues and letting the user architect the project as they see fit. Of course, what is generated can be modified as desired.

This package is based on Ahmad Awais's [npm package of the same name](https://www.npmjs.com/package/create-node-cli). It contains the features of the original app plus a few new goodies:

- Select your preferred package manager (npm or yarn).
- Support for [ESlint](https://eslint.org/) as well as [Prettier](https://prettier.io/), including package.json scripts and config files with sensible defaults.
- Generates a README.md template that includes important points for a production release.
- Allows user to choose a Node version to include in a `.nvmrc` file.
- Written using ESM. (*Coming soon: ability for user to choose to generate a CLI using either ESM or CommonJS*).

## Install

```
npm install -g @gness1804/create-node-cli OR yarn add @gness1804/create-node-cli
OR
npx @gness1804/create-node-cli
```

## Usage
Run the CLI using:
```bash
npx @gness1804/create-node-cli

# global install:
create-node-cli
# alias for global install:
ncli
```

#### BASIC USAGE

```sh
create-node-cli <command> [option]
```

#### COMMANDS

```sh
help  Print help info.
```

#### OPTIONS

```sh
-d, --debug    Print debug info Default: false
-v, --version  Print CLI version Default: false
```

## Changelog

[❯ Read the changelog here →](changelog.md)
