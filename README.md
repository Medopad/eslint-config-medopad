# eslint-config-medopad

[![Travis CI Build Status](https://img.shields.io/travis/Medopad/eslint-config-medopad/master.svg?style=flat-square)](https://travis-ci.org/Medopad/eslint-config-medopad)
[![License](http://img.shields.io/badge/license-MIT-green.svg?style=flat-square)](LICENSE)

This is [Medopad](http://medopad.com)'s [ESLint](http://eslint.org) config.

## Install

[Shareable configs](http://eslint.org/docs/developer-guide/shareable-configs) are designed to work with the `extends` feature of `.eslintrc` files.

First, install the config (with all of its dependencies):

```
npm install eslint-config-medopad --save-dev
```

Then, add this to your `.eslintrc` file:

```
extends:
  - "medopad"
```

You can override settings from the shareable config by adding them directly into your `.eslintrc` file.

## Test

```
npm test
```
