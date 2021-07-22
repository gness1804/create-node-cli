# @gness1804/create-node-cli

> A scaffolding tool to create production-ready Node CLIs.

<br />

## Why

This is a handy tool to create new Node.js CLIs. It allows a user to quickly create a production-ready Node.js app with a standard file structure. It seeks to strike a balance between being opinionated on some important issues and letting the user architect the project as they see fit. Of course, what is generated can be modified as desired.

This package is based on Ahmad Awais's [npm package of the same name](https://www.npmjs.com/package/create-node-cli). It contains most features of the original app plus a few new goodies:

- Select your preferred package manager (npm or yarn).
- Choose whether to generate your new module with ECMAScript Modules (ESM) or CommonJS.
- Support for [ESlint](https://eslint.org/) as well as [Prettier](https://prettier.io/), including package.json scripts and config files with sensible defaults.
- Generates a README.md template that includes important points for a production release.
- Allows user to choose a Node version to include in a `.nvmrc` file.
- Written using ESM.

<br />

## Install

```
npm install -g @gness1804/create-node-cli OR yarn global add @gness1804/create-node-cli
OR
npx @gness1804/create-node-cli
```

<br />

## Basic Usage

```sh
create-node-cli <command> [option]
ncli <command> [option]
```

### COMMANDS

```sh
help  Print help info.
```

### OPTIONS

```sh
-d, --debug    Print debug info Default: false
-v, --version  Print CLI version Default: false
```

### QUESTIONS
The app will prompt you for the following:
```sh
✔ Preferred package manager? · npm / yarn
✔ Use ESM (ECMAScript Modules) or CommonJS? · commonjs / esm
✔ Name of your CLI? · my-cli
✔ CLI command? run-cli
✔ Description of your CLI? · a good cli
✔ Version of your CLI? · 0.1.1
✔ node version for .nvmrc? · 14.16.1
✔ Name of the author? · Graham Nessler
```

<br />

For details on the original package on which this is built, see the original [create-node-cli](https://www.npmjs.com/package/create-node-cli).

<br />

## Debugging Package Creation
If you clone down and run this package, you might want to easily be able to create and destroy "test" child packages--for instance, to test if a particular feature is working. I've included a handy way to remove such packages created for experimental purposes. If you namespace a package with `dirtest`, then you can run `npm run clean` or `yarn clean`, and it will prompt you to confirm that you wish to delete all test packages (with this namespace). If you confirm, they will be removed.

<br />

## Changelog

[❯ Read the changelog here →](https://github.com/gness1804/create-node-cli/blob/master/CHANGELOG.md)
