# eslint-config-medopad

[![Package Version](https://img.shields.io/npm/v/eslint-config-medopad.svg?style=flat-square)](https://npmjs.org/package/eslint-config-medopad)
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

## Badge

Include the badge in your README to let people know that the code is using the Medopad code style.

[![Medopad Code Style](https://img.shields.io/badge/code%20style-Medopad-brightgreen.svg?style=flat-square)](https://github.com/Medopad/eslint-config-medopad)

```markdown
[![Medopad Code Style](https://img.shields.io/badge/code%20style-Medopad-brightgreen.svg?style=flat-square)](https://github.com/Medopad/eslint-config-medopad)
```

## Test

```
npm test
```
