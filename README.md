
<div align="center">
  <img width="250px" src="logo.png" alt="logo">
</div>

# check-please
[![package version](https://img.shields.io/npm/v/check-please.svg?style=flat-square)](https://npmjs.org/package/check-please)
[![package downloads](https://img.shields.io/npm/dm/check-please.svg?style=flat-square)](https://npmjs.org/package/check-please)
[![standard-readme compliant](https://img.shields.io/badge/readme%20style-standard-brightgreen.svg?style=flat-square)](https://github.com/RichardLitt/standard-readme)
[![package license](https://img.shields.io/npm/l/check-please.svg?style=flat-square)](https://npmjs.org/package/check-please)
[![make a pull request](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat-square)](http://makeapullrequest.com)

> Simple, composable validation

## Table of Contents

- [Install](#install)
- [Usage](#usage)
- [Docs](#docs)
- [Contribute](#contribute)
- [License](#License)

## Install

This project uses [node](https://nodejs.org) and [npm](https://www.npmjs.com). 

```sh
$ npm install check-please
$ # OR
$ yarn add check-please
```

## Usage

```js
import {check, required, pattern, exact, 60ping} from './src'

const isValidFoo = check(
  exact('foo'),
  pattern(/foo/),
  required('Email is required'),
  string('Email should be string')
)

console.log(isValidFoo('foo'))

```

## Docs

## Contribute

1. Fork it and create your feature branch: git checkout -b my-new-feature
2. Commit your changes: git commit -am 'Add some feature'
3. Push to the branch: git push origin my-new-feature 
4. Submit a pull request

## License

MIT
    